import React, { Component } from 'react';
import {withRouter} from 'react-router'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'
import DetailsVote from './DetailsVote';
import { connect } from 'react-redux'
import {BrowserRouter, Route } from 'react-router-dom';
import LoginForm from '.\\LoginForm';



class Votes extends Component {

    
    constructor(props){
        super(props);
    
        this.state = {
          items: [],
          isLoaded: false,
        }
      }
      
    componentDidMount() {
        fetch('http://localhost:5000/contracts/all', {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Accept-Encoding": "gzip , deflate, br",
            "sec-fetch-mode": "no-cors",
            "Access-Control-Request-Headers": "content-type",
            "Access-Control-Request-Method": "GET",
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            items: json["data"]
          })
          
        })
      }

    render(){
       
        var {isLoaded, items} = this.state; 
      console.log(this.state.items)
      if (!isLoaded){
        return <div>Loading...</div>
      }
      else {

        //console.table(items)
        if(this.props.ConnectState == true){
        return (

        <div className="App">
        
         <div className="container">
        <Button href=" /CreateVote">Créer un vote</Button>
        
        

        </div>
        <ul> 
          {items.map(item => (
            <a href={"/DetailsVote?address=" + item.address + ""}> <li key={item.address}>{item.name}</li></a>
            
          ))}
          
        </ul>
  
        <div className="container">
    
        </div>
        </div>
        )
          }
          else {
            return (
              <LoginForm />
              )
          }
    }


}


}

    const mapStateToProps = state => {
      return {
        ConnectState: state.ConnectState,
        Token: state.Token,
        Address_User: state.Address_User,
      }
    }

    const mapDispatchToProps = dispatch => {
      return {
       Logged: isConnected => {
         dispatch({type: "USER_CONNECTED", ConnectState: true})
         
        },
   
       Unlogged: isConnected => {
         dispatch({type: "USER_DISCONNECTED", ConnectState: false, Token: "disconnected", Address_User: "disconnected"})
       }
      }
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Votes));