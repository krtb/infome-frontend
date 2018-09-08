import React from 'react'
import { Header, Icon, Image } from 'semantic-ui-react'

const SavedBillPositiveHeader = () => (
    <div>
        <Header as='h2' icon textAlign='center'>
            <i id="smiley" className="far fa-grin-beam"></i>
            <Header.Content>Productive Bills</Header.Content>
        </Header>
    </div>
)

export default SavedBillPositiveHeader
