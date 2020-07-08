import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'


class Sidebar extends Component {
    render() {
        return (

            <Nav defaultActiveKey="/home" className="flex-column" >
                <Nav.Link as={Link} to="/home/dashboard/sales" style={{ textAlign: 'center', color: '#dadce0' }} href="/home">Sales</Nav.Link>
                <Nav.Link as={Link} to="/home/dashboard/customer" style={{ textAlign: 'center', color: '#dadce0' }} eventKey="link-1">Customer</Nav.Link>
            </Nav>

        );
    }
}

export default Sidebar;
