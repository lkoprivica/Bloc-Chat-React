import React, { Component } from 'react';


class MessageList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            content: "",
            userName: "",
            sentAt: "",
            roomId: ""
        }
        this.messagesRef = this.props.firebase.database().ref('messages')

    }

    componentDidMount() {
        this.messagesRef.on('child_added', snapshot => {
            const message = snapshot.val();
            message.key = snapshot.key;
            this.setState({
                messages: this.state.messages.concat(message)
            })
            console.log(snapshot.val());
        });
    }

    createMessage=(event)=> {
        var d = new Date();
        var n = d.toLocaleTimeString();
        event.preventDefault();
        console.log("this room id is: ", this.state.roomId)
        if (this.props.activeRoomId === '') {
          window.alert("Please Choose a Chat Room First =)")
        }
        else {
          this.messagesRef.push({
          userName: !this.props.user ? "Guest" : this.props.user.displayName,
          content: this.state.content,
          sentAt: n,
          roomId: this.props.activeRoom

          })

        }
        this.setState({
          userName: "",
          content: "",
          sentAt:"",
          roomId: ""
        })
      }
    handleChange=(event)=>{
      event.preventDefault();
      this.setState({
        userName: this.props.displayName,
        content: event.target.value,
        sentAt: "",
        roomId: this.props.activeRoom.id
      });
    }

    render() {
      console.log(this.props.activeRoom + " from app");
      return (
        <section>
        <div className="chatroom-name">
          <h2>{this.props.activeRoom}</h2>
        </div>
        <div className = "MessageList">
          <ul>
             {this.state.messages.filter(val => {
                return this.props.activeRoom === val.roomId
            })
            .map((val, index) => {

                return <li className ="message-form" key={index}>
                  {val.username}
                  {val.content}
                  {val.sentAt}
                </li>
              })
            }
          </ul>

        <div className="newMessage">
          <form className="message-form" onSubmit={(event)=>this.createMessage(event)}>
            <div>
              <input className="messageBox" type="text" size="90" value={this.state.content} placeholder="Type message here" onChange={(event)=>this.handleChange(event)} />
              <input className="sendButton" type="submit" value="Send"/>
            </div>
          </form>
        </div>

        </div>
        </section>
      );
    }
}

export default MessageList;
