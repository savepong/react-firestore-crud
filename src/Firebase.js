import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyCW-TtAdUsObZgsEXuOJUvXw4_5XmZhXyU",
    authDomain: "savepong-react-crud.firebaseapp.com",
    databaseURL: "https://savepong-react-crud.firebaseio.com",
    projectId: "savepong-react-crud",
    storageBucket: "savepong-react-crud.appspot.com",
    messagingSenderId: "55477280434"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;