import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Table } from 'semantic-ui-react'
import MenuTabs from './MenuTabs'
import SavedBillPositiveHeader from './SavedBillPositiveHeader';
import SavedBillsNegativeHeader from './SavedBillsNegativeHeader';
import SavedBillsTable from './SavedBillsTable';



class SearchPage extends Component {
    render() {
        return (
            <React.Fragment>
                <MenuTabs />
                <SavedBillPositiveHeader />
                <SavedBillsTable/>
                <SavedBillsNegativeHeader />
                <SavedBillsTable />
            </React.Fragment>
        );
    }
}

export default SearchPage;
