import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { Button, Dropdown, Menu } from 'semantic-ui-react'

export default class MenuExampleSizeSmall extends Component {
    state = { activeItem: 'home' }

    handleLogOut = () => {
        localStorage.clear()
    }


    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu size='small'>
                <Menu.Item
                    name='InfoMe'
                    as={Link}
                    to='/'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                />


                <Menu.Menu position='right'>
                    <Dropdown item text='Options'>
                        <Dropdown.Menu>
                            <Dropdown.Item
                                as={Link}
                                to='/searchbills'
                                name='Search Bills'
                                active={activeItem === 'Search Bills'}
                                onClick={this.handleItemClick}
                            >
                                Search Bills
                            </Dropdown.Item>

                            <Dropdown.Item
                                as={Link}
                                to='/savedbills'
                                name='My Saved Bills'
                                active={activeItem === 'My Saved Bills'}
                                onClick={this.handleItemClick}
                            > 
                                Saved Bills
                            </Dropdown.Item>

                            <Dropdown.Item
                                as={Link}
                                to='/myprofile'
                                name='my-profile'
                                active={activeItem === 'my-profile'}
                                onClick={this.handleItemClick}
                            >
                                My Profile
                            </Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>

                    <Menu.Item
                        as={Link}
                        to='/'
                        name='log-out'
                        active={activeItem === 'log-out'}
                        onClick={this.handleLogOut}
                    >
                        <Button primary>Log Out</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}
