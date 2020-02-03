import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import AuthWrapper from '../../hocs/AuthWrapper';
import { updateUserInfo, updateUserProfile, onEditClick } from './actions';

import { Button, Form, Dropdown } from 'semantic-ui-react'
import stateOptions from './statesDB'

class UserProfile extends Component {

    handleChange = (event) => {
        this.props.updateUserInfo(event, this.props.userCopy)
    }
    
    onEditClick = (event) => {
        this.props.onEditClick(this.props.requestEdit, event)
    }

    onEditSave = (event) => {
        this.props.updateUserProfile(event, this.props.userCopy)
    }

    render() {
        
        return (
            <Fragment>
            <Form >
                <Form.Group unstackable widths={2}>
                        <Form.Input name="name" label='User Name' placeholder='User Name' 
                            onChange={this.props.requestEdit ? this.handleChange : null} 
                            value={this.props.requestEdit ? this.props.userCopy.name : this.props.user.name}
                        />
                        <Form.Input name="email" label='Email' placeholder='Email' 
                            onChange={this.props.requestEdit ? this.handleChange : null}
                            value={this.props.user.email ? this.props.userCopy.email : ''}  
                        />
                        {/* <Form.Input label='Password' placeholder='Password' value={this.props.user.password ? this.props.user.password : '' } /> */}
                </Form.Group>
                <Form.Group widths={2}>
                        <Form.Input name="zip_code" label='Zip Code' placeholder='Zip Code'
                            onChange={this.props.requestEdit ? this.handleChange : null}
                            value={this.props.user.zip_code ? this.props.userCopy.zip_code : ''} 
                        />
                    <Form.Input name="political_party" label='Political Party' placeholder='Political Party' 
                        onChange={this.props.requestEdit ? this.handleChange : null}
                        value={this.props.user.political_party ? this.props.userCopy.political_party : '' } 
                    />
                </Form.Group>

                {/* <Dropdown placeholder='State' search selection options={stateOptions} /> */}

                <br/>
                <br />
                {
                    this.props.requestEdit ?
                [
                    <Button key="1" onClick={this.onEditClick} name="discard" type="submit">Discard Changes</Button>,
                    <Button key="2" onClick={this.onEditSave}>Save Changes</Button>
                ]
                    :
                <Button onClick={this.onEditClick} name="edit" type="submit">Edit</Button>
                }
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

export default AuthWrapper(connect(mapStateToProps, { updateUserInfo, updateUserProfile, onEditClick})(UserProfile));
