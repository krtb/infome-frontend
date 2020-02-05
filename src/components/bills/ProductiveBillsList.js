import React from 'react';
import { connect } from 'react-redux';

// COMPONENTS & STYLING
import SavedBill from './SavedBill'
import SavedPlaceHolder from '../common/SavedPlaceHolder';

import { Table } from 'semantic-ui-react';


const ProductiveBillsList = (props) => {

    const productiveBillsArray = () => {
        return props.productiveBillsList.map((one) => 
            <SavedBill
                one={one}  
                id={one.id} 
                key={one.id} 
                list="productive"
                listType={props.productiveBillsList} 
            />
        )
    }

    return (
        <React.Fragment>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Bill Number</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Chamber</Table.HeaderCell>
                        <Table.HeaderCell>PDF Link</Table.HeaderCell>
                        <Table.HeaderCell>Legislative Day</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        props.productiveBillsList === undefined || props.productiveBillsList.length === 0 ?

                        <SavedPlaceHolder />

                        :
                    
                        productiveBillsArray()
                    
                    }
                </Table.Body>

            </Table>
        </React.Fragment>
    );
}

function mapStateToProps(state){
    return {
        productiveBillsList: state.billsReducer.productiveBillsList
    }
}

export default connect(mapStateToProps, null)(ProductiveBillsList);
