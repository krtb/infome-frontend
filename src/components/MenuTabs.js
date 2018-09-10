import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu } from 'semantic-ui-react'

export default class MenuTabs extends Component {
    state = {}

    handleLogOut = () => {
        localStorage.clear()
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu>
                <Menu.Item
                    as={Link}
                    to='/savedbills'
                    name='My Saved Bills'
                    active={activeItem === 'My Saved Bills'}
                    onClick={this.handleItemClick}
                >
                    My Saved Bills
        </Menu.Item>
                    <Menu.Item
                        as={Link}
                        to='/searchbills'
                        name='Search Bills'
                        active={activeItem === 'Search Bills'}
                        onClick={this.handleItemClick}
                    >
                        Search Bills
        </Menu.Item>

                <Menu.Item 
                    as={Link}
                    to='/myprofile' 
                    name='my-profile' 
                    active={activeItem === 'my-profile'} 
                    onClick={this.handleItemClick}
                >
                    My Profile
        </Menu.Item>

                <Menu.Item
                    as={Link}
                    to='/'
                    name='log-out'
                    active={activeItem === 'log-out'}
                    onClick={this.handleLogOut}
                >
                   Log Out
        </Menu.Item>
            </Menu>
        )
    }
}
