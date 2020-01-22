import React, { Component } from 'react';
import MenuTabs from '../common/MenuTabs'
import BillsList from './BillsList';
import SearchBar from '../search/SearchBar'

import {connect} from 'react-redux';
import * as actions from './actions'

// const token = localStorage.getItem('jwt')

class SearchBills extends Component {

    componentDidMount() {
        this.props.fetchBills()
    }

    onTermSubmit = async term => {
        console.log(term);
        this.setState({
            changing_upcoming_bill_data: term,
        })
    }

    render() {

        return (

            <React.Fragment>

            <MenuTabs/>

                <div className="my-searchbar">

                    <SearchBar onFormSubmit={this.onTermSubmit}/>

                </div>

                <BillsList 

                    handleBillChoiceClick={this.props.handleBillChoiceClick}
                    isConcerning={this.props.isConcerning} 
                    isProductive={this.props.isProductive}  
                    addNegaToUser={this.props.addNegaToUser} 
                    addToUser={this.props.addToUser} 

                    changeUpcomBilDat={this.props.changing_upcoming_bill_data} 
                />

            </React.Fragment>
        );
    }
}

function mapStateToProps (state) {
    
    return{
        changing_upcoming_bill_data: state.billsReducer.changing_upcoming_bill_data,
        upcoming_bill_data: state.billsReducer.upcoming_bill_data,
    }
}

export default connect(mapStateToProps, actions)(SearchBills);
