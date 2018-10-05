import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
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

  constructor(props){
    super(props)
    this.state = {
      activeRoom: " "
    }
  }

  setRoom(){
    const currentRoom = this.room.key;
    this.room.activeRoom = currentRoom;
    this.setState({activeRoom: currentRoom});
    //code...method to capture the room key...it will be stored in activeROOM state...
    //then pass to messageList and use it to find all messages associated with that room.
  }

  handleRoomClick(room){
    const isSameRoom = this.state.currentRoom === room;
    if(this.state.room && isSameRoom){
      room === activeRoom;
    }
  }
  render() {
    return (
      <section>
      <RoomList
        firebase = {firebase}
        />
        <MessageList
           firebase = {firebase}
           activeRoom = {this.state.activeRoom}
          />
      </section>
    );
  }
}

export default App;
