import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Table } from 'semantic-ui-react'

import MenuTabs from '../common/MenuTabs'

// TODO: combine these into 'BillHeaders' component
import ProductiveBillHeader from '../common/ProductiveBillHeader';
import ConcerningBillHeader from '../common/ConcerningBillHeader';

// TODO: combine these into 'BillChoices' component
import SavedBillsTable from './SavedBillsTable';
import SavedNegativeBillsTable from './SavedNegativeBillsTable'


class SavedBills extends Component {


    render() {
        return (
            <React.Fragment>
                <MenuTabs />
                <ProductiveBillHeader/>
                <SavedBillsTable frontEndDeleteButton={this.props.frontEndDeleteButton} productiveBills={this.props.productiveBills}/>
                <ConcerningBillHeader/>
                <SavedNegativeBillsTable concerningBills={this.props.concerningBills}/>
            </React.Fragment>
        );
    }
}

export default SavedBills;
