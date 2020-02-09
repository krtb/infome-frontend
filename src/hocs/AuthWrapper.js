import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as actions from '../components/session/actions'

const AuthWrapper = (WrappedComponent) => {

    // AUTHED COMPONENT
    class AuthorizedComponent extends React.Component {
        componentDidMount() {
            if (localStorage.getItem('jwt') && !this.props.loggedIn) this.props.findCurrentUser()
        }

        render() {

            if (localStorage.getItem('jwt') && this.props.loggedIn) {
                return <WrappedComponent />
            } else if (localStorage.getItem('jwt') && this.props.authenticatingUser) {
                // TODO: create a loading component
                return '...Loading'
            } else {
                return <Redirect to="/" {...this.props}/>
            }
        }
    }

    return connect(mapStateToProps, actions)(AuthorizedComponent)
}

const mapStateToProps = (state) => ({
    loggedIn: state.userReducer.loggedIn,
    authenticatingUser: state.userReducer.authenticatingUser
})

export default AuthWrapper