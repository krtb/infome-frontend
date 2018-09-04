import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPageContainer from './LandingPageContainer'
import SignUp from './SignUp'
import LogIn from './LogIn'
// import Blurb from './Blurb'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPageContainer} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
      </Switch>
    );
  }
}

export default App;