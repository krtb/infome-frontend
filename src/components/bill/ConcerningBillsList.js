import React from 'react';
import { Table } from 'semantic-ui-react'
import SavedBill from './SavedBill'



const ConcerningBillsList = (props) => {
    
    const concerningBillsArray = () => {
        return props.concerningBills.map((one) => {
            return <SavedBill key={one.bill_id} one={one} />
        })
    }

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
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {concerningBillsArray()}
                </Table.Body>

            </Table>
        </React.Fragment>
    );
}

export default ConcerningBillsList;
