import React from 'react';
import Bill from './Bill'
import { Table } from 'semantic-ui-react'
import PositiveBill from './PositiveBill'



const SavedBillsTable = (props) => {

    const myPostiveBillsArray = () => {
        return props.myBillsArray.map((one) => {
            return <PositiveBill id={one.id} frontEndDeleteButton={props.frontEndDeleteButton} key={one.id} one={one} />
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
                {myPostiveBillsArray()}
                </Table.Body>

            </Table>
        </React.Fragment>
    );
}

export default SavedBillsTable;
