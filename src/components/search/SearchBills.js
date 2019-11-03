import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Table } from 'semantic-ui-react'
import MenuTabs from '../common/MenuTabs'
import BillsList from '../bill/BillsList';
import SearchBar from './SearchBar'

const token = localStorage.getItem('jwt')

class SearchBills extends Component {
    state = {
        upcoming_bill_data: [],
        changing_upcoming_bill_data: [],
        isProductive: false,
        isConcerning: false,
        isClicked: false,
        productiveBills: [],
        concerningBills: [],
        checked: false,
    }

    // TODO: MAKE INTO REDUX
    fetchData = () => {
        if (token) {
            const UPCOMING_BILLS_API = 'http://localhost:3001/api/v1/bills'
            const fetchObject = {
                method: 'GET',
                headers: {
                    'Content-Type': 'Application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
            return fetch(UPCOMING_BILLS_API, fetchObject).then(resp => resp.json()).then(data => this.setState({
                upcoming_bill_data: data.bills,
                changing_upcoming_bill_data: data.bills
            }) )
        }
    }

    componentDidMount() {
        this.fetchAllBillsInitially()
    }

    fetchAllBillsInitially = () => {
        const token = localStorage.getItem('jwt')

        if (token) {
            const fetchObject = {
                method: 'GET',
                headers: {
                    'Content-Type': 'Application/json',
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                }
            }
            
            let prod_api = 'https://infome-backend.herokuapp.com/api/v1/fetchbills'
            fetch(prod_api, fetchObject).then(resp => resp.json()).then(data=> {
                this.setState({
                    upcoming_bill_data: data.results[0].bills,
                    changing_upcoming_bill_data: data.results[0].bills
                })
            })
        }
    }

      handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    }, () => this.filterSearch())
  }

    filterSearch = () => {
    let findBill = this.state.upcoming_bill_data.filter((aBill) => (
      aBill.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
      aBill.bill_number.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      )
    )

    this.setState({
      changing_upcoming_bill_data: findBill 
    })
  }
    render() {

        return (

            <React.Fragment>
            <MenuTabs/>
                <div className="my-searchbar">
                <SearchBar handleSearch={this.handleSearch}/>
                </div>
                <BillsList handleBillChoiceClick={this.props.handleBillChoiceClick} isConcerning={this.props.isConcerning} isProductive={this.props.isProductive}  addNegaToUser={this.props.addNegaToUser} addToUser={this.props.addToUser} changeUpcomBilDat={this.state.changing_upcoming_bill_data} />
            </React.Fragment>
        );
    }
}

export default SearchBills;
