import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RoomList from './components/RoomList';
import * as firebase from 'firebase';

 var config = {
   apiKey: "AIzaSyC6h46UjcJcLBbcebmlvLhtEbKYf-Lz9Ig",
   authDomain: "bloc-chat-react-67c0c.firebaseapp.com",
   databaseURL: "https://bloc-chat-react-67c0c.firebaseio.com",
   projectId: "bloc-chat-react-67c0c",
   storageBucket: "bloc-chat-react-67c0c.appspot.com",
   messagingSenderId: "958952310862"
 };
 firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <section>
      <RoomList
        firebase = {firebase}
        />
       
      </section>
    );
  }
}

export default App;
