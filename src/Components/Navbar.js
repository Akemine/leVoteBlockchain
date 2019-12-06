import React from 'react';
import { Form, Navbar, Button, Nav, NavDropdown } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const MaNav = (props) => {
    console.log(props)
    return( 
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href=" /">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href=" /Votes">Les sondages</Nav.Link>
        <NavDropdown title="Gestion utilisateur" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Users">Liste des utilisateurs</NavDropdown.Item>
            <NavDropdown.Item href="/NewUser">Créer un utilisateur</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        <Form inline>
        <Nav.Link href=" /LoginForm"><Button>S'inscrire</Button></Nav.Link>
        </Form>
    </Navbar.Collapse>
    </Navbar>
    );
};

export default withRouter(MaNav);;