import React from 'react';
import { Table, Button} from 'semantic-ui-react'

const Bill = (props) => {
    const {isConcerning, isProductive, handleBillChoiceClick } = props;
    
    return (
        <Table.Row>
            <Table.Cell>{props.one.bill_number}</Table.Cell>
            <Table.Cell >{props.one.description}</Table.Cell>
            <Table.Cell >{props.one.chamber}</Table.Cell>
            <Table.Cell selectable><a target="_blank" rel="noopener noreferrer" href={props.one.bill_url}><i className="far fa-file-pdf"></i></a></Table.Cell>
            <Table.Cell >{props.one.legislative_day}</Table.Cell>
            <Table.Cell collapsing>
                <Button.Group>
                    <Button onClick={() => handleBillChoiceClick(props.one, isProductive)} positive >For</Button>
                    <Button.Or />
                    <Button onClick={() => handleBillChoiceClick(props.one, isConcerning)} negative >Against</Button>
                </Button.Group>
            </Table.Cell>
        </Table.Row>
    );
}

export default Bill;
