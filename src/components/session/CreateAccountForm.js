import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import * as actions from './actions'
import { connect } from 'react-redux';

import stateOptions from './statesDB'
import { Button, Form, Dropdown } from 'semantic-ui-react'

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

    handleLoginSubmit = () => {
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

            <Form onSubmit={this.handleLoginSubmit}>

                <Form.Group unstackable widths={2}>
                    <Form.Input label='User Name' placeholder='User Name' 
                        name="username"
                        onChange={this.handleChange}
                        value={this.state.username}
                    />
                    <Form.Input label='Password' placeholder='Password' 
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                </Form.Group>

                <Form.Group widths={2}>
                    <Form.Input label='Zip Code' placeholder='Zip Code' 
                        name="zip_code"
                        onChange={this.handleChange}
                        value={this.state.zip_code}
                    />
                    <Form.Input label='Political Party' placeholder='Political Party' 
                        name="political_party"
                        onChange={this.handleChange}
                        value={this.state.political_party}
                    />
                </Form.Group>

                <Dropdown placeholder='State' search selection options={stateOptions} />

                <Form.Checkbox label='I agree to the Terms and Conditions' />

                <Button type='submit'>Submit</Button>

            </Form>

        );
    }
}


export default connect(null, actions)(CreateAccountForm);
