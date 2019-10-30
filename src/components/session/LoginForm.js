import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter, Redirect } from 'react-router'
import { loginUser } from '../../actions/user'
import { Button, Form, Segment } from 'semantic-ui-react'


class LoginForm extends Component {
    state = {
        username: '',
        password: '',
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleLoginSubmit = () => {
        this.props.loginUser(this.state.username, this.state.password, this.props.history)
        this.setState({ username: '', password: '' })
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

const mapStateToProps = ({ usersReducer: { authenticatingUser, failedLogin, loginError, error, user, loggedIn } }) => ({
    authenticatingUser,
    failedLogin,
    loginError,
    user,
    loggedIn
})

export default withRouter(
    connect(
        mapStateToProps,
        { loginUser }
    )(LoginForm)
)