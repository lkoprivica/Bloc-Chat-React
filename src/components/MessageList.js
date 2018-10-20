import React, { Component } from 'react';


class MessageList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            messages: []

        }

        this.messagesRef = this.props.firebase.database().ref('messages')

    }

    componentDidMount() {
        let temp = [];
        this.messagesRef.on('child_added', snapshot => {


            temp.push(snapshot.val())

            this.setState({
                messages: temp
            })
            console.log(this.state.messages);
        });
    }
    render() {
      console.log(this.props.activeRoom + " from app");
      return (
        <div>
          <ul>
           {this.state.messages.filter(val => {
              return this.state.messages === this.props.ActiveRoom
          })
          .map(val => {
              if(this.props.activeRoom === val.roomId){
                return <li key = {index}>{val.Content}</li>
              }
            })
          </ul>
        </div>
      );
    }
}

export default MessageList
