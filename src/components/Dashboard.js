import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import firebase from '../firebase/Firebase';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('product');
        this.unsubscribe = null;
        this.state = {
            products: []
        };
    }

    onCollectionUpdate = (querySnapshot) => {
        const products = [];
        querySnapshot.forEach((doc) => {
            const { title, description, price } = doc.data();
            products.push({
                key: doc.id,
                doc, // DocumentSnapshot
                title,
                description,
                price,
            });
        });
        this.setState({
            products
        });
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    render() {
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            Product List
            </h3>
                    </div>
                    <div class="panel-body">
                        <h4><Link to="/create">Add Product</Link></h4>
                        <table class="table table-stripe">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.products.map(product =>
                                    <tr>
                                        <td><Link to={`/show/${product.key}`}>{product.title}</Link></td>
                                        <td>{product.description}</td>
                                        <td>{product.price}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;