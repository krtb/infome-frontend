import React from 'react';
import Bill from './Bill'
import { Table } from 'semantic-ui-react'

import { connect } from 'react-redux';
import {searchTerm} from '../bill/actions'


const BillsList = (props) => {
    let renderDataNow = () => {
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

const mapStateToProps = (state) => {
    return {
        changing_upcoming_bill_data: state.getBillsReducer.changing_upcoming_bill_data,
    }
}

export default connect(mapStateToProps, {searchTerm})(BillsList);
