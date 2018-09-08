import React from 'react';
import { Table } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const Bill = (props) => {
    console.log(props)
    return (
        <Table.Row>
            <Table.Cell>{props.one.bill_number}</Table.Cell>
            <Table.Cell >{props.one.description}</Table.Cell>
            <Table.Cell selectable> <a href={props.one.bill_url}>PDF</a> </Table.Cell>
            <Table.Cell >{props.one.legislative_day}</Table.Cell>
        </Table.Row>
    );
}

export default Bill;
