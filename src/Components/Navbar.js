import React from 'react';
import { Form, Navbar, Button, Nav, NavDropdown } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import myLogo from '../img/logo.png'
import BlockChainGif from '../img/blockchaingif.gif'


class MaNav extends React.Component {

    DisconnectClick = () => {
        this.props.Unlogged()
        console.log(this.props.ConnectState)
      }

    render(){

     if(this.props.ConnectState == false){
    return( 
      <div class="myNav">
    <Navbar bg="#f8f8f8" expand="lg">
    <Navbar.Brand href=" /"><img src={myLogo} alt="logo" height="64" width="64"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href=" /Votes">Les votes en cours <img src={BlockChainGif} alt="logo"/></Nav.Link>

        </Nav>
        <Form inline>
        
        <Nav.Link href=" /LoginForm">Déjà inscrit</Nav.Link>
        <Nav.Link href=" /CreateAccountForm">S'inscrire</Nav.Link>
        </Form>
    </Navbar.Collapse>
    </Navbar>
    </div>
    )
     }
     else {
        return( 
          <div class="myNav test">
            
            <Navbar bg="#d5853c" expand="lg">
            <Navbar.Brand href=" /Accueil"><img src={myLogo} alt="logo" height="64" width="64"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto d-inline-flex">
                <Nav.Link href=" /Votes">Les votes en cours <img src={BlockChainGif} alt="logo"/></Nav.Link>

                
                <Nav.Link href=" /CreateVote" >Je veux créer mon votes !</Nav.Link>
                <Nav.Link href="/Users"> Qui sont les autres utilisateurs ?</Nav.Link>
                
                </Nav>
                <Form inline>
                <p class="mr-5 badge badge-active badge-dark">Utilisateur : {this.props.Pseudo}</p>
                <p>
                <button className="btn btn-danger" onClick={this.DisconnectClick}>Deconnexion</button>
                </p>

                </Form>
            </Navbar.Collapse>
            </Navbar>
            </div>
            ) 
     }
}
}

const mapStateToProps = state => {
    return {
        ConnectState: state.ConnectState,
        Token: state.Token,
        Address_User: state.Address_User,
        Pseudo: state.Pseudo
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
     Unlogged: isConnected => {
       dispatch({type: "USER_DISCONNECTED", ConnectState: false, Pseudo : "Anonymous"})
     }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MaNav));