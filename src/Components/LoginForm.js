import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import {withRouter} from 'react-router'

let address =""
let token = ""
let userData = ""
let pseudo = ""
let isConnected = false

function LoginButton(props) {
  return (
    <Button onClick={props.onClick}>
      Se connecter
    </Button>
  );
}

function InscriptionButton(props) {
  return (
    <Button onClick={props.onClick}>
      M'inscrire
    </Button>
  );
}


class LoginForm extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.handleEmailLogin = this.handleEmailLogin.bind(this);
    this.handlePasswordLogin = this.handlePasswordLogin.bind(this);
    this.handleSubmitLogin = this.handleSubmitLogin.bind(this);

    this.handleEmailInscription = this.handleEmailInscription.bind(this);
    this.handlePasswordInscription = this.handlePasswordInscription.bind(this);
    this.handleUsernameInscription = this.handleUsernameInscription.bind(this);
    this.handleSubmitInscription = this.handleSubmitInscription.bind(this);

    this.state =
    {isConnected: false, emailLogin: '', passwordLogin: '', emailInscription: '', passwordInscription: '', usernameInscription: ''} 
    }

    // Email de l'inscription
    handleEmailInscription = (event) => {
      this.setState({emailInscription: event.target.value})
    }
    // password de l'inscription
  handlePasswordInscription = (event) => {
      this.setState({passwordInscription: event.target.value})
    }
    // Email de l'inscription
  handleUsernameInscription = (event) => {
      this.setState({usernameInscription: event.target.value})
    }
    // Email de l'inscription
  handleEmailLogin = (event) => {
    this.setState({emailLogin: event.target.value})
    }
    // Email de l'inscription
  handlePasswordLogin = (event) => {
    this.setState({passwordLogin: event.target.value})
    }

  ConnectClick = () => {
    this.props.Logged()
    console.log(this.props.ConnectState)
  }

  DisconnectClick = () => {
    this.props.Unlogged()
    console.log(this.props.ConnectState)
  }

  handleSubmitLogin = (event) => {
    fetch('http://localhost:5000/auth/login', {
    method: "POST",
    body: JSON.stringify({
      "email" : this.state.emailLogin,
      "password": this.state.passwordLogin
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
  console.log(this.state.emailLogin)
  console.log(this.state.passwordLogin)
  event.preventDefault();
}

handleSubmitInscription = (event) => {
    let index = 20;
    fetch('http://localhost:5000/users/create', {
    method: "POST",
    body: JSON.stringify({
        "index": index,
        "email" : this.state.emailInscription,
        "username": this.state.usernameInscription,
        "password": this.state.passwordInscription
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
  this.setState({isConnected: true})
  console.log(this.state)
  }


  render(){
    //const {IsConnected} = this.props; // info du magasin
    isConnected = this.state.isConnected
    let buttonAlreadyInscrit
    let buttonInscription

    buttonAlreadyInscrit = <LoginButton onClick={this.handleSubmitLogin} />
    buttonInscription = <InscriptionButton onClick={this.handleSubmitInscription} />

    if (isConnected == true) {
      this.props.Logged()
      this.props.history.push("/")
    } else {
      this.props.Unlogged()
    }
    console.log(this.state)
    if(this.props.ConnectState == false){
   return (
       <div className="container">
        <div className="row">
          <div className="col-md-6">
       <h3>Déjà inscrit ?</h3>
       <Form>
       <Form.Group >
          <Form.Label>Adresse Email</Form.Label>
        <Form.Control type="email" placeholder="Entrer votre adresse Email" value={this.state.value} onChange={this.handleEmailLogin}/>
       <Form.Text className="text-muted">
       Ne partagez jamais votre adresse Email !
       </Form.Text>
       </Form.Group>
       <Form.Group controlId="formBasicPassword">
          <Form.Label>Mot de passe</Form.Label>
       <Form.Control type="password" placeholder="Entrer votre mot de passe" value={this.state.passwordLogin} onChange={this.handlePasswordLogin}/>
       </Form.Group>
        {buttonAlreadyInscrit}
       </Form>
       </div>
          <div className="col-md-6">
            <h3>S'inscrire</h3>
            <Form>
                <Form.Group>
                  <Form.Label>Nom d'utilisateur </Form.Label>
                  <Form.Control placeholder="Entrer votre nom d'utilisateur" value={this.state.usernameInscription} onChange={this.handleUsernameInscription}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Adresse Email</Form.Label>
                  <Form.Control type="email" placeholder="Entrer votre adresse Email" value={this.state.value} onChange={this.handleEmailInscription} />
                <Form.Text className="text-muted">
                Ne partagez jamais votre adresse Email !
                </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Mot de passe</Form.Label>
                  <Form.Control type="password" placeholder="Entrer votre mot de passe" value={this.state.passwordInscription} onChange={this.handlePasswordInscription}/>
                </Form.Group>
                  {buttonInscription}
              </Form>
            </div>
          </div>
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
      {buttonAlreadyInscrit}
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
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));
