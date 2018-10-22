import React, { Component } from 'react';


class MessageList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            messages: [],
            value: ""
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
    }

    render() {
      console.log(this.props.activeRoom + " from app");
      return (
        <section className = "MessageList">
          <ul>
           {this.state.messages.filter(val => {
              return this.props.activeRoom === val.roomId
          })
          .map((val, index) => {
              return <li key = {index}>{val.Content}</li>
            })
          }
          </ul>

          <form onSubmit={this.handleSubmit}>
           <label>
             Create Message:
             <input type="text" value={this.state.value} onChange={this.handleChange} />
           </label>
           <input type="submit" value="Submit" />
         </form>
        </section>
      );
    }
}

export default MessageList;
