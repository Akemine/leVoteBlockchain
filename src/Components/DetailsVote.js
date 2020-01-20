import React, { Component } from 'react';
import {withRouter} from 'react-router'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'
import LoginForm from '.\\LoginForm';
import { connect } from 'react-redux'
import AVoter from './AVoter';


//let userData = ""


function VoteButton(props) {
  return (
    <Button onClick={props.onClick}>
      {console.log(props.id)}
      
    </Button>
  )
}
let id = 0

class DetailsVote extends Component{
    constructor(props){
        super(props);
    
        this.state = {
          vote :  this.props.location.search.substr(9, 100),
          items: [],
          isLoaded: false,
          nameVote: ""
        }
      }
      
      
    componentDidMount() {
        fetch("http://localhost:5000/contracts/" + this.state.vote, {
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
            nameVote: json ["name"],
            items: json["_proposals"]
          })
        })
        console.log("props : " + this.state)
      }

      handleSubmit = (event) => {
        fetch("http://localhost:5000/contracts/" + this.state.vote, {
          method: "POST",
          body: JSON.stringify({
            "user_address" : this.props.Address_User,
            "proposal_index": 1
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
        }).then(response => response.json())
        .then(response => {
          

        })
        event.preventDefault();
      }

 

    render(){  
      //console.log("props : " + this.props)
     //console.log(this.props.Address_User)
      
        var {isLoaded, items} = this.state;
        // const detail = this.props.detail ? (
        //     <div className="detail">
        //     <h2>{this.props.detail.adress}</h2>
        //     <p>{this.props.detail.description}</p>
            
        //     </div>
        // ) : (
        //     <p>Le vote n'existe pas</p>
        //     )
        console.log(this.state.items)
            return (
                <div className="home">
                  <h2>{this.state.nameVote}</h2>
                  {items.map(item => (

                    <p key={item.address}>{item.name}</p>

                    )
                    )
                    }
       
                </div>
                    )
                
                
                
                
                    }
                }

                const mapStateToProps = state => {
                  return {
                    ConnectState: state.ConnectState,
                    Token: state.Token,
                    Address_User: state.Address_User
                  }
                }
                
                
                
                export default connect(mapStateToProps)(withRouter(DetailsVote))