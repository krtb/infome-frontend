import React from 'react'
import { Link } from "react-router-dom";
import { Segment, Button, Divider } from 'semantic-ui-react'

const LoginButtons = () => (
    <Segment padded>
        <Link to="/login"><Button primary fluid>
            Login
    </Button></Link>
        <Divider horizontal>Or</Divider>
        <Link to="/CreateAccountForm"><Button secondary fluid>
            Sign Up
    </Button></Link>
    </Segment>
)

export default LoginButtons
