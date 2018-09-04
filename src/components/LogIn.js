import React, { Component } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'


class LogIn extends Component {
    render() {
        return (
            <Segment inverted>
                <Form inverted>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='First name' placeholder='First name' />
                        <Form.Input fluid label='Last name' placeholder='Last name' />
                    </Form.Group>
                    <Button type='submit'>Submit</Button>
                </Form>
            </Segment>
        );
    }
}

export default LogIn;
