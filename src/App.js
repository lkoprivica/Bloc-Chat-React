import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
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
      <div className="App">
        <header className="App-header">
          <nav>
          <Link to='/RoomList'>RoomList</Link>
          </nav>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <Route exact path="/RoomList" component={RoomList} />

        </main>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
