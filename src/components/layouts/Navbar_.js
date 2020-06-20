import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Navbar_ extends Component {
    constructor(props) {
        super(props)
    }

    logout = () => {
        localStorage.clear()
        window.location.href = '/login';
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"><b>Logo</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/home/dashboard" >Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/home/itemList">Item List</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href='#' onClick={this.logout}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navbar_;
