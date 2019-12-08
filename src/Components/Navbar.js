import React from 'react';
import { Form, Navbar, Button, Nav, NavDropdown } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import CompoTestApi from '.\\CompoTestApi.js'
import { connect } from 'react-redux'

class MaNav extends React.Component {

    render(){
      //  const {IsConnected} = this.props; // info du magasin

    return( 
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href=" /">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href=" /Votes">Les sondages</Nav.Link>
        <Nav.Link href=" /Test">La page de test</Nav.Link>
        <NavDropdown title="Gestion utilisateur" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Users">Liste des utilisateurs</NavDropdown.Item>
            <NavDropdown.Item href="/NewUser">Créer un utilisateur</NavDropdown.Item>
            <NavDropdown.Item href="/Faker">Faké des infos !</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        <Form inline>
        <Nav.Link><CompoTestApi /></Nav.Link>
        <Nav.Link href=" /LoginForm"><Button>Déjà inscrit</Button></Nav.Link>
        <Nav.Link href=" /CreateAccountForm"><Button>S'inscrire</Button></Nav.Link>
        </Form>
    </Navbar.Collapse>
    </Navbar>
    )
}
}

const mapStateToProps = state => {
    return {
        IsConnected: state.IsConnected
    }
  }

export default connect(mapStateToProps)(withRouter(MaNav));