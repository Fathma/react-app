import React, { Component } from 'react';
import Navbar_ from './layouts/Navbar_'
// import Sidebar_ from './layouts/Sidebar_'
import ItemList from './ItemList'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'


class HomePage extends Component {
    componentDidMount() {
        const jwt = localStorage.getItem('jwt')
        if (!jwt) this.props.history.push('/login')
    }
    render() {
        return (
            <div>
                <Navbar_ />
                <Route path="/home/itemList" component={ItemList} />
                <Route path="/home/dashboard" component={Dashboard} />

            </div>
        );
    }
}

export default HomePage;
