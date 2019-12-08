import React from 'react'
import { Button, Form } from 'react-bootstrap'

let address = ""
let token = "0x14f021B82a5752C7f0bBb1d5eF5f7bD4b22e4070"
let userData = ""
let isConnected = false
let description= ""
let firstName= ""
let name =" "

function ButTest(props) {
  return (
    <Button onClick={props.onClick}>
    test console
    </Button>
  )
}
function VoteCreated(props) {
  return (
    <Button onClick={props.onClick}>
    Créer mon vote
    </Button>
    );
  }
  
  
  let day = new Date().getDate() //Current Date
  let month = new Date().getMonth() + 1 //Current Date
  let year = new Date().getFullYear()
  let endDate = "0"+day + "/0" + month + "/" +year 
  
  class CreateVote extends React.Component {
    s
    constructor(props) {
      super(props);
      
      this.handleVote = this.handleVote.bind(this);
      this.handleproposalOne = this.handleproposalOne.bind(this);
      this.handleproposalTwo = this.handleproposalTwo.bind(this);
      this.handleDescription = this.handleDescription.bind(this);
      this.state =
      {nameVote: '', proposalOne: '', proposalTwo: '', description: ''} 
    }
    
    handleVote = (event) => {
      this.setState({nameVote: event.target.value})
    }
    
    handleproposalOne = (event) => {
      this.setState({proposalOne: event.target.value})
      console.log(this.state)
    }
    
    handleproposalTwo = (event) => {
      this.setState({proposalTwo: event.target.value})
    }
    
    handleDescription = (event) => {
      this.setState({description: event.target.value})
    }
    
    
    handleSubmit = (event) => {
      let proposals = [this.state.proposalTwo, this.state.proposalTwo] 
      fetch('http://localhost:5000/contracts/create', {
      method: "POST",
      body: JSON.stringify({
        "name": this.state.nameVote,
        "description": this.state.description,
        "end_date": endDate,  
        "user_address": token,
        "proposals": proposals
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
    event.preventDefault();
  }
  render(){

  
    let button
    let butTest

    butTest = <ButTest onClick={this.handleproposalOne}/>
    button = <VoteCreated onClick={this.handleSubmit} />
    if (isConnected) {
      this.props.history.push("/")
      
    } else {
    }
    return (
      
      <div className="container">
      <Form>
      
      <Form.Label>Nom du vote</Form.Label>
      <Form.Control type="email" placeholder="Entrer le nom de votre vote" value={this.state.value} onChange={this.handleVote}/>
      
      <Form.Label>Choix 1</Form.Label>
      <Form.Control type="text" placeholder="Premier choix de votre vote" value={this.state.value} onChange={this.handleproposalOne}/>
      
      <Form.Label>Choix 2</Form.Label>
      <Form.Control type="text" placeholder="Second choix de votre vote" value={this.state.value} onChange={this.handleproposalTwo}/>
      
      <Form.Label>Description</Form.Label>
      <Form.Control type="text" placeholder="Description du vote" value={this.state.value} onChange={this.handleDescription}/>
      {butTest}
      {button}
      </Form>
      
      </div>
      )
    }
  }
  
  export default (CreateVote);
  