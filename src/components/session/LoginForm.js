import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

import { loginUser } from '../session/actions'
import {Form, Button} from 'react-bootstrap'


class LoginForm extends Component {
    state = {
        username: '',
        password: '',
    }

    // TODO: reformat this, check Search component
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleLoginSubmit = (event) => {
        event.preventDefault()
        this.props.loginUser(this.state.username, this.state.password, this.props.history)
    }

        
    render() {
        return this.props.loggedIn ? (
            <Redirect to="/savedbills" />
        ) : (
                <Fragment>
                    <div className="login-page">
                        <Form onSubmit={this.handleLoginSubmit} >
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control
                                    onChange={this.handleChange}
                                    defaultValue={this.state.username}
                                    name="username"
                                    type="username"
                                    placeholder="Enter email"
                                />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                    </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    onChange={this.handleChange}
                                    defaultValue={this.state.password}
                                    name="password"
                                    type="password"
                                    placeholder="Enter Password"
                                />

                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                        </Button>

                        </Form>
                    </div>
                </Fragment>

        );
    }
}

const mapStateToProps = ({ userReducer: { authenticatingUser, failedLogin, loginError, error, user, loggedIn } }) => ({
    authenticatingUser,
    failedLogin,
    loginError,
    user,
    loggedIn
})

export default connect(mapStateToProps, { loginUser })(LoginForm);