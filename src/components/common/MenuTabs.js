import React, { Component, Fragment } from 'react';
// import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { logOutUser } from '../session/actions';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

// import { Button, Menu } from 'semantic-ui-react';

class MenuTabs extends Component {
    state = { activeItem: 'home' }

    // TODO: CONSIDER MOVING TO REDUX
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    renderDifferentNavigation = () => {
        if (!localStorage.loggedIn) {
            return [
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mr-auto">

                        {/* <Nav.Link href="#link">Link</Nav.Link> */}
                    </Nav>

                    <LinkContainer to="/CreateAccountForm" >
                    <Button variant="outline-success">Creat An Account</Button>
                    </LinkContainer>

                    <LinkContainer to="/login" >
                        <Button variant="outline-success" onClick={this.handleItemClick}>Log In</Button>
                    </LinkContainer>

                </Navbar.Collapse>
            ]
        } else  {
            return [
                <Fragment>
                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="mr-auto">
                        <LinkContainer to="/searchbills" >
                        <Nav.Link href="#link">Search Bills</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/savedbills" >
                        <Nav.Link href="#link">My Saved Bills</Nav.Link>
                        </LinkContainer>

                    </Nav>
                    
                    <Button variant="outline-info">My Profile</Button>
                    
                    <LinkContainer to="/" >
                    <Button variant="outline-success" onClick={this.props.logOutUser}>
                        Log Out
                    </Button>
                    </LinkContainer>

                </Navbar.Collapse>

                </Fragment>
            ]
        }
    }

    // renderContent = () => {
        
    //     // if(!localStorage.loggedIn) {
    //     //         return [

                    
                    
    //     //             <Menu.Item
    //     //             as={Link}
    //     //             to='/CreateAccountForm'
    //     //             name='sign-up'
    //     //             active={this.state.activeItem === 'sign-up'}
    //     //             onClick={this.handleLogOut}
    //     //             key="1"
    //     //         > 
    //     //             <Button secondary fluid>
    //     //                 Sign Up
    //     //             </Button>
    //     //         </Menu.Item> ,

    //     //             <Menu.Item
    //     //                 as={Link}
    //     //                 to="/login"
    //     //                 name='log-out'
    //     //                 active={this.state.activeItem === 'log-in'}
    //     //                 onClick={this.handleItemClick}
    //     //                 key="2"
    //     //             >
    //     //                 <Button primary>Log In
    //     //         </Button>
    //     //             </Menu.Item>
    //     //             ]
    //     //          } else {
    //     //         return [
                
    //     //             <Menu.Item
    //     //                 as={Link}
    //     //                 to='/searchbills'
    //     //                 name='Search Bills'
    //     //                 active={this.state.activeItem === 'Search Bills'}
    //     //                 onClick={this.handleItemClick}
    //     //                 key="1"

    //     //             >
    //     //                 Search Bills
    //     //                     </Menu.Item>,

    //     //             <Menu.Item
    //     //                 as={Link}
    //     //                 to='/savedbills'
    //     //                 name='My Saved Bills'
    //     //                 active={this.state.activeItem === 'My Saved Bills'}
    //     //                 onClick={this.handleItemClick}
    //     //                 key="2"

    //     //             >
    //     //                 Saved Bills
    //     //                     </Menu.Item>,

    //     //             <Menu.Item
    //     //                 as={Link}
    //     //                 to='/myprofile'
    //     //                 name='my-profile'
    //     //                 active={this.state.activeItem === 'my-profile'}
    //     //                 onClick={this.handleItemClick}
    //     //                 key="3"

    //     //             >
    //     //                 My Profile
    //     //                     </Menu.Item>,

    //     //         <Menu.Item
    //     //             as={Link}
    //     //             to='/'
    //     //             name='log-out'
    //     //             active={this.state.activeItem === 'log-out'}
    //     //             key="4"
    //     //             onClick={this.props.logOutUser}
    //     //         >

    //     //         <Button primary>Log Out
    //     //         </Button>
    //     //         </Menu.Item>]
                
    //     //     }
                
                
    //     }
    
    render() {
        
        const { activeItem } = this.state

        return (
            <Navbar bg="light" expand="lg">
                <LinkContainer to="/" >
                <Navbar.Brand>InfoME</Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {this.renderDifferentNavigation()}

            </Navbar>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userReducer.user,
        loggedIn: state.userReducer.loggedIn
    }
}

{/* <Menu size='small' style={{ position: 'relative' }}>
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
</Menu>  */}

export default connect(mapStateToProps, { logOutUser })(MenuTabs);
