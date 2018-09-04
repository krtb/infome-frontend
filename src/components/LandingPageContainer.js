import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'
import Blurb from './Blurb'


class LandingPageContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <Blurb />
                <Link to="/login"><Button>Log In</Button></Link>
                <Link to="/signup"><Button>Sign Up</Button></Link>
            </React.Fragment>
        );
    }
}

export default LandingPageContainer;
