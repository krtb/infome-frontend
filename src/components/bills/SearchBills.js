import React, { Component } from 'react';
import AuthWrapper from '../../hocs/AuthWrapper';
import { connect } from 'react-redux';
import * as actions from './actions';

// COMPONENTS
import BillsList from './BillsList';
import SearchBar from '../search/SearchBar';

class SearchBills extends Component {

    componentDidMount() {
        this.props.fetchBills()
    }

    render() {

        return (

            <React.Fragment>

                <div className="my-searchbar">

                    <SearchBar  />

                </div>

                <BillsList />

            </React.Fragment>
        );
    }
}

export default AuthWrapper(connect(null, actions)(SearchBills));
