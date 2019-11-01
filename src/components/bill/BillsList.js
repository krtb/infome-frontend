import React from 'react';
import Bill from './Bill'
import { Table } from 'semantic-ui-react'


const BillsList = (props) => {
    const renderDataNow = () => {
        return props.changeUpcomBilDat.map((one) => {
            return <Bill 
                        id={one.id} 
                        addNegaToUser={props.addNegaToUser} 
                        addToUser={props.addToUser} 
                        key={one.bill_id} 
                        one={one}
                        handleBillChoiceClick={props.handleBillChoiceClick}
                        isConcerning={props.isConcerning}
                        isProductive={props.isProductive}
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
                        <Table.HeaderCell>For Bill?</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {renderDataNow()}
                </Table.Body>
            </Table>
        </React.Fragment>
    );
}

export default BillsList;
