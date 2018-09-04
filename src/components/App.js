import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPageContainer from './LandingPageContainer'
import SignUp from './SignUp'
import LogIn from './LogIn'
import SearchBills from './SearchBills'
import SavedBills from './SavedBills'
import MyProfile from './MyProfile'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPageContainer} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Route path="/searchbills" component={SearchBills} />
        <Route path="/savedbills" component={SavedBills} />
        <Route path="/myprofile" component={MyProfile} />
      </Switch>
    );
  }
}

export default App;