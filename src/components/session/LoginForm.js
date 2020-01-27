import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

import { loginUser } from '../session/actions'
import { Button, Form, Segment } from 'semantic-ui-react'


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

            <div className="login-page">
            <Segment inverted>

                <Form onSubmit={this.handleLoginSubmit} inverted>
                    <Form.Group widths='equal'>

                        <Form.Input fluid label='User Name' placeholder='User Name'
                            name="username"
                            onChange={this.handleChange}
                            value={this.state.username}
                         />
                         
                        <Form.Input fluid label='Password' placeholder='Password'
                            name="password" 
                            onChange={this.handleChange}
                            value={this.state.password}
                        />

                    </Form.Group>

                    <div className="button-holder">
                        <Button type='submit'>Submit</Button>
                    </div>

                </Form>

            </Segment>
            </div>

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