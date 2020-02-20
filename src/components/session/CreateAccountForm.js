import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions'
import { Redirect } from 'react-router-dom';

import stateOptions from './statesDB'
// STYLING
import { Form, Button, Col, Container, Row } from 'react-bootstrap'

class CreateAccountForm extends Component {
    state = {
        username: '',
        password: '',
        email: '',
        zip_code: '',
        political_party: ''
    }

    handleChange = (e) => {    

        const value = e.target.value

        this.setState({
            ...this.state,
            [e.target.name]: value
        })
    }

    handleLoginSubmit = (e) => {
        e.preventDefault()
        // send user properties to redux action creator        
        this.props.createNewUser(
            this.state.username, 
            this.state.password, 
        )
        
        // reset form to blanks
        this.setState({ 
            username: '', 
            password: '',
            email: '',
            zip_code: '',
            political_party: '' 
        })
    }
    

    render() {
        return this.props.loggedIn ? (
            <Redirect to="/savedbills" />
        ) : (
                <div id="signup-form-container" >
                    <Form id="signup-form-child" onSubmit={this.handleLoginSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control
                                    onChange={this.handleChange}
                                    defaultValue={this.state.username}
                                    name="username"
                                    type="username"
                                    placeholder="Enter Username"
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                onChange={this.handleChange}
                                defaultValue={this.state.password}
                                name="password"
                                type="password"
                                placeholder="Enter Password"
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control 
                                    placeholder="zip code" 
                                    onChange={this.handleChange}
                                    defaultValue={this.state.zip_code}
                                    name="zip_code"
                                    type="zip_code"
                                    placeholder="Enter Zip Code"
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Political Party</Form.Label>
                            <Form.Control 
                                placeholder="Political Party"
                                onChange={this.handleChange}
                                defaultValue={this.state.political_party}
                                name="political_party"
                                type="political_party"
                                placeholder="Enter Political Party"
                            />
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loggedIn: state.userReducer.loggedIn
    }
}


export default connect(mapStateToProps, actions)(CreateAccountForm);
