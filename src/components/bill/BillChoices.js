import React from 'react';
import Bill from './Bill'
import { Table } from 'semantic-ui-react'
import BillChoice from './BillChoice'

// TODO: combine these into 'BillChoice' component
import NegativeBill from './NegativeBill'
import PositiveBill from './PositiveBill'

const SavedNegativeBills = (props) => {

    const myNegativeBillsArray = () => {
        return props.concerningBills.map((one) => {
            return <NegativeBill 
                        key={one.id} 
                        one={one} 
                    />
        })
    }

    const myPostiveBillsArray = () => {
        return props.productiveBills.map((one) => {
            return <PositiveBill 
                        id={one.id} f
                        rontEndDeleteButton={props.frontEndDeleteButton} 
                        key={one.id} 
                        one={one} 
                    />
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

                    {/*{myPostiveBillsArray()}*/}
                </Table.Body>

            </Table>
        </React.Fragment>
    );
}

export default SavedNegativeBills;