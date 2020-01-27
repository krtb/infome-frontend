import React from 'react';
import Bill from './Bill'
import { Table } from 'semantic-ui-react'

import { connect } from 'react-redux';
import {searchTerm} from '../bills/actions'


const BillsList = (props) => {    

    let renderDataNow = () => {
        return props.alteredBillList.map((one) =>
            <Bill id={one.id} key={one.bill_id} one={one}/>
        )
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
        alteredBillList: state.billsReducer.alteredBillList,
    }
}

export default connect(mapStateToProps, {searchTerm})(BillsList);
