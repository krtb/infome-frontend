import React, { Component } from 'react';
import MenuTabs from '../common/MenuTabs'
import BillsList from '../bill/BillsList';
import SearchBar from './SearchBar'

import {connect} from 'react-redux';
import { fetchBills } from '../bill/actions'

// const token = localStorage.getItem('jwt')

class SearchBills extends Component {
    state = {
        changing_upcoming_bill_data: [],
    }

    componentDidMount() {
        this.props.fetchBills()
    }

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

export default connect(null, {fetchBills})(SearchBills);
