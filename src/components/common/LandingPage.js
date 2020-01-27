import React, { Component } from 'react';
import Blurb from './Blurb'
import LoginButtons from './LoginButtons'

class LandingPageContainer extends Component {

    render() {
        return (
            <div className="landing">
                <Blurb/>
            </div>
        );
    }
}

export default LandingPageContainer;
