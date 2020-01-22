import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { connect } from 'react-redux'

let address =""
let token = ""
let userData = ""
let pseudo = ""
let isConnected = false

function LoginButton(props) {
  return (
    <Button onClick={props.onClick}>
      Connexion
    </Button>
  );
}


class LoginForm extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state =
    {isConnected: false, email: '', password: ''} 
  }

  handleEmail = (event) => {
    this.setState({email: event.target.value})
  }

  handlePassword = (event) => {
    this.setState({password: event.target.value})
  }

  ConnectClick = () => {
    this.props.Logged()
    console.log(this.props.ConnectState)
  }

  DisconnectClick = () => {
    this.props.Unlogged()
    console.log(this.props.ConnectState)
  }

  handleSubmit = (event) => {
    fetch('http://localhost:5000/auth/login', {
    method: "POST",
    body: JSON.stringify({
      "email" : this.state.email,
      "password": this.state.password
    }),
    headers: {
      "Content-Type": "application/json",
      "Accept-Encoding": "gzip , deflate, br",
      "sec-fetch-mode": "no-cors",
      "Access-Control-Request-Headers": "content-type",
      "Access-Control-Request-Method": "POST",
      "Access-Control-Allow-Origin": "*"
    }
  })
  .then(response => response.json())
  .then(response => {
    token = response.Authorization
    userData = JSON.parse(response.user)
    address = userData.address
    pseudo = userData.username
    console.log(address)
    console.log(token)
    console.log("Vous êtes connecté.")
    this.setState({isConnected: true})
  })
  event.preventDefault();
}



  render(){
    //const {IsConnected} = this.props; // info du magasin
    isConnected = this.state.isConnected;
    let button;

    button = <LoginButton onClick={this.handleSubmit} />;
    if (isConnected == true) {
      this.props.Logged()
      console.log(this.props);
    } else {
      this.props.Unlogged()
    }

    if(this.props.ConnectState == false){
   return (
       <div className="container">
       <Form>
       <Form.Group >
       <Form.Label>Adresse Email</Form.Label>
       <Form.Control type="email" placeholder="Entrer votre adresse Email" value={this.state.value} onChange={this.handleEmail}/>
       <Form.Text className="text-muted">
       Ne partagez jamais votre adresse Email !
       </Form.Text>
       </Form.Group>
       <Form.Group controlId="formBasicPassword">
       <Form.Label>Mot de passe</Form.Label>
       <Form.Control type="password" placeholder="Entrer votre mot de passe" value={this.state.password} onChange={this.handlePassword}/>
       </Form.Group>
       {button}
       
       </Form>
       
        </div>
     )
   }
   else {
    return(
      <div className="container">
      <Form>
      <Form.Group >
      <Form.Label>Adresse Email</Form.Label>
      <Form.Control type="email" placeholder="Entrer votre adresse Email" value={this.state.value} onChange={this.handleEmail}/>
      <Form.Text className="text-muted">
      Ne partagez jamais votre adresse Email !
      </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
      <Form.Label>Mot de passe</Form.Label>
      <Form.Control type="password" placeholder="Entrer votre mot de passe" value={this.state.password} onChange={this.handlePassword}/>
      </Form.Group>
      {button}
      </Form>
      
       </div>
      )
   }

   }
}

const mapStateToProps = state => {
  return {
    ConnectState: state.ConnectState,
    Token: state.Token,
    Address_User: state.Address_User,
    Pseudo: state.Pseudo
  }
}

 const mapDispatchToProps = dispatch => {
   return {
    Logged: isConnected => {
      dispatch({type: "USER_CONNECTED", ConnectState: true, Token: token, Address_User: address, Pseudo: pseudo})
     },

    Unlogged: isConnected => {
      dispatch({type: "USER_DISCONNECTED", ConnectState: false, Token: "disconnected", Address_User: "disconnected"})
    }
   }
 }
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
