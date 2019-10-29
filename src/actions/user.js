
export const loginUser = (name, password) => {

    return dispatch => {
        dispatch(authenticatingUser())
        const prod_login_endpoint = 'https://infome-backend.herokuapp.com/api/v1/login'
        //const dev_endpoint= 'http://localhost:3001/api/v1/login' ---> remove dev api url, for prod '/resources'
        const postFetchObject = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ user: { name, password } })
        }

        fetch(prod_login_endpoint, postFetchObject)
        .then(response => response.json())
        .then(({ user, jwt }) => {
            localStorage.setItem('jwt', jwt)
            dispatch(setCurrentUser(user))
        })
        .catch(error =>
            console.log(error.message, 'ERROR HERE!') //fix catch syntax
        )
    }

}

export const fetchCurrentUser = () => {
    // takes the token in localStorage and finds out who it belongs to
    return dispatch => {
        const dev_profile_endpoint = 'http://localhost:3001/api/v1/profile' //---> remove dev api url, for prod '/resources'
        //const prod_profile_endpoint = 'https://infome-backend.herokuapp.com/api/v1/profile' TODO: add this to .env file
        const getFetchObject = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            }
        }

        fetch(dev_profile_endpoint, getFetchObject)
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