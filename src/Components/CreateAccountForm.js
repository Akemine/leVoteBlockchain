import React from 'react';
import { Button, Form } from 'react-bootstrap'
import { connect } from 'react-redux'

        function CreateAccount(props) {
            return (
            <Button onClick={props.onClick}>
                Connexion
            </Button>
            );
        }

        class CreateAccountForm extends React.Component {

  
            ConnectClick = () => {
                this.props.Logged()
                console.log(this.props.ConnectState)
              }
            
            constructor(props) {
                super(props);
                this.state = {value: ''};
                this.handleEmail = this.handleEmail.bind(this);
                this.handlePassword = this.handlePassword.bind(this);
                this.handleUsername = this.handleUsername.bind(this);
                this.handleSubmit = this.handleSubmit.bind(this);
                this.state =
                {isConnected: false, email: '', password: '', username: ''}
            }
            
            handleEmail = (event) => {
                this.setState({email: event.target.value})
            }
            
            handlePassword = (event) => {
                this.setState({password: event.target.value})
            }
            
            handleUsername = (event) => {
                this.setState({username: event.target.value})
            }
            
            handleSubmit = (event) => {
                let index = 4;
                fetch('http://localhost:5000/users/create', {
                method: "POST",
                body: JSON.stringify({
                    "index": index,
                    "email" : this.state.email,
                    "username": this.state.username,
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
            this.setState({isConnected: true})
            console.log(this.state)
        }
        
        
        
        render(){

            let button = <CreateAccount onClick={this.handleSubmit} />;
            return (
                <div className="container">
                <Form>
                <Form.Group>
                <Form.Label>Nom d'utilisateur </Form.Label>
                <Form.Control placeholder="Entrer votre nom d'utilisateur" value={this.state.username} onChange={this.handleUsername}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Adresse Email</Form.Label>
                <Form.Control type="email" placeholder="Entrer votre adresse Email" value={this.state.value} onChange={this.handleEmail} />
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

        const mapStateToProps = state => {
            return {
              ConnectState: state.ConnectState
            }
          }
          
           const mapDispatchToProps = dispatch => {
             return {
              Logged: isConnected => {
                dispatch({type: "USER_CONNECTED", ConnectState: true})
               }
             }
           }
        
        export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountForm);
        