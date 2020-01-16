import React, { Component } from 'react';
import {withRouter} from 'react-router'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'
import LoginForm from '.\\LoginForm';



//let userData = ""

class DetailsVote extends Component{
    constructor(props){
        super(props);
    
        this.state = {
          items: [],
          isLoaded: false,
        }
      }

    componentDidMount() {
        fetch('http://localhost:5000/contracts/0xBA0A989Ff0fC8485C865D98551645918A363adAf', {
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
        console.log(this.props)
        // const detail = this.props.detail ? (
        //     <div className="detail">
        //     <h2>{this.props.detail.adress}</h2>
        //     <p>{this.props.detail.description}</p>
            
        //     </div>
        // ) : (
        //     <p>Le vote n'existe pas</p>
        //     )
            return (

                
                <div className="home">
                {items.map(item => (

                        <p key={item.address}>{item.name}</p>
                        
                        )
                    )
                }
                
                </div>
                )
                    }
                }
                
                
                
                export default (withRouter(DetailsVote))