import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
                    <Link to="/searchbills"><Button type='submit'>Submit</Button></Link>
                </Form>
            </Segment>
        );
    }
}

export default LogIn;
