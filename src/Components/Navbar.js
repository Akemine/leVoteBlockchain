import React from 'react';
import { Form, Navbar, InputGroup, FormControl, Button, Nav, NavDropdown } from 'react-bootstrap';
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
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
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