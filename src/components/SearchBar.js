import React from 'react'
import { Input } from 'semantic-ui-react'

const SearchBar = (props) => (
    <Input value={props.searchTerm} onChange={(event)=>props.handleSearch(event)} action={{color: 'teal'}} label={{ icon: 'asterisk' }} labelPosition='right corner' placeholder='Search...' />
)

export default SearchBar
