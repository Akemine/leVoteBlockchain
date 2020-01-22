import React from 'react'
import { Button, Form } from 'react-bootstrap'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";


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
  let endDate = ""+day + "/0" + month + "/" +year 
  
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
      let proposals = []
      proposals = [this.state.proposalOne, this.state.proposalTwo] 
      fetch('http://localhost:5000/contracts/create', {
      method: "PUT",
      body: JSON.stringify({
        "name": this.state.nameVote,
        "description": this.state.description,
        "end_date": endDate,  
        "user_address": this.props.Address_User,
        "proposals": proposals
      }),
      headers: {
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip , deflate, br",
        "sec-fetch-mode": "no-cors",
        "Authorization": this.props.Token,
        "Access-Control-Request-Headers": "content-type",
        "Access-Control-Request-Method": "POST",
        "Access-Control-Allow-Origin": "*"
      }
    }) .then(response => response.json())
    .then(response => {
      this.props.history.push("/some/Path");
    })
    console.log(this.state.nameVote)
    console.log(this.state.description)
    console.log(endDate)
    console.log(this.props.Address_User)
    console.log(proposals)
    event.preventDefault();
  }
  render(){
    console.log(this.props.Token)
  
    let button

    button = <VoteCreated onClick={this.handleSubmit} />

    if(this.props.ConnectState == true){
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
      {button}
      </Form>
      
      </div>
      )
    }
    else {
      return(
        <LoginForm />
      )
    }
    }
  }

  
  const mapStateToProps = state => {
    return {
      ConnectState: state.ConnectState,
      Token: state.Token,
      Address_User: state.Address_User
    }
  }
  
  
  export default connect(mapStateToProps)(withRouter(CreateVote));
  