import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {connect} from 'react-redux'
import LandingPageContainer from './LandingPageContainer'
import SignUp from './SignUp'
import LogIn from './LogIn'
import SearchBills from './SearchBills'
import SavedBills from './SavedBills'
import MyProfile from './MyProfile'
import usersReducer from '../reducers/usersReducer';
import withAuth from '../hocs/withAuth'

const token = localStorage.getItem('jwt')


class App extends Component {


  // componentDidMount() {
  //   this.fetchAllBillsInitially()
  // }

  // fetchAllBillsInitially = () => {
  //   const token = localStorage.getItem('jwt')

  //   if (token) {
  //     const fetchObject = {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'Application/json',
  //         'Authorization': `Bearer ${localStorage.getItem('jwt')}`
  //       }
  //     }
  //     fetch('http://localhost:3001/api/v1/fetchbills', fetchObject).then(resp => resp.json()).then(data => {
  //       this.setState({
  //         changing_upcoming_bill_data: data.results[0].bills
  //       })
  //     })
  //   }
  // }

  // testFetch = () => {

  // }

  // componentDidMount() {
  //   this.fetchAllBillsInitially()
  //  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if(nextState.upcoming_bill_data.length !== 0){
  //     return false
  //   } else {
  //     return true
  //   }
  // }
  
  // componentDidUpdate() {
  //   console.log("true!");
  //   this.fetchData()
  // }


  // ---------

  state = {
    upcoming_bill_data: [],
    changing_upcoming_bill_data: [],
    isClicked: false,
    myBillsArray: [],
    myNegativeArray: [],
  }

  //   if (token) {
  //     const UPCOMING_BILLS_API = 'http://localhost:3001/api/v1/bills'
  //     const fetchObject = {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'Application/json',
  //         'Authorization': `Bearer ${token}`
  //       }
  //     }

  //     return fetch(UPCOMING_BILLS_API, fetchObject).then(resp => resp.json()).then(data => this.setState({
  //       upcoming_bill_data: data.bills,
  //       changing_upcoming_bill_data: data.bills
  //     }))
  //   }
  // }


  handleBillClick = (bill) => {
    console.log(bill);
    let my_bill = bill.id

    if (!this.state.myBillsArray.includes(bill)) {
      this.setState({
        myBillsArray: [...this.state.myBillsArray, bill]
      })
    }
    this.fetchPostBill(my_bill)
  }

  handleNegativeBillClick = (bill) => {
    // console.log(bill);
    if (!this.state.myNegativeArray.includes(bill)) {
      this.setState({
        myNegativeArray: [...this.state.myNegativeArray, bill]
      })
    }
  }

  fetchPostBill = (bill_id) => {
    const USER_API = 'http://localhost:3001/api/v1/user_bills'
    const fetchObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        bill_id: bill_id,
        // user_id: this.props.user_id  
      }) 
    }
    return fetch(USER_API, fetchObj).then(resp=>resp.json())
  } 


  // ------


  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPageContainer} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Route path="/searchbills" render={(renderProps)=>(
          <SearchBills {...renderProps} 
          changeUpcomBilDat={this.state.changing_upcoming_bill_data}
          addToUser={this.handleBillClick}
          addNegaToUser={this.handleNegativeBillClick} />
        )} />
        <Route path="/savedbills" render={(renderProps)=>(
          <SavedBills {...renderProps}
            myBillsArray={this.state.myBillsArray}
            myNegativeArray={this.state.myNegativeArray}
          />
        )} />
        <Route path="/myprofile" component={MyProfile} />
      </Switch>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     user_id: state.usersReducer.user.id
//   }
// }
export default App;
// export default App;