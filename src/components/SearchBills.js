import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Table } from 'semantic-ui-react'
import MenuTabs from './MenuTabs'
import BillList from './BillList';



class SearchBills extends Component {

    state = {
        upcoming_bill_data: [],
        changing_upcoming_bill_data: [],
        isClicked: false,
        myBillsArray: [],
    }

    fetchData = () => {
        const UPCOMING_BILLS_API = 'http://localhost:3001/api/v1/bills'
        const headers = {
            // to add
        }
        return fetch(UPCOMING_BILLS_API).then(resp => resp.json()).then(data => this.setState({
            upcoming_bill_data: data.bills,
            changing_upcoming_bill_data: data.bills
        }))
    }

    componentDidMount() {
        this.fetchData()
    }

    handleBillClick = (bill) => {
        if(!this.state.myBillsArray.includes(bill)){
            this.setState({
                myBillsArray: [...this.state.myBillsArray, bill]
            })
        }
    }


    render() {
        return (
            <React.Fragment>
            <MenuTabs/>
            <BillList changUpBillData={this.state.changing_upcoming_bill_data} />
            </React.Fragment>
        );
    }
}

export default SearchBills;
