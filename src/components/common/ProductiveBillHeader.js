import React from 'react'
import { Header } from 'semantic-ui-react'

const ProductiveBillHeader = () => (
    <div>
        <Header as='h2' icon textAlign='center'>
            <i id="smiley" className="far fa-grin-beam"></i>
            <Header.Content>Productive Bills</Header.Content>
        </Header>
    </div>
)

export default ProductiveBillHeader
