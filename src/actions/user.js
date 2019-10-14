import { isFlowDeclaration } from "@babel/types"

export const loginUser = (name, password) => {
    return dispatch => {
        dispatch(authenticatingUser())
        //let dev_api_url = 'http://localhost:3001/api/v1/login' ---> remove dev api url, for prod '/resources'

        fetch('/resources', {
            method: 'POST',
            headers: {
                'dataType': 'json',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ user: { name, password } })
        })
            .then(response => response.json())
            .then(({ user, jwt }) => {
                localStorage.setItem('jwt', jwt)
                dispatch(setCurrentUser(user))
            })
            .catch(er)
    }
}

export const fetchCurrentUser = () => {
    // takes the token in localStorage and finds out who it belongs to
    return dispatch => {
        //let dev_api_url = 'http://localhost:3001/api/v1/profile' ---> remove dev api url, for prod '/resources'

        fetch('/resources', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`
            }
        })
            .then(response => response.json())
            .then(({ user }) => dispatch(setCurrentUser(user)))
    }
}

export const setCurrentUser = userData => ({
    type: 'SET_CURRENT_USER',
    payload: userData
})

// tell our app we're currently fetching
export const authenticatingUser = () => ({ type: 'AUTHENTICATING_USER' })