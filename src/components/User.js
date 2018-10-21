import React, {Component} from 'react';

class User extends Component {
  constructor(props){
    super(props)

    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider );
  }

  function signInButton(){
    return this.auth.signInWithPopup();
  }

  render()
    return (
      <section>
        <button onClick = {signInButton}
      </section>
    )

}
