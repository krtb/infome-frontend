import React from 'react';
import { Table, Button, Checkbox, Icon } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



const Bill = (props) => {
    // console.log('frogs',props)
    const { addToUser, addNegaToUser } = props;
    return (
        <Table.Row>
            <Table.Cell>{props.one.bill_number}</Table.Cell>
            <Table.Cell >{props.one.description}</Table.Cell>
            <Table.Cell >{props.one.chamber}</Table.Cell>
            <Table.Cell selectable><a target="_blank" href={props.one.bill_url}><i className="far fa-file-pdf"></i></a></Table.Cell>
            <Table.Cell >{props.one.legislative_day}</Table.Cell>
            <Table.Cell collapsing>
                <Button.Group>
                    <Button onClick={()=> addToUser(props.one)} positive  >For</Button>
                    <Button.Or />
                    <Button onClick={() => addNegaToUser(props.one)} negative >Against</Button>
                </Button.Group>
            </Table.Cell>
        </Table.Row>
    );
}

export default Bill;
