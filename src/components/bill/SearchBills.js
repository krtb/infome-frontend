import React, { Component } from 'react';
import MenuTabs from '../common/MenuTabs'
import BillsList from './BillsList';
import SearchBar from '../search/SearchBar'

import {connect} from 'react-redux';
import * as actions from './actions'

// const token = localStorage.getItem('jwt')

class SearchBills extends Component {
    // TODO: CHANGE TO USE STATE FROM BILLSREDUCER.JS
    state = {
        changing_upcoming_bill_data: [],
    }

    componentDidMount() {
        this.props.fetchBills()
    }

    // TODO: MOVE THIS TO ACTIONS FILE
    findBill = (bill) => {
            this.setState({ 
                changing_upcoming_bill_data: bill 
            })
    }

    render() {
        console.log(this.state.changing_upcoming_bill_data, 'PROPS DATA')

        return (

            <React.Fragment>
            <MenuTabs/>
                <div className="my-searchbar">
                <SearchBar findBill={this.findBill} />
                </div>
                <BillsList handleBillChoiceClick={this.props.handleBillChoiceClick} isConcerning={this.props.isConcerning} isProductive={this.props.isProductive}  addNegaToUser={this.props.addNegaToUser} addToUser={this.props.addToUser} changeUpcomBilDat={this.state.changing_upcoming_bill_data} />
            </React.Fragment>
        );
    }
}

export default connect(null, actions)(SearchBills);
