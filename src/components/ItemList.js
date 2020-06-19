import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { Container } from 'react-bootstrap'



class ItemList extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        const jwt = localStorage.getItem('jwt')
        if (!jwt) window.location.href = '/login'

        axios.get('http://frontend.interview.dingi.work/user/data/', { headers: { Authorization: `JWT ${jwt}` } })
            .then(res => {
                console.log(res.data)
                this.setState({ users: res.data })
            })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Customer Name</th>
                            <th>Work Area</th>
                            <th>District</th>
                            <th>Order Quantity</th>
                            <th>Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user => (
                            <tr>
                                <td>{user.date}</td>
                                <td>{user.customer_name}</td>
                                <td>{user.customer_work_area}</td>
                                <td>{user.district}</td>
                                <td>{user.order_quantity}</td>
                                <td>{user.product}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        );
    }
}

export default ItemList;
