import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../firebase/Firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

    constructor() {
        super();
        this.ref = firebase.firestore().collection('product');
        this.state = {
            title: '',
            description: '',
            price: ''
        };
    }
    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { title, description, price } = this.state;

        this.ref.add({
            title,
            description,
            price
        }).then((docRef) => {
            this.setState({
                title: '',
                description: '',
                price: ''
            });
            this.props.history.push("/dashboard")
        })
            .catch((error) => {
                console.error("Error adding item: ", error);
            });
    }

    render() {
        const { title, description, price } = this.state;
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            Add Product
            </h3>
                    </div>
                    <div class="panel-body">
                        <h4><Link to="/dashboard" class="btn btn-primary">Product List</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label for="title">Title:</label>
                                <input type="text" class="form-control" name="title" value={title} onChange={this.onChange} placeholder="Title" />
                            </div>
                            <div class="form-group">
                                <label for="description">Description:</label>
                                <textArea class="form-control" name="description" onChange={this.onChange} placeholder="Description" cols="80" rows="3">{description}</textArea>
                            </div>
                            <div class="form-group">
                                <label for="author">Price:</label>
                                <input type="text" class="form-control" name="price" value={price} onChange={this.onChange} placeholder="Price" />
                            </div>
                            <button type="submit" class="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;