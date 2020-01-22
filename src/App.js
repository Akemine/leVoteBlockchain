import React from 'react'
import {BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Components/Navbar.js'
import Votes from './Components/Votes.js'
import LoginForm from './Components/LoginForm.js'
import Users from './Components/Users.js'
import CreateVote from './Components/CreateVote.js'
import Accueil from './Components/Accueil.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateAccountForm from './Components/CreateAccountForm.js'
import DetailsVote from './Components/DetailsVote.js'
import './Components/Style.css'
import 'font-awesome/css/font-awesome.min.css';




function App() {
 
  return (

   
    <BrowserRouter>
   
    <div className="App">
    <Navbar/>
     
    
    <Route exact path="/Accueil" componen={Accueil}/>
    <Route path="/Votes" component={Votes}/>
    <Route path="/LoginForm" exact component={LoginForm}/>
    <Route path="/CreateAccountForm" component={CreateAccountForm}/>
    <Route path="/Users" component={Users}/>
    <Route path="/CreateVote" component={CreateVote}/>
    <Route path="/DetailsVote" component={DetailsVote}/>
    
    </div>
    </BrowserRouter>

    );
  }
 
  export default App;
 





















//  import React, {Component} from 'react';
//  import 'bootstrap/dist/css/bootstrap.min.css';
//  import Test from '.\\Components/Test.js';
//  import TestForm from '.\\Components/TestForm.js';
//  import ".\\Components/Style.css"
 
 
 
 
//  class App extends Component {
  
//   state = { 
//     nameList : [
//     {id: 1, name: 'Xoop la bitch', age: 21, gender: 'masculin'},
//     {id: 2, name: 'Harry', age: 23, gender: 'masculin'},
//     {id: 3, name: 'Cécile', age: 24, gender: 'féminin'},
//   ],
//     word: 'bichon'
// }


// ClickFunction = (e) => {
//   console.log(this.state.word)
//   this.state.word = "loulou"
//   console.log(this.state.word)
// }

// addUser = user => {
//   user.id = Math.random()
//   let users = [...this.state.nameList, user]
//   this.setState({
//       nameList: users
//   })
//   console.log(user.name + " a été ajouté")
// }


// deleteUser = data => {
//   let users = this.state.nameList.filter(user => {
//     return user.id !== data.id
//   })
//   this.setState({nameList : users})
//   console.log(data.name + " a été supprimé")
//   }


// render(){
//   return (
//     <div>
//     <TestForm addUser={this.addUser} />
//     <Test findUser={this.findUser} deleteUser={this.deleteUser} nameList={this.state.nameList}/>
//     <button onClick={this.ClickFunction}>Coucou</button>
//     </div>
    
//     );
//   }
// }


// export default App;

