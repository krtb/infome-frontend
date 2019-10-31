import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Table } from 'semantic-ui-react'

import MenuTabs from '../common/MenuTabs'

// TODO: combine these into 'BillHeaders' component
import ProductiveBillHeader from '../common/ProductiveBillHeader';
import ConcerningBillHeader from '../common/ConcerningBillHeader';
import ProductiveBillsList from './ProductiveBillsList';
import ConcerningBillsList from './ConcerningBillsList'

class SavedBillsTable extends Component {

    render() {

        return (
            <React.Fragment>

                <MenuTabs />
                <ProductiveBillHeader/>
                <ProductiveBillsList  concerningBills={this.props.concerningBills} productiveBills={this.props.productiveBills} />
                <ConcerningBillHeader/>
                <ConcerningBillsList concerningBills={this.props.concerningBills} productiveBills={this.props.productiveBills}/>

            </React.Fragment>
        );
    }
}

export default SavedBillsTable;
