import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Navbar from '.\\Components/Navbar.js';
import Home from '.\\Components/Home.js';
import Votes from '.\\Components/Votes.js';
import LoginForm from '.\\Components/LoginForm.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Route exact path="/" component={Home}/>
    <Route path="/Votes" component={Votes}/>
    <Route path="/LoginForm" exact component={LoginForm}/>
    </div>
    </BrowserRouter>
    );
  }
  
  export default App;
  