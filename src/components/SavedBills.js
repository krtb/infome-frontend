import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Table } from 'semantic-ui-react'
import MenuTabs from './MenuTabs'
import SavedBillPositiveHeader from './SavedBillPositiveHeader';
import SavedBillsNegativeHeader from './SavedBillsNegativeHeader';
import SavedBillsTable from './SavedBillsTable';

import SavedNegativeBillsTable from './SavedNegativeBillsTable'


class SavedBills extends Component {


    render() {
        return (
            <React.Fragment>
                <MenuTabs />
                <SavedBillPositiveHeader/>
                <SavedBillsTable frontEndDeleteButton={this.props.frontEndDeleteButton} myBillsArray={this.props.myBillsArray}/>
                <SavedBillsNegativeHeader/>
                <SavedNegativeBillsTable myNegativeArray={this.props.myNegativeArray}/>
            </React.Fragment>
        );
    }
}

export default SavedBills;
