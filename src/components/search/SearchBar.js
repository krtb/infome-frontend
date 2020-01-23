import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

import { connect } from 'react-redux';
import { searchTerm, filterText } from '../bill/actions'

class SearchBar extends Component {

    onFormSubmit = e => {
        e.preventDefault()

        this.props.filterText(this.props.text, this.props)
    }

  
    render(){      
        
        return (
            <form className="ui form" onSubmit={this.onFormSubmit} >
            <Input 
                value={this.props.text || ''} 
                onChange={this.props.searchTerm}
                action={{color: 'teal'}} 
                label={{ icon: 'asterisk' }} 
                labelPosition='right corner' 
                placeholder='Search...' 
            />
            </form>

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
