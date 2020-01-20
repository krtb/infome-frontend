import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../src/components'
// import withAuth from './hocs/withAuth'

import LandingPage from './components/common/LandingPage'
import CreateAccountForm from './components/session/CreateAccountForm'
import LoginForm from './components/session/LoginForm'
import SearchBills from './components/search/SearchBills'
import SavedBillsTable from './components/bill/SavedBillsTable'
import UserProfile from './components/session/UserProfile'

// const token = localStorage.getItem('jwt')

class App extends Component {
  state = {
    upcoming_bill_data: [],
    changing_upcoming_bill_data: [],
    isClicked: false,
    isProductive: "isProductive",
    isConcerning: "isConcerning",
    productiveBills: [],
    concerningBills: [],
    searchTerm: ''
  }

  fetchPostBill = (bill) => {
    //TODO: add new Bill class attributes, after backend API migration
    let user_data = bill
    JSON.stringify(user_data)

    // POSTING TO BILLS
    let dev_api = `${process.env.REACT_APP_BACKEND_DEV_API}/picked_bills`
    let prod_api = `${process.env.REACT_APP_BACKEND_PROD_API}/picked_bills`

    let fetchObj = {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(user_data)
    }

    return fetch(dev_api, fetchObj, console.log(fetchObj.body, "kkkkkkk"))
      .then(resp => resp.json())
      .then(resp => console.log(resp, '<============ HERE IS PARSED ANSWER'))
      .catch((error) => {
        console.error(error, "ERROR POSTING DATA");
      });
  } 


  handleBillChoiceClick = (bill, choice) => {

    let chosen_bill = bill  // (Bill Object): bill.bill_id
    this.fetchPostBill(chosen_bill)

    if(!this.state.productiveBills.includes(bill) && choice === "isProductive"){
      this.setState({
        productiveBills: [...this.state.productiveBills, bill]
      })
    } 
    
    if(!this.state.concerningBills.includes(bill) && choice === "isConcerning") {
      this.setState({
        concerningBills: [...this.state.concerningBills, bill]
      })
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <Route path="/CreateAccountForm" component={CreateAccountForm} />
        <Route path="/login" component={LoginForm} />


        <Route path="/searchbills" render={(renderProps)=>(
          <SearchBills {...renderProps} 
          changeUpcomBilDat={this.state.changing_upcoming_bill_data}
          addToUser={this.handleBillClick}
          addNegaToUser={this.handleNegativeBillClick}
          handleSearch={this.handleSearch} 
          handleBillChoiceClick={this.handleBillChoiceClick}
          isProductive={this.state.isProductive}
          isConcerning={this.state.isConcerning}
          />

        )} />

        <Route path="/savedbills" render={(renderProps)=>(
          <SavedBillsTable {...renderProps}
            handleBillChoiceClick={this.handleBillChoiceClick}
            isProductive={this.state.isProductive}
            isConcerning={this.state.isConcerning}
            productiveBills={this.state.productiveBills}
            concerningBills={this.state.concerningBills}
            frontEndDeleteButton={this.frontEndDeleteButton}
          />

        )} />

        <Route path="/myprofile" component={UserProfile} />
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);