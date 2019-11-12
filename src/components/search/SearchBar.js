import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

import { connect } from 'react-redux';
import {searchTerm} from '../bill/actions'

class SearchBar extends Component {

        filterText = () => {
            console.log(this.props.findBill, "HERE IS FILTER TEXT FUNCTION")
            let filteredText = this.props.changing_upcoming_bill_data.filter((aBill) => (
                aBill.description.toLowerCase().includes(this.props.text.toLowerCase()) ||
                aBill.bill_number.toLowerCase().includes(this.props.text.toLowerCase())
            )
            )
            return filteredText
        }


    render(){
        return (
            <Input 
                value={this.props.text} 
                onChange={(event)=> this.props.searchTerm(event, "FIRED --------FIRED")} 
                findbill={this.props.findBill(this.filterText())}
                action={{color: 'teal'}} label={{ icon: 'asterisk' }} 
                labelPosition='right corner' 
                placeholder='Search...' 
            />
            )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        text: state.getBillsReducer.searchTerm,
        changing_upcoming_bill_data: state.getBillsReducer.changing_upcoming_bill_data,
    }
}

export default connect(mapStateToProps, {searchTerm})(SearchBar)
