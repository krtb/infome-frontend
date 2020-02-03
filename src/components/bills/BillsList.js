import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { searchTerm, fetchBills, setPageNumInState } from '../bills/actions'

// Components & Styling
import Bill from './Bill'
import { Table, Pagination } from 'semantic-ui-react'

const BillsList = (props) => {    

    let totalPages = (props.alteredBillList.length / props.itemsPerPage).toFixed()
    
    let setPageNum = (event, { activePage }) => {
        props.setPageNumInState(activePage);
    };

    let items = props.alteredBillList.slice(
        (props.page - 1) * props.itemsPerPage,
        (props.page - 1) * props.itemsPerPage + props.itemsPerPage
    )
    
    let renderDataNow = () => (
        items.map((one) =>
             <Bill 
                id={one.id} 
                key={one.bill_number} 
                one={one}
            />
        )
    )

    return (
        <Fragment>

            <Table celled>
                <Table.Header>
                    <Table.Row >
                        <Table.HeaderCell>Bill Number</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Chamber</Table.HeaderCell>
                        <Table.HeaderCell>PDF Link</Table.HeaderCell>
                        <Table.HeaderCell>Legislative Day</Table.HeaderCell>
                        <Table.HeaderCell>For Bill?</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {renderDataNow()}
                </Table.Body>
            </Table>

            <div style={{textAlign: 'center',}} >
            <Pagination
                activePage={props.page}
                totalPages={totalPages}
                siblingRange={1}
                onPageChange={setPageNum}        
            />
            </div>

        </Fragment>
    );
}

const mapStateToProps = (state) => {
    
    return {
        initialBillList: state.billsReducer.initialBillList,
        alteredBillList: state.billsReducer.alteredBillList,
        page: state.billsReducer.page,
        itemsPerPage: state.billsReducer.itemsPerPage,
    }
}

export default connect(mapStateToProps, { searchTerm, fetchBills, setPageNumInState})(BillsList);
