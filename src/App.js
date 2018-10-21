import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import * as firebase from 'firebase';
import User from './components/User';

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
  constructor(props){
    super(props)

    this.state = {
      activeRoom: "" ,
      user: null
    }
  }

  setRoom=(roomKey)=>{
    this.setState({
      activeRoom: roomKey
    })
  }

  setUser=(user)=>{
    this.setState({
      user: user
    })
  }

  render() {
    return (
      <section>
      <RoomList
        firebase = {firebase}
        setRoom = {this.setRoom}
      />
      <MessageList
        firebase = {firebase}
        activeRoom = {this.state.activeRoom}
      />
      <User
        firebase = {firebase}
        user={this.state.user}
        setUser = {this.setUser.bind(this)}
      />
      </section>
    );
  }

}

export default App;
