import React from 'react';
import Bill from './Bill'
import { Table } from 'semantic-ui-react'
import NegativeBill from '../NegativeBill'



const SavedNegativeBills = (props) => {

    const myNegativeBillsArray = () => {
        return props.myNegativeArray.map((one) => {
            return <NegativeBill key={one.id} one={one} />
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
                    {myNegativeBillsArray()}
                </Table.Body>

            </Table>
        </React.Fragment>
    );
}

export default SavedNegativeBills;
