import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { composeWithDevTools } from "redux-devtools-extension";

import 'firebase/firestore' // <- needed if using firestore
import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers, compose } from "redux";
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from "react-redux-firebase";
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore

const fbConfig = {
  apiKey: "AIzaSyCbrRTCzREhROeSr4Ac5wr5-UPbPkHFK9k",
  authDomain: "studentbase-c6eee.firebaseapp.com",
  databaseURL: "https://studentbase-c6eee.firebaseio.com",
  projectId: "studentbase-c6eee",
  storageBucket: "studentbase-c6eee.appspot.com",
  messagingSenderId: "155131312390",
  appId: "1:155131312390:web:6ac325827cbb21c1818687",
  measurementId: "G-M01YP6BPZE",
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(fbConfig);

// Initialize other services on firebase instance
firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer // <- needed if using firestore
});

// Create store with reducers and initial state
const initialState = {};
const store = createStore(rootReducer, initialState, composeWithDevTools());

 export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};
export default store;
