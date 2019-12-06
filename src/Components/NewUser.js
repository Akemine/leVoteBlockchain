import React, {Component} from 'react';

class NewUser extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    let username = "David";
    let email = "dav@gmail.com";
    let password = "david";
    let index = 1;
    fetch('http://localhost:5000/users/create', {
      method: "POST",
      body: JSON.stringify({
        "index": index,
        "email" : email,
        "username": username,
        "password": password
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
  }
    render() {


      return (
        <div className="App">
        <ul> 
        Nous venons de créer un utilisateur.
        </ul>
        </div>
      )
    }
  }

export default NewUser;

