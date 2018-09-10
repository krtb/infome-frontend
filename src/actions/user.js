export const loginUser = (name, password) => {
    return dispatch => {
        dispatch(authenticatingUser())
        fetch('http://localhost:3001/api/v1/login', {
            method: 'POST',
            headers: {
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
    }
}

export const fetchCurrentUser = () => {
    // takes the token in localStorage and finds out who it belongs to
    return dispatch => {
        fetch('http://localhost:3001/api/v1/profile', {
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