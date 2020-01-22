import React, { Component } from 'react';
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
            altered_bill_list: term,
        })
    }

    render() {

        return (

            <React.Fragment>

                <div className="my-searchbar">

                    <SearchBar onFormSubmit={this.onTermSubmit}/>

                </div>

                <BillsList 

                    handleBillChoiceClick={this.props.handleBillChoiceClick}
                    isConcerning={this.props.isConcerning} 
                    isProductive={this.props.isProductive}  
                    addNegaToUser={this.props.addNegaToUser} 
                    addToUser={this.props.addToUser} 

                    changeUpcomBilDat={this.props.altered_bill_list} 
                />

            </React.Fragment>
        );
    }
}

function mapStateToProps (state) {
    
    return{
        altered_bill_list: state.billsReducer.altered_bill_list,
        initial_bill_list: state.billsReducer.initial_bill_list,
    }
}

export default connect(mapStateToProps, actions)(SearchBills);
