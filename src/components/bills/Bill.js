import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  postSavedBill } from './actions';

import { Table, Button} from 'semantic-ui-react'


class Bill extends Component {

    handleForClick = (element, { billchoice }) => {
        this.props.postSavedBill(this.props.one, this.props.user, billchoice)
    }

    render(){
        return (
            <Table.Row>
                <Table.Cell>{this.props.one.bill_number}</Table.Cell>
                <Table.Cell >{this.props.one.description}</Table.Cell>
                <Table.Cell >{this.props.one.chamber}</Table.Cell>

                <Table.Cell selectable> 
                    <a target="_blank" rel="noopener noreferrer" href={this.props.one.bill_url}>
                    <i className="far fa-file-pdf"></i></a>
                </Table.Cell>

                <Table.Cell >{this.props.one.legislative_day}</Table.Cell>
                <Table.Cell collapsing>
                    <Button.Group>
                        <Button billchoice={'positive'} onClick={this.handleForClick} positive >For</Button>
                        <Button.Or />
                        <Button billchoice={'negative'} onClick={this.handleForClick} negative >Against</Button>
                    </Button.Group>
                </Table.Cell>
            </Table.Row>
        );
    }
}

function maptStateToProps(state) {
    return { 
        user: state.userReducer.user,
    }
}

export default connect(maptStateToProps, {  postSavedBill })(Bill);
