import React, { Component } from 'react';
import firebase from '../firebase/Firebase';

class Home extends Component {

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
        let productList = this.state.products.map(product => {
            return (
                <div class="card" style={{ width: '18rem' }}>
                    <div class="card-body">
                        <h5 class="card-title">{product.title}</h5>
                        <p class="card-text">{product.description}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            )
        })
        return (
            <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {productList}
                </div>
            </div>
        )
    }

}


export default Home;