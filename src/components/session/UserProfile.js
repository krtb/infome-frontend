import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import AuthWrapper from '../../hocs/AuthWrapper';
import { controlledProfileChanges, editUserProfile, clearChanges } from './actions';

import { Button, Form, Dropdown } from 'semantic-ui-react'
import stateOptions from './statesDB'

class UserProfile extends Component {

    handleChange = (event) => {
        event.preventDefault()

        this.props.controlledProfileChanges(event, this.props.userCopy)
    }
    
    clearChanges = (event) => {
        // TODO: consider removing 'requestEdit' BOOLEAN
        this.props.clearChanges(this.props.requestEdit, event)
    }

    editUserProfile = () => {
        this.props.editUserProfile(this.props.user)
    }

    render() {
        
        return (
            <Fragment>
            <Form >
                <Form.Group unstackable widths={2}>
                        <Form.Input 
                            label='User Name' placeholder='User Name'
                            type="text"
                            name="name" 
                            onChange={this.handleChange} 
                            value={this.props.user.name || ''}
                        />
                        <Form.Input name="email" label='Email' placeholder='Email' 
                            onChange={this.handleChange}
                            value={this.props.user.email || ''}  
                        />
                        {/* <Form.Input label='Password' placeholder='Password' value={this.props.user.password ? this.props.user.password : '' } /> */}
                </Form.Group>
                <Form.Group widths={2}>
                        <Form.Input name="zip_code" label='Zip Code' placeholder='Zip Code'
                            onChange={this.handleChange}
                            value={this.props.user.zip_code || ''} 
                        />
                    <Form.Input name="political_party" label='Political Party' placeholder='Political Party' 
                        onChange={this.handleChange}
                        value={this.props.user.political_party || ''} 
                    />
                </Form.Group>

                {/* <Dropdown placeholder='State' search selection options={stateOptions} /> */}

                <br/>
                <br />
                    <Button key="1" onClick={this.clearChanges} name="clear" type="submit">Discard Changes</Button>
                    <Button key="2" onClick={this.editUserProfile}>Save Changes</Button>
            </Form>
            </Fragment>
        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        userCopy: state.userReducer.userCopy,
        requestEdit: state.userReducer.requestEdit
    }
}

export default AuthWrapper(connect(mapStateToProps, { controlledProfileChanges, editUserProfile, clearChanges})(UserProfile));
