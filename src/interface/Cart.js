import React, { Component } from 'react';
import Navbar from './Navbar';
import firebase from '../firebase/Firebase';

class Cart extends Component {
    constructor() {
        super();;
        this.state = {
            fullname: '',
            address: '',
            item: ''
        };
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { fullname, address, item } = this.state;

        firebase.database().ref("/Cart").push().set(this.state);
        this.props.history.push("/")
    }

    render() {
        const { fullname, address, item } = this.state;
        return (
            <div>
                <Navbar />
                <br />
                <form class="col-sm-6 mx-auto" onSubmit={this.onSubmit}>
                    <h3><strong>Cart Page</strong></h3>
                    <div class="form-group">
                        <input type="text" class="form-control" id="fullname" name="fullname" value={fullname} onChange={this.onChange} placeholder="Input Name" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="address" name="address" value={address} onChange={this.onChange} placeholder="Input Address" />
                    </div>
                    <div class="form-group">
                        <textarea type="text" class="form-control" id="item" name="item" value={item} onChange={this.onChange} placeholder="Your Item" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Cart;