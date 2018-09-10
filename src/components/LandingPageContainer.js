import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'semantic-ui-react'
import Blurb from './Blurb'
import LoginButtons from './LoginButtons'

class LandingPageContainer extends Component {

    // fetchBills = () => {
    //     return fetch()
    // }


    // doThis = () => {
        // window.location = 'http://localhost:3001/api/v1/fetchbills'
    // }

    render() {
        return (
            <React.Fragment>
                <Blurb />
                <LoginButtons/>
                {/* <Button onClick={this.doThis} >Fetch Bills</Button> */}
            </React.Fragment>
        );
    }
}

export default LandingPageContainer;
