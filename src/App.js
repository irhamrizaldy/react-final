import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './firebase/Firebase';
import Navbar from './interface/Navbar';

class App extends Component {
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
      <Navbar />
    )
  }
}

export default App;