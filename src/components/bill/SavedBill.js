import React from 'react';
import { Table, Button, Checkbox, Icon } from 'semantic-ui-react'

const SavedBill = (props) => {
    return (
        <Table.Row>
            <Table.Cell>{props.one.bill_number}</Table.Cell>
            <Table.Cell >{props.one.description}</Table.Cell>
            <Table.Cell >{props.one.chamber}</Table.Cell>
            <Table.Cell selectable><a target="_blank" href={props.one.bill_url}><i className="far fa-file-pdf"></i></a></Table.Cell>
            <Table.Cell >{props.one.legislative_day}</Table.Cell>
            <Table.Cell selectable>
                <a><i className="fas fa-skull"></i></a>
            </Table.Cell>
        </Table.Row>
    );
}

export default SavedBill;