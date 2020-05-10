import React, { Component } from 'react'
import Navbar from './Navbar';
import firebase from '../firebase/Firebase';

class Report extends Component {

    constructor() {
        super();
        this.ref = firebase.firestore().collection('report');
        this.state = {
            fullname: '',
            username: '',
            reportText: ''
        };
    }

    onChange = (e) => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { fullname, username, reportText } = this.state;

        this.ref.add({
            fullname,
            username,
            reportText
        }).then((docRef) => {
            this.setState({
                fullname: '',
                username: '',
                reportText: ''
            });
            this.props.history.push("/")
        })
            .catch((error) => {
                console.error("Error adding item: ", error);
            });
    }

    render() {
        const { fullname, username, reportText } = this.state;
        return (
            <div>
                <Navbar />
                <br />
                <form class="col-sm-6 mx-auto" onSubmit={this.onSubmit}>
                    <h3><strong>Report Page</strong></h3>
                    <div class="form-group">
                        <input type="text" class="form-control" id="fullname" name="fullname" value={fullname} onChange={this.onChange} placeholder="Input Name" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" id="username" name="username" value={username} onChange={this.onChange} placeholder="Input Username" />
                    </div>
                    <div class="form-group">
                        <textarea type="text" class="form-control" id="reportText" name="reportText" onChange={this.onChange} placeholder="Your Problem">{reportText}</textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Report;