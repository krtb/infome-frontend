import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Table } from 'semantic-ui-react'
import MenuTabs from './MenuTabs'



class SearchBills extends Component {
    render() {
        return (
            <React.Fragment>
            <MenuTabs/>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Bill Number</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Subject</Table.HeaderCell>
                        <Table.HeaderCell>For Bill?</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>H.R.1843</Table.Cell>
                        <Table.Cell>Clyde-Hirsch-Sowers RESPECT Act</Table.Cell>
                        <Table.Cell >Department of Defense</Table.Cell>
                        <Table.Cell positive>For</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>H.R.1843</Table.Cell>
                        <Table.Cell>Clyde-Hirsch-Sowers RESPECT Act</Table.Cell>
                        <Table.Cell>Department of Defense</Table.Cell>
                        <Table.Cell selectable negative>
                            <a href='#'>Against</a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>H.R.1843</Table.Cell>
                        <Table.Cell>Clyde-Hirsch-Sowers RESPECT Act</Table.Cell>
                        <Table.Cell>Department of Defense</Table.Cell>
                        <Table.Cell selectable negative>
                            <a href='#'>Against</a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>H.R.1843</Table.Cell>
                        <Table.Cell>Clyde-Hirsch-Sowers RESPECT Act</Table.Cell>
                        <Table.Cell>Department of Defense</Table.Cell>
                        <Table.Cell positive>For</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>H.R.1843</Table.Cell>
                        <Table.Cell>Clyde-Hirsch-Sowers RESPECT Act</Table.Cell>
                        <Table.Cell>Department of Defense</Table.Cell>
                        <Table.Cell selectable negative>
                            <a href='#'>Against</a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>H.R.1843</Table.Cell>
                        <Table.Cell>Clyde-Hirsch-Sowers RESPECT Act</Table.Cell>
                        <Table.Cell>Department of Defense</Table.Cell>
                        <Table.Cell selectable positive>
                            <a href='#'>For</a>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            </React.Fragment>
        );
    }
}

export default SearchBills;
