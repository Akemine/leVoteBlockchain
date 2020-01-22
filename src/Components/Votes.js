import React, { Component } from 'react';
import {withRouter} from 'react-router'
import { Button, Alert} from 'react-bootstrap'
import { connect } from 'react-redux'
import LoginForm from '.\\LoginForm';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

let timerInterval
function Interval(props){
  return (
         Swal.fire({
           title: 'Nous sécurisons votre vote !',
           html: 'Fin dans <b></b> ms.',
           timer: 20000,
           timerProgressBar: true,
           onBeforeOpen: () => {
             Swal.showLoading()
             timerInterval = setInterval(() => {
               if (Swal.getContent()) {
                 Swal.getContent().querySelector('b')
                   .textContent = Swal.getTimerLeft()
               }
             }, 100)
           },
           onClose: () => {
             clearInterval(timerInterval)
           }
          
         }).then((result) => {
           if (
             /* Read more about handling dismissals below */
             result.dismiss === Swal.DismissReason.timer
           ) {
             console.log('I was closed by the timer') // eslint-disable-line
           }
        })
  )
}

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
        return <div>

        {}

        </div>
      }
      else {

        //console.table(items)
        if(this.props.ConnectState == true){
        return (

        <div className="App">
        
         <div className="container">
        <a href=" /CreateVote"></a>
        
        

        </div>
        <ul> 
          {items.map(item => (

            <div className="container">


          <Alert variant="success">
          <a class="voteItem" href={"/DetailsVote?address=" + item.address + ""}>
            <Alert.Heading>{item.name}</Alert.Heading>
            <p>
              Description du vote : {item.description}
            </p>
            <hr />
            <p className="mb-0">
          Date de clôture : {item.end_date}
            </p></a>
          </Alert>
          </div>
            
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