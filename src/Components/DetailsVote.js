import React, { Component } from 'react';
import {withRouter} from 'react-router'
import { Button } from 'react-bootstrap'
import LoginForm from '.\\LoginForm';
import { connect } from 'react-redux'
import Apex from './ApexChart.js'
import Chart from "react-apexcharts";

import Swal from 'sweetalert2'



//let userData = ""
let id = 0

class DetailsVote extends Component{
    constructor(props){
        super(props);
    
        this.state = {
          vote :  this.props.location.search.substr(9, 100),
          vote_count: [],
          items: [],
          isLoaded: false,
          nameVote: "",
          description: "",
          options: {},
          series: [44, 55, 41, 17, 15],
          labels: ['A', 'B', 'C', 'D', 'E']
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
            items: json["_proposals"],
            vote_count: json["_proposals"]["vote_count"],
            description: json["description"]
          })
        })
      }

       handleSubmit = (event) => {
        fetch("http://localhost:5000/contracts/" + this.state.vote, {
          method: "POST",
          body: JSON.stringify({
            "user_address" : this.props.Address_User,
            "proposal_index": parseInt(event.target.id)
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
        var {items} = this.state;

        
        if(this.props.ConnectState == true){
            let vote_count_array = []
            let proposal_name_array = []
            items.map(item => {
              vote_count_array.push(item.vote_count)
              proposal_name_array.push(item.name)
              
            })
            console.log(vote_count_array)
            return (
                <div className="container">
                  <h2>{this.state.nameVote}</h2>
                  <h4>{this.state.description}</h4>
                  <div className="row">
                    {items.map(item => (
                      
                        <div className="col-md-3 mb-4">
                          <Button onClick={this.handleSubmit} vote={item.vote_count} id={item.index}>
                            <span>
                            {item.name}
                            </span>
                            <i className="fa fa-paper-plane"></i>
                          </Button> 
                        </div>

                      ))}
                    </div>
                    <Apex series={vote_count_array}/>
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
                
                
                
                export default connect(mapStateToProps)(withRouter(DetailsVote))