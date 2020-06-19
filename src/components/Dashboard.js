import React, { Component } from 'react';
import { Row, Col, ListGroup, Nav } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CustomerCharts from './CustomerCharts';
import SalesCharts from './SalesCharts';
import axios from 'axios';
import { Link } from 'react-router-dom'




class Dashboard extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        const jwt = localStorage.getItem('jwt')
        if (!jwt) window.location.href = '/login'

        axios.get('http://frontend.interview.dingi.work/user/data/', { headers: { Authorization: `JWT ${jwt}` } })
            .then(res => {

                this.setState({ data: res.data })

            })
    }

    render() {

        return (
            <div style={{ height: '100vh' }}>
                <Row md={12} style={{ height: '100%' }}>
                    <Col style={{ backgroundColor: '#20232a', height: '100%' }}>
                        <Nav defaultActiveKey="/home" className="flex-column" >
                            <Nav.Link as={Link} to="/home/dashboard/sales" style={{ textAlign: 'center', color: '#dadce0' }} href="/home">Sales</Nav.Link>
                            <Nav.Link as={Link} to="/home/dashboard/customer" style={{ textAlign: 'center', color: '#dadce0' }} eventKey="link-1">Customer</Nav.Link>
                        </Nav>
                    </Col>
                    <Col xs={9}>
                        <Route path="/home/dashboard/sales" component={() => <SalesCharts data={this.state.data} />} />
                        <Route path="/home/dashboard/customer" component={() => <CustomerCharts data={this.state.data} />} />
                    </Col>

                </Row>
            </div >
        );
    }
}

export default Dashboard;
