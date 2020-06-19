import React from 'react'
import { Component } from 'react'
import axios from 'axios'

import { Form, Button, Container, Image } from 'react-bootstrap'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = (e) => {
        e.preventDefault()

        axios.post('http://frontend.interview.dingi.work/user/login/', { username: this.state.username, password: this.state.password })
            .then(res => {
                localStorage.setItem('jwt', res.data.jwt_token)
                this.props.history.push('/home')
            })
    }

    render() {
        return (
            < Container className='well' style={{ width: '30%', paddingTop: '100px' }}>
                <Form onSubmit={e => this.submit(e)}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type='text' name='username' onChange={e => this.change(e)} placeholder="Enter Username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' name='password' onChange={e => this.change(e)} placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container >
        );
    }

}

export default Login;

{/* <form onSubmit={e => this.submit(e)} >
                    <p className="h5 text-center mb-4">Sign in</p>
                    <div className="grey-text">
                        <input
                            label="Type your email"
                            onChange={e => this.change(e)}
                            value={this.state.email}
                            name="email"
                            icon="envelope"
                            group
                            type="email"
                            validate
                            error="wrong"
                            success="right"
                        />
                        <input
                            label="Type your password"
                            onChange={e => this.change(e)}
                            value={this.state.password}
                            type="password"
                            name="password"
                            icon="lock"
                            group
                            type="password"
                            validate
                        />
                    </div>
                    <div className="text-center mt-4">
                        <button color="unique" type="submit">Login</button>
                    </div>
                </form> */}
