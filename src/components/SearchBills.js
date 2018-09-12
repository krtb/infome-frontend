import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Table } from 'semantic-ui-react'
import MenuTabs from './MenuTabs'
import BillList from './BillList';

const token = localStorage.getItem('jwt')

class SearchBills extends Component {
    state = {
        upcoming_bill_data: [],
        changing_upcoming_bill_data: [],
        isClicked: false,
        myBillsArray: [],
        myNegativeArray: [],
        checked: false,
    }

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
            fetch('http://localhost:3001/api/v1/fetchbills', fetchObject).then(resp => resp.json()).then(data=> {
                this.setState({
                    changing_upcoming_bill_data: data.results[0].bills
                })
            })
        }
    }

    // state = {
    //     upcoming_bill_data: [],
    //     changing_upcoming_bill_data: [],
    //     isClicked: false,
    //     myBillsArray: [],
    // }

    // fetchData = () => {
    //     if (token) {
    //     const UPCOMING_BILLS_API = 'http://localhost:3001/api/v1/bills'
    //     const fetchObject = {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'Application/json',
    //             'Authorization': `Bearer ${token}`
    //         }
    //     }

    //     return fetch(UPCOMING_BILLS_API, fetchObject).then(resp => resp.json()).then(data => this.setState({
    //         upcoming_bill_data: data.bills,
    //         changing_upcoming_bill_data: data.bills
    //     }))
    //     }
    // }

    // componentDidMount() {
    //     this.fetchData()
    // }

    // handleBillClick = (bill) => {
    //     // console.log(bill);
    //     if(!this.state.myBillsArray.includes(bill)){
    //         this.setState({
    //             myBillsArray: [...this.state.myBillsArray, bill]
    //         })
    //     }
    // }
    // changUpBillData = { this.state.changing_upcoming_bill_data }

    // static getDerivedStateFromProps(nextProps, nextState){
    //     console.log(nextProps);
    // }

    // componentDidUpdate() {
    //     console.log("updated");
        
    // }

    render() {
        return (
            <React.Fragment>
            <MenuTabs/>
                <BillList addNegaToUser={this.props.addNegaToUser} addToUser={this.props.addToUser} changeUpcomBilDat={this.state.changing_upcoming_bill_data} />
            </React.Fragment>
        );
    }
}

export default SearchBills;
