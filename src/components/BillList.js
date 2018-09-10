import React from 'react';
import Bill from './Bill'
import { Table } from 'semantic-ui-react'


const BillList = (props) => {
    // if(props.changUpBillData){
    //     let renderData = props.changUpBillData.map((one) => {
    //         return <Bill key={one.id} one={one} />
    //     })
    // }

    const renderDataNow = () => {

            return props.changUpBillData.map((one) => {
                return <Bill key={one.id} one={one} />
            })
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
                        <Table.HeaderCell>For Bill?</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {renderDataNow()}
                </Table.Body>
            </Table>
        </React.Fragment>
    );
}

export default BillList;
