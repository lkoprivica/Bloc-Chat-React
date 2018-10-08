import React, {Component} from 'react';

class MessageList extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: [],
      currentRoom: this.room
    };
     this.roomsRef = this.props.firebase.database().ref('messages');

  }

  componentDidMount(){
    this.roomsRef.on('child_added', snapshot => {
      const message = snapshot.val();

      this.setState({messages: this.state.messages.concat(message) })
      console.log(snapshot.val());

    });
  }


  render(){
    return(
      <section className='messageList'>
      <ul>
        {this.state.messages.map((message) =>
          <li className="message" key={message.key}> 
            {message.name}
          </li>
        )}
      </ul>

      </section>
    );
  }
}
export default MessageList;
