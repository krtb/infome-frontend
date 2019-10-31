import React from 'react';
import Bill from './Bill'
import { Table } from 'semantic-ui-react'
import SavedBill from './SavedBill'



const ProductiveBillsList = (props) => {
    console.log('>>>>>>>>> save bills table <<<<<<<<<')
    
    const productiveBillsArray = () => {
        return props.productiveBills.map((one) => {
            return <SavedBill id={one.id} frontEndDeleteButton={props.frontEndDeleteButton} key={one.id} one={one} />
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
                    {productiveBillsArray()}
                </Table.Body>

            </Table>
        </React.Fragment>
    );
}

export default ProductiveBillsList;
