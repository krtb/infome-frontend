import React from 'react';
import { connect } from 'react-redux';
import { deleteBill } from './actions';

import { Table } from 'semantic-ui-react'


const SavedBill = (props) => {

    let handleDeleteClick = () => {
        props.deleteBill(props, props.one.bill_id )
    }

    return (
        <Table.Row>
            <Table.Cell>{props.one.bill_number}</Table.Cell>
            <Table.Cell >{props.one.description}</Table.Cell>
            <Table.Cell >{props.one.chamber}</Table.Cell>
            <Table.Cell selectable><a target="_blank" rel="noopener noreferrer" href={props.one.bill_url}><i className="far fa-file-pdf"></i></a></Table.Cell>
            <Table.Cell >{props.one.legislative_day}</Table.Cell>
            <Table.Cell  selectable>
                <button onClick={() => handleDeleteClick()} > <i  className="fas fa-skull"></i> </button>
            </Table.Cell>
        </Table.Row>
    );
}

export default connect(null, {deleteBill} )(SavedBill);