import React, { Component } from 'react';
import AuthWrapper from '../../hocs/AuthWrapper';

// TODO: combine these into 'BillHeaders' component
import ProductiveBillHeader from '../common/ProductiveBillHeader';
import ConcerningBillHeader from '../common/ConcerningBillHeader';
import ProductiveBillsList from './ProductiveBillsList';
import ConcerningBillsList from './ConcerningBillsList'

class SavedBillsTable extends Component {

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

export default AuthWrapper(SavedBillsTable);
