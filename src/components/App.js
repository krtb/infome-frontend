import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPageContainer from './LandingPageContainer'
import SignUp from './SignUp'
import LogIn from './LogIn'
import SearchBills from './SearchBills'
import SavedBills from './SavedBills'
import MyProfile from './MyProfile'

class App extends Component {


  fetchAllBillsInitially = () => {

    
    const token = localStorage.getItem('jwt')
    if (token){
      const fetchObject = {
        method: 'GET',
        headers: {
          'Content-Type': 'Application/json',
          'Authorization': `Bearer ${token}`
        }
      }
      fetch('http://localhost:3001/api/v1/fetchbills', fetchObject).then(resp => resp.json()).then(data => console.log(data))
    }
    
  }

  componentDidMount() {
    this.fetchAllBillsInitially()
  }


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