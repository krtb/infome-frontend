import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../src/components'

import MenuTabs from './components/common/MenuTabs';
import LandingPage from './components/common/LandingPage'
import CreateAccountForm from './components/session/CreateAccountForm'
import LoginForm from './components/session/LoginForm'
import SearchBills from './components/bill/SearchBills'
import SavedBillsTable from './components/bill/SavedBillsTable'
import UserProfile from './components/session/UserProfile'

// TODO: import withAuth from './hocs/withAuth'
// TODO: const token = localStorage.getItem('jwt')

class App extends Component {

  render() {
    return (

      <BrowserRouter>

        <MenuTabs />

        <Route exact path="/" component={LandingPage} />
        <Route path="/CreateAccountForm" component={CreateAccountForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/searchbills" component={SearchBills}/>
        <Route path="/savedbills" component={SavedBillsTable} />
        <Route path="/myprofile" component={UserProfile} />

      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);