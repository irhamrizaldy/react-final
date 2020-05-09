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

        return (
            <div class="card" style={{width: '18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )
    }

}


export default Home;