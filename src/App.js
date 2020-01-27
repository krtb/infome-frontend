import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// COMMON
import MenuTabs from './components/common/MenuTabs';
import LandingPage from './components/common/LandingPage';
import NotFound from './components/common/NotFound';
// SESSION
import CreateAccountForm from './components/session/CreateAccountForm';
import LoginForm from './components/session/LoginForm';
// BILLS
import SearchBills from './components/bills/SearchBills';
import SavedBillsTable from './components/bills/SavedBillsTable';
import UserProfile from './components/session/UserProfile';

class App extends Component {

  render() {
    return (

      <BrowserRouter>

        <MenuTabs />

        <Switch>
          
        <Route exact path="/" component={LandingPage} />
        <Route  path="/CreateAccountForm" component={CreateAccountForm} />
        <Route  path="/login" component={LoginForm} />
        <Route  path="/searchbills" component={SearchBills}/>
        <Route  path="/savedbills" component={SavedBillsTable} />
        <Route  path="/myprofile" component={UserProfile} />
        <Route component={NotFound} />

        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;