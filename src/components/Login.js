import React from 'react'
import { Component } from 'react'
import { connect } from "react-redux"
import { Form, Button, Container } from 'react-bootstrap'
import { userLogin } from '../actions/currentUserAction'

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
        let formData = { email: this.state.username, password: this.state.password }
        this.props.userLogin(formData)
    }

    render() {
        return (
            < Container className='well' style={{ width: '30%', paddingTop: '100px' }}>

                <h1 className="text-center">Logo</h1>
                <Form onSubmit={e => this.submit(e)}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type='text' name='username' onChange={e => this.change(e)} placeholder="Enter Username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' name='password' onChange={e => this.change(e)} placeholder="Password" />
                    </Form.Group>
                    <Button size="lg" block variant="dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container >
        );
    }

}

export default connect(null, { userLogin })(Login);

