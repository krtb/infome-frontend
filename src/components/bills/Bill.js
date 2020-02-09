import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleBillChoiceClick, fetchPostBill } from './actions';

import { Table, Button} from 'semantic-ui-react'


class Bill extends Component {

    handleForClick = () => {
        this.props.handleBillChoiceClick(
            this.props.one,
            this.props.isProductive,
            this.props.productiveBillsList,
        )
        
        this.props.fetchPostBill(this.props.one, this.props.user)
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
                        <Button onClick={this.handleForClick} positive >For</Button>
                        <Button.Or />
                        <Button onClick={() => this.props.handleBillChoiceClick(
                            this.props.one, 
                            this.props.isConcerning, 
                            this.props.concerningBillsList)} negative >Against</Button>
                    </Button.Group>
                </Table.Cell>
            </Table.Row>
        );
    }
}

function maptStateToProps(state) {
    return { 
        user: state.userReducer.user,
        isProductive: state.billsReducer.isProductive,
        isConcerning: state.billsReducer.isConcerning,
        productiveBillsList: state.billsReducer.productiveBillsList,
        concerningBillsList: state.billsReducer.concerningBillsList
    }
}

export default connect(maptStateToProps, { handleBillChoiceClick, fetchPostBill })(Bill);
