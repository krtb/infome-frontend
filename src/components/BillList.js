import React from 'react';
import Bill from './Bill'
import { Table } from 'semantic-ui-react'


const BillList = (props) => {
    console.log(props);
    let renderData = props.changUpBillData.map((one)=>{
        return <Bill key={one.id}  one={one} />
    })


    return (
        <React.Fragment>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Bill Number</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Link to Bill</Table.HeaderCell>
                        <Table.HeaderCell>Legislative Day</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {renderData}
                </Table.Body>
            </Table>
        </React.Fragment>
    );
}

export default BillList;
