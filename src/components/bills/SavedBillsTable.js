import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchSavedBills} from './actions';
import AuthWrapper from '../../hocs/AuthWrapper';

// TODO: combine these into 'BillHeaders' component
import ProductiveBillHeader from '../common/ProductiveBillHeader';
import ConcerningBillHeader from '../common/ConcerningBillHeader';
import ProductiveBillsList from './ProductiveBillsList';
import ConcerningBillsList from './ConcerningBillsList'

class SavedBillsTable extends Component {

    componentDidMount() {
        this.props.fetchSavedBills()
    }

    render() {

        return (
            <React.Fragment>

                <ProductiveBillHeader/>
                <ProductiveBillsList />
                
                <ConcerningBillHeader/>
                <ConcerningBillsList />

            </React.Fragment>
        );
    }
}

export default AuthWrapper(connect(null, {fetchSavedBills})(SavedBillsTable));
