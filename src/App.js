import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
// import withAuth from './hocs/withAuth'

import LandingPage from './components/common/LandingPage'
import CreateAccountForm from './components/session/CreateAccountForm'
import LoginForm from './components/session/LoginForm'
import SearchBills from './components/search/SearchBills'
import SavedBillsTable from './components/bill/SavedBillsTable'
import UserProfile from './components/session/UserProfile'

const token = localStorage.getItem('jwt')


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

  fetchPostBill = (bill_id) => {
    let prod_api = 'https://infome-backend.herokuapp.com/api/v1/user_bills'
    const fetchObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        bill_id: bill_id
      })
    }
    return fetch(prod_api, fetchObj).then(resp => resp.json()) // ---> removed hard coded path
  } 

  handleBillChoiceClick = (bill, choice) => {

    let my_bill = bill.bill_id
    
    this.fetchPostBill(my_bill)

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
      <Switch>
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
      </Switch>
    );
  }
}

export default App;