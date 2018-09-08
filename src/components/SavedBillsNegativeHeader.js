import React from 'react'
import { Header, Icon, Image } from 'semantic-ui-react'

const SavedBillsNegativeHeader = () => (
    <div>
        <Header as='h2' icon textAlign='center'>
            <i id="smiley" className="far fa-dizzy"></i>
            <Header.Content>Concerning Bills</Header.Content>
        </Header>
    </div>
)

export default SavedBillsNegativeHeader
