import React, { Component } from 'react';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import { Container } from 'react-bootstrap'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

class ItemList extends Component {
    state = {
        users: []
    }
    componentDidMount() {
        const jwt = localStorage.getItem('jwt')
        if (!jwt) window.location.href = '/login'

        axios.get('http://frontend.interview.dingi.work/user/data/', { headers: { Authorization: `JWT ${jwt}` } })
            .then(res => this.setState({ users: res.data }))
            .catch(err => console.log(err))
    }

    render() {
        const columns = [{
            dataField: 'date',
            text: 'Date',
        }, {
            dataField: 'customer_name',
            text: 'Customer Name',
        }, {
            dataField: 'customer_work_area',
            text: 'Work Area'
        }, {
            dataField: 'district',
            text: 'District',
            filter: textFilter()
        }, {
            dataField: 'order_quantity',
            text: 'Order Quantity'

        }, {
            dataField: 'product',
            text: 'Products',
            filter: textFilter()
        }];
        return (
            <Container>
                <h2 className="text-center">Sales data</h2>
                <BootstrapTable keyField='id' data={this.state.users} columns={columns} filter={filterFactory()} />
            </Container>
        );
    }
}

export default ItemList;
