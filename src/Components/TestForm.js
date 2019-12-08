import React, {Component} from 'react';
import { Button } from 'react-bootstrap'


class TestForm extends Component {
 
 state = { 
   name: null,
   age: null,
   gender: null
}

change = e => {
    this.setState({[e.target.id]: e.target.value})
}

submit = e => {
    e.preventDefault()
    this.props.addUser(this.state)
}


render(){
 return (
   <div>
    <form onSubmit={this.submit}>
        <label htmlFor="name">Nom:</label>
        <input type="text" id="name" onChange={this.change}/> 

        <label htmlFor="age">Age:</label>
        <input type="text" id="age" onChange={this.change}/> 

        <label htmlFor="gender">Sexe:</label>
        <input type="text" id="gender" onChange={this.change}/> 

        <button> Valider </button>
    </form>
   </div>
   
   );
 }
 
}

export default TestForm;

