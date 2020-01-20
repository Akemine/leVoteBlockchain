import React, { Component } from 'react';
import {withRouter} from 'react-router'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'
import LoginForm from '.\\LoginForm';
import { connect } from 'react-redux'


//let userData = ""


class AVoter extends Component{
    constructor(props){
        super(props);
    
        this.state = {
          vote : '0x4caD7A85381E9f6851559320218b0c4B6dD5e874',
          items: [],
          isLoaded: false,
          nameVote: ""
        }
      }

      componentDidMount = (event) => {
        fetch("http://localhost:5000/contracts/" + this.state.vote, {
          method: "POST",
          body: JSON.stringify({
            "user_address" : this.state.Address_User,
            "proposal_index": 1
          }),
          headers: {
            "Content-Type": "application/json",
            "Accept-Encoding": "gzip , deflate, br",
            "sec-fetch-mode": "no-cors",
            "Authorization": this.state.Token,
            "Access-Control-Request-Headers": "content-type",
            "Access-Control-Request-Method": "GET",
            "Access-Control-Allow-Origin": "*"
          }
        }).then(response => response.json())
        .then(response => {
          console.log(response)
        })
      }

 

    render(){  

            return (

                
                <div className="home">
                  <p> A VOTER </p>
                 
                </div>
                    )
                
                
                
                
                    }
                }

                const mapStateToProps = state => {
                  return {
                    ConnectState: state.ConnectState,
                    Token: state.Token,
                    Address_User: state.Address_User,
                    Address_Vote: state.Address_Vote
                  }
                }
                
                
                
                export default connect(mapStateToProps)(withRouter(AVoter))