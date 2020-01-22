import React, {Component} from 'react';
import { Button, Form } from 'react-bootstrap'
import {withRouter} from 'react-router'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import LoginForm from './LoginForm.js';


const myBut = withRouter(({ history }) => (
  <button type='button' onClick={() => { history.push('/Faker') }}>
    Click Me!
  </button>
))

function TestButton(props) {
  return (
    <Button onClick={props.onClick}>
      Envoyer infos
    </Button>
  );
}

class Users extends Component {
  constructor(props){
    super(props);

    this.handleInfo = this.handleInfo.bind(this);
    this.state = {
      items: [],
      isLoaded: false,
      infos: ""
    }
  }



  handleInfo = (event) => {
    this.setState({infos: event.target.value})
  }

  handleSubmit = (event) => {
  this.props.history.push("/FakerTest")
}

  componentDidMount() {
    fetch('http://localhost:5000/users/all', {
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

    render() {
      

      var {isLoaded, items} = this.state;

      if (!isLoaded){
        return <div>Loading...</div>
      }
      else {
        console.table(items)
        if(this.props.ConnectState == true){
        return (
          <div>

          <div className="container">
          <ul> 
            {items.map(item => (
              <li key={item.email}>{item.username}</li>
            ))}
          </ul>
          </div>
    
          <div className="container">
        <Form>
        <Form.Group>
        <Form.Label>Les sondages en cours :</Form.Label>
        <Form.Control type="text" value={this.state.value} onChange={this.handleInfo}/>
        </Form.Group>
        </Form>
        </div>
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
}

const mapStateToProps = state => {
  return {
    ConnectState: state.ConnectState
  }
}

export default connect(mapStateToProps)(withRouter(Users));

