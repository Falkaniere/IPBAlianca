import firebase from 'firebase';

const productionSettings = {

};

const developementSettings = {

};

const config = process.env.NODE_ENV === 'production' ? productionSettings : developementSettings;

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
export const firebaseAuth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
