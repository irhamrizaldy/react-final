import React, { Component } from 'react';
import firebase from '../firebase/Firebase';
import { Link } from 'react-router-dom';

class Show extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {},
            key: ''
        };
    }

    componentDidMount() {
        const ref = firebase.firestore().collection('product').doc(this.props.match.params.id);
        ref.get().then((doc) => {
            if (doc.exists) {
                this.setState({
                    product: doc.data(),
                    key: doc.id,
                    isLoading: false
                }); 
            } else {
                console.log("No such item!");
            }
        });
    }

    delete(id) {
        firebase.firestore().collection('product').doc(id).delete().then(() => {
            console.log("Item successfully deleted!");
            this.props.history.push("/dashboard")
        }).catch((error) => {
            console.error("Error removing item: ", error);
        });
    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4><Link to="/dashboard">Product List</Link></h4>
                        <h3 className="panel-title">
                            {this.state.product.title}
                        </h3>
                    </div>
                    <div className="panel-body">
                        <dl>
                            <dt>Description:</dt>
                            <dd>{this.state.product.description}</dd>
                            <dt>Price:</dt>
                            <dd>{this.state.product.price}</dd>
                        </dl>
                        <Link to={`/edit/${this.state.key}`} className="btn btn-success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Show;