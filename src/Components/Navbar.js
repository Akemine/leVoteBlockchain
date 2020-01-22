import React from 'react';
import { Form, Navbar, Button, Nav, NavDropdown } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


class MaNav extends React.Component {

    DisconnectClick = () => {
        this.props.Unlogged()
        console.log(this.props.ConnectState)
      }

    render(){

     if(this.props.ConnectState == false){
    return( 
    <Navbar bg="#f8f8f8" expand="lg">
    <Navbar.Brand href=" /">LeVote</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href=" /Votes">Les sondages</Nav.Link>
        <NavDropdown title="Gestion utilisateur" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Users">Liste des utilisateurs</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        <Form inline>
        <Nav.Link href=" /LoginForm">Déjà inscrit</Nav.Link>
        <Nav.Link href=" /CreateAccountForm">S'inscrire</Nav.Link>
        </Form>
    </Navbar.Collapse>
    </Navbar>
    )
     }
     else {
        return( 
            <Navbar bg="#d5853c" expand="lg">
            <Navbar.Brand href=" /">LeVote</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href=" /Votes">Les sondages</Nav.Link>
                <NavDropdown title="Gestion utilisateur" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/Users">Liste des utilisateurs</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                <button onClick={this.DisconnectClick}>Je me deconnecte !</button>

                </Form>
            </Navbar.Collapse>
            </Navbar>
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

  const mapDispatchToProps = dispatch => {
    return {
     Unlogged: isConnected => {
       dispatch({type: "USER_DISCONNECTED", ConnectState: false})
     }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MaNav));