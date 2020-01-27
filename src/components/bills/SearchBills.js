import React, { Component } from 'react';
import AuthWrapper from '../../hocs/AuthWrapper';
import { connect } from 'react-redux';
import * as actions from './actions';

import BillsList from './BillsList';
import SearchBar from '../search/SearchBar';



// const token = localStorage.getItem('jwt')

class SearchBills extends Component {

    componentDidMount() {
        this.props.fetchBills()
    }

    onTermSubmit = async term => {
        console.log(term);
        this.setState({
            alteredBillList: term,
        })
    }

    render() {

        return (

            <React.Fragment>

                <div className="my-searchbar">

                    <SearchBar onFormSubmit={this.onTermSubmit} />

                </div>

                <BillsList />

            </React.Fragment>
        );
    }
}

function mapStateToProps (state) {
    
    return{
        alteredBillList: state.billsReducer.alteredBillList,
        initialBillList: state.billsReducer.initialBillList,
    }
}

export default AuthWrapper(connect(mapStateToProps, actions)(SearchBills));
