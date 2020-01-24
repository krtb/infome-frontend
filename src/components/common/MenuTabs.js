import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logOutUser } from '../session/actions';
import { Button, Dropdown, Menu } from 'semantic-ui-react';

class MenuTabs extends Component {
    state = { activeItem: 'home' }

    // handleLogOut = () => {
    //     // TODO: set loggedIn state to false
    //     this.setState({
    //         loggedIn: false
    //     })
    //     localStorage.clear()
    // }

    renderContent = () => {
        switch (this.props.loggedIn) {
            case false:
                return [

                    
                
                    <Menu.Item
                    as={Link}
                    to='/CreateAccountForm'
                    name='sign-up'
                    active={this.state.activeItem === 'sign-up'}
                    onClick={this.handleLogOut}
                    key="1"
                > 
                    <Button secondary fluid>
                        Sign Up
                    </Button>
                </Menu.Item> ,

                    <Menu.Item
                        as={Link}
                        to="/login"
                        name='log-out'
                        active={this.state.activeItem === 'log-in'}
                        onClick={this.props.logOutUser}
                        key="2"
                    >
                        <Button primary>Log In
                </Button>
                    </Menu.Item>
                    ]

            default:
                return [
                
                    <Menu.Item
                        as={Link}
                        to='/searchbills'
                        name='Search Bills'
                        active={this.state.activeItem === 'Search Bills'}
                        onClick={this.handleItemClick}
                        key="1"

                    >
                        Search Bills
                            </Menu.Item>,

                    <Menu.Item
                        as={Link}
                        to='/savedbills'
                        name='My Saved Bills'
                        active={this.state.activeItem === 'My Saved Bills'}
                        onClick={this.handleItemClick}
                        key="2"

                    >
                        Saved Bills
                            </Menu.Item>,

                    <Menu.Item
                        as={Link}
                        to='/myprofile'
                        name='my-profile'
                        active={this.state.activeItem === 'my-profile'}
                        onClick={this.handleItemClick}
                        key="3"

                    >
                        My Profile
                            </Menu.Item>,

                <Menu.Item
                    as={Link}
                    to='/'
                    name='log-out'
                    active={this.state.activeItem === 'log-out'}
                    onClick={this.props.logOutUser}
                    key="4"

                >
                <Button primary>Log Out
                </Button>
                </Menu.Item>]
                
                
        }
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {

        
        const { activeItem } = this.state

        return (
            <Menu size='small' style={{ position: 'relative' }}>
                <Menu.Item
                    name='InfoMe'
                    as={Link}
                    to='/'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                />


                <Menu.Menu position='right'>
                    


                        {this.renderContent()}

                </Menu.Menu>
            </Menu>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        loggedIn: state.userReducer.loggedIn
    }
}

export default connect(mapStateToProps, { logOutUser})(MenuTabs);
