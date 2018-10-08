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
                {
                   this.state.messages.map((val,index)=>{
                       { /*
                           
                           if this.props.activeRoom is equal to val.roomId
                           THEN
                           render val.Content

                       */ }
                   })

                }
              </ul>

            </div>

        )



    }
}

export default MessageList