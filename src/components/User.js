import React, {Component} from 'react';

class User extends Component {
  constructor(props){
    super(props)

    this.state = {
      signIn: false,
      signOut: false

    }
  }
  componentDidMount(){
    this.props.firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user);
    });
  }

  signIn = (event) => {
    event.preventDefault();
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup(provider);
    this.setState({
      SignIn: true
    })
  }

  signOut = (event) => {
    event.preventDefault();
    this.props.firebase.auth().signOut();
    this.setState({
      signOut: true
    })
  }

  handleChangeSignIn=(event)=>{
    this.setState({SignIn: event.target.SignIn});
  }

  handleChangeSignOut=(event)=>{
    this.setState({SignOut: event.target.SignOut});
  }

  render() {
    return (
     <section className = "signInsignOut">
      <button onClick={this.signIn}>
        Sign In
      </button>
      <button onClick={this.signOut}>
        Sign Out
      </button>
     </section>
   );
  }
}
export default User;
