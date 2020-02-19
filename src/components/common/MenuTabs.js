import React, { Component, Fragment } from 'react';
// import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { logOutUser } from '../session/actions';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

class MenuTabs extends Component {
    state = { activeItem: 'home' }

    // TODO: CONSIDER MOVING TO REDUX
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    renderDifferentNavigation = () => {
        if (!localStorage.loggedIn) {
            return [
                <Navbar.Collapse key='1' id="basic-navbar-nav">

                    <Nav key='2' className="mr-auto">

                        {/* <Nav.Link href="#link">Link</Nav.Link> */}
                    </Nav>

                    <LinkContainer key='3' to="/CreateAccountForm" >
                        <Button key='4' variant="outline-info">Creat An Account</Button>
                    </LinkContainer>

                    <LinkContainer key='5' to="/login" >
                        <Button className='login-button' key='6' variant="outline-success" onClick={this.handleItemClick}>Log In</Button>
                    </LinkContainer>

                </Navbar.Collapse>
            ]
        } else  {
            return [
                <Fragment>
                    <Navbar.Collapse key='7' id="basic-navbar-nav">

                        <Nav key='8' className="mr-auto">
                            <LinkContainer key='9' to="/searchbills" >
                        <Nav.Link key='10' href="#link">Search Bills</Nav.Link>
                        </LinkContainer>

                        <LinkContainer key='11' to="/savedbills" >
                            <Nav.Link key='12' href="#link">My Saved Bills</Nav.Link>
                        </LinkContainer>

                    </Nav>

                        <LinkContainer key='13' to="/myprofile" >
                        <Button key='14' variant="outline-info">My Profile</Button>
                        </LinkContainer>
                    
                        <LinkContainer key='15' to="/" >
                            <Button className='logout-button' key='16' variant="outline-success" onClick={this.props.logOutUser}>
                        Log Out
                    </Button>
                    </LinkContainer>

                </Navbar.Collapse>

                </Fragment>
            ]
        }
    }
    
    render() {
        
        const { activeItem } = this.state

        return (
            <Navbar bg="light" expand="lg">
                <LinkContainer to="/" >
                <Navbar.Brand>InfoMe</Navbar.Brand>
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

export default connect(mapStateToProps, { logOutUser })(MenuTabs);
