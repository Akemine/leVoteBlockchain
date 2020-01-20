import React, { Component } from 'react';
import {withRouter} from 'react-router'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap'
import LoginForm from '.\\LoginForm';
import { connect } from 'react-redux'
import AVoter from './AVoter';

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
            items: json["_proposals"],
            vote_count: json["_proposals"]["vote_count"]
          })
        })
        console.log("props : " + this.state)
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
        // let timerInterval
        // Swal.fire({
        //   title: 'Nous sécurisons votre vote !',
        //   html: 'Fin dans <b></b> ms.',
        //   timer: 20000,
        //   timerProgressBar: true,
        //   onBeforeOpen: () => {
        //     Swal.showLoading()
        //     timerInterval = setInterval(() => {
        //       if (Swal.getContent()) {
        //         Swal.getContent().querySelector('b')
        //           .textContent = Swal.getTimerLeft()
        //       }
        //     }, 100)
        //   },
        //   onClose: () => {
        //     clearInterval(timerInterval)
        //   }
          
        // }).then((result) => {
        //   if (
        //     /* Read more about handling dismissals below */
        //     result.dismiss === Swal.DismissReason.timer
        //   ) {
        //     console.log('I was closed by the timer') // eslint-disable-line
        //   }
        // })
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
        if(this.props.ConnectState == true){
            return (
                <div className="home">
                  <h2>{this.state.nameVote}</h2>
                  {items.map(item => (
                    <div>
                    
                    <p><Button onClick={this.handleSubmit} vote={item.vote_count} id={item.index}>{item.name}</Button> {this.state.vote_count = item.vote_count} </p>
                   

                    </div>
                    )
                    )
                    }
       
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