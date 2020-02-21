import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import { searchTerm, filterText } from '../bills/actions';
// Styling
import { Form, FormControl, Button } from 'react-bootstrap';

class SearchBar extends Component {

    onFormSubmit = e => {
        e.preventDefault();
        this.props.filterText(this.props.text, this.props.initialBillList);
    }

  
    render(){      
        
        return (
            <Form onSubmit={this.onFormSubmit} inline>
                <FormControl 
                    className="mr-sm-2" 
                    type="text" 
                    placeholder="Search"
                    onChange={this.props.searchTerm}
                    defaultValue={this.props.text || ''}
                />
                <Button variant="success">Search</Button>
            </Form>
            )
    }
}

const mapStateToProps = (state) => {
    
    return {
        text: state.billsReducer.searchTerm,
        alteredBillList: state.billsReducer.alteredBillList,
        initialBillList: state.billsReducer.initialBillList
    }
}

export default connect(mapStateToProps, {searchTerm, filterText})(SearchBar)
