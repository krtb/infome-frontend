import React from 'react';
import Bill from './Bill'
import { Table } from 'semantic-ui-react'


const SavedBillsTable = (props) => {

    return (
        <React.Fragment>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Bill Number</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Chamber</Table.HeaderCell>
                        <Table.HeaderCell>PDF Link</Table.HeaderCell>
                        <Table.HeaderCell>Legislative Day</Table.HeaderCell>
                        <Table.HeaderCell>For Bill?</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>H.R.1843</Table.Cell>
                        <Table.Cell>Clyde-Hirsch-Sowers RESPECT Act</Table.Cell>
                        <Table.Cell>Department of Defense</Table.Cell>
                        <Table.Cell selectable positive>
                            <a href='#'>For</a>
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
                    <Table.Row>
                        <Table.Cell>H.R.1843</Table.Cell>
                        <Table.Cell>Clyde-Hirsch-Sowers RESPECT Act</Table.Cell>
                        <Table.Cell>Department of Defense</Table.Cell>
                        <Table.Cell selectable positive>
                            <a href='#'>For</a>
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
                        <Table.Cell selectable positive>
                            <a href='#'>For</a>
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

export default SavedBillsTable;
