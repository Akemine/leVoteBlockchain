import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import { Button, Form } from 'react-bootstrap';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
      }
    
      handleSubmit(event) {
        alert('Le nom a été soumis : ' + this.state.name);
        event.preventDefault();
      }
    
    render(){
        return (
        <div className="container">
        <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Adresse Email</Form.Label>
        <Form.Control type="email" placeholder="Entrer votre email" value={this.state.value} onChange={this.handleChange}/>
        <Form.Text className="text-muted">
        Ne partagez jamais votre email avec quelqu'un d'autre.
        </Form.Text>
        </Form.Group>
        
        <Form.Group controlId="formBasicPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control type="password" placeholder="Mot de passe" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
        Finaliser l'inscription
        </Button>
        </Form>
        </div>
        )
    }
}
    
    export default LoginForm;

    // <form onSubmit={this.handleSubmit}>
    //     <label>
    //       Nom :
    //       <input type="text" value={this.state.value} onChange={this.handleChange} />
    //     </label>
    //     <input type="submit" value="Envoyer" />
    //   </form>