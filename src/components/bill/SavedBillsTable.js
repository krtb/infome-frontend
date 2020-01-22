import React, { Component } from 'react';

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
                <ProductiveBillsList  concerningBills={this.props.concerningBills} productiveBills={this.props.productiveBills} />
                <ConcerningBillHeader/>
                <ConcerningBillsList concerningBills={this.props.concerningBills} productiveBills={this.props.productiveBills}/>

            </React.Fragment>
        );
    }
}

export default SavedBillsTable;
