import React, {Component} from 'react';

class RoomList extends Component {
  constructor(props){
    super(props);
    this.state = {
      rooms: [],
      value:''
    };

   this.roomsRef = this.props.firebase.database().ref('rooms');

  }

  handleChange=(event)=>{
    this.setState({value: event.target.value});
  }

  handleSubmit=(event)=>{
    event.preventDefault();
    this.roomsRef.push({
      name: this.state.value
    });
    this.setState({
      value: ""
    })
  }

  componentDidMount(){
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({rooms: this.state.rooms.concat(room) })
      console.log(snapshot.val());
    });
  }

  render(){
    return(
      <section className='roomList'>
      <ul>
        {this.state.rooms.map((room) =>
          <li className="room" key={room.key} onClick = {()=>this.props.setRoom(room.key)}>
            {room.name}
          </li>
        )}
      </ul>
      <form onSubmit={this.handleSubmit}>
       <label>
         Create room:
         <input type="text" value={this.state.value} onChange={this.handleChange} />
       </label>
       <input type="submit" value="Submit" />
     </form>
     </section>

    );
  }

}

export default RoomList;
