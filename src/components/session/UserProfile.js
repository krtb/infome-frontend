import React, { Component } from 'react';
import AuthWrapper from '../../hocs/AuthWrapper';

import { Button, Form, Dropdown } from 'semantic-ui-react'
import stateOptions from './statesDB'

class UserProfile extends Component {
    render() {
        return (
            <React.Fragment>
            <Form>
                <Form.Group unstackable widths={2}>
                    <Form.Input label='User Name' placeholder='User Name' />
                    <Form.Input label='Password' placeholder='Password' />
                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Input label='Zip Code' placeholder='Zip Code' />
                    <Form.Input label='Political Party' placeholder='Political Party' />
                </Form.Group>
                <Dropdown placeholder='State' search selection options={stateOptions} />
                <br/>
                <br />
                <Button type="button">Save</Button>
            </Form>
            </React.Fragment>
        );
    }
}

export default AuthWrapper(UserProfile);
