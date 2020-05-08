import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = { timestampsInSnapshots: true };

const config = {
    apiKey: "AIzaSyAJBIkYjXSI8JExC3PxC-_aDt8DiRz0SO4",
    authDomain: "fir-reactjs-630c9.firebaseapp.com",
    databaseURL: "https://fir-reactjs-630c9.firebaseio.com",
    projectId: "fir-reactjs-630c9",
    storageBucket: "fir-reactjs-630c9.appspot.com",
    messagingSenderId: "591307863439",
    appId: "1:591307863439:web:017d38c1804c8fb77c87fa",
    measurementId: "G-RWE5LD8JT2"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;