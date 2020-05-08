import React, { Component } from 'react';
import firebase from '../firebase/Firebase';
import { Link } from 'react-router-dom';

class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: '',
            title: '',
            description: '',
            price: ''
        };
    }

    componentDidMount() {
        const ref = firebase.firestore().collection('product').doc(this.props.match.params.id);
        ref.get().then((doc) => {
            if (doc.exists) {
                const product = doc.data();
                this.setState({
                    key: doc.id,
                    title: product.title,
                    description: product.description,
                    price: product.price
                });
            } else {
                console.log("No such item!");
            }
        });
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState({ product: state });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { title, description, price } = this.state;

        const updateRef = firebase.firestore().collection('product').doc(this.state.key);
        updateRef.set({
            title,
            description,
            price
        }).then((docRef) => {
            this.setState({
                key: '',
                title: '',
                description: '',
                price: ''
            });
            this.props.history.push("/show/" + this.props.match.params.id)
        })
            .catch((error) => {
                console.error("Error adding item: ", error);
            });
    }

    render() {
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            Edit Product
            </h3>
                    </div>
                    <div class="panel-body">
                        <h4><Link to={`/show/${this.state.key}`} class="btn btn-primary">Product Page</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label for="title">Title:</label>
                                <input type="text" class="form-control" name="title" value={this.state.title} onChange={this.onChange} placeholder="Title" />
                            </div>
                            <div class="form-group">
                                <label for="description">Description:</label>
                                <input type="text" class="form-control" name="description" value={this.state.description} onChange={this.onChange} placeholder="Description" />
                            </div>
                            <div class="form-group">
                                <label for="author">Price:</label>
                                <input type="text" class="form-control" name="price" value={this.state.price} onChange={this.onChange} placeholder="Price" />
                            </div>
                            <button type="submit" class="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Edit;