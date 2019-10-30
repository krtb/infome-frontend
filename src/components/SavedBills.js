import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Table } from 'semantic-ui-react'
import MenuTabs from './common/MenuTabs'
import ProductiveBillHeader from '../common/ProductiveBillHeader';
import ConcerningBillHeader from '../common/ConcerningBillHeader';
import SavedBillsTable from './SavedBillsTable';

import SavedNegativeBillsTable from './SavedNegativeBillsTable'


class SavedBills extends Component {


    render() {
        return (
            <React.Fragment>
                <MenuTabs />
                <ProductiveBillHeader/>
                <SavedBillsTable frontEndDeleteButton={this.props.frontEndDeleteButton} myBillsArray={this.props.myBillsArray}/>
                <ConcerningBillHeader/>
                <SavedNegativeBillsTable myNegativeArray={this.props.myNegativeArray}/>
            </React.Fragment>
        );
    }
}

export default SavedBills;
