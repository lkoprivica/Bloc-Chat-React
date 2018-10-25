import React, { Component } from 'react';


class MessageList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            messages: [],
<<<<<<< HEAD
            value: ""
=======
            content: "",
            userName: "",
            sentAt: "",
            roomId: ""
>>>>>>> checkpoint-send-messages
        }
        this.messagesRef = this.props.firebase.database().ref('messages')
    }

    componentDidMount() {
        this.messagesRef.on('child_added', snapshot => {
<<<<<<< HEAD
            temp.push(snapshot.val())
=======
            const message = snapshot.val();
            message.key = snapshot.key;
>>>>>>> checkpoint-send-messages
            this.setState({
                messages: this.state.messages.concat(message)
            })
            console.log(snapshot.val());
        });
    }

<<<<<<< HEAD
    handleChange=(event)=>{
      this.setState({value: event.target.value});
    }

    handleSubmit=(event)=>{
      event.preventDefault();
      this.messagesRef.push({
        message: this.state.value
      });
      this.setState({
        value: ""
      })
=======
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
          roomId: this.props.activeRoom.key

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
>>>>>>> checkpoint-send-messages
    }

    render() {
      console.log(this.props.activeRoom + " from app");
      return (
<<<<<<< HEAD
        <section className = "MessageList">
=======
        <section>
        <div className="chatroom-name">
          <h2>{this.props.activeRoom.name}</h2>
        </div>
        <div className = "MessageList">
>>>>>>> checkpoint-send-messages
          <ul>
             {this.state.messages.filter(val => {
                return this.props.activeRoom.key === val.roomId
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

<<<<<<< HEAD
          <form onSubmit={this.handleSubmit}>
           <label>
             Create Message:
             <input type="text" value={this.state.value} onChange={this.handleChange} />
           </label>
           <input type="submit" value="Submit" />
         </form>
=======
        <div className="newMessage">
          <form className="message-form" onSubmit={(event)=>this.createMessage(event)}>
            <div>
              <input className="messageBox" type="text" size="90" value={this.state.content} placeholder="Type message here" onChange={(event)=>this.handleChange(event)} />
              <input className="sendButton" type="submit" value="Send"/>
            </div>
          </form>
        </div>

        </div>
>>>>>>> checkpoint-send-messages
        </section>
      );
    }
}

export default MessageList;
