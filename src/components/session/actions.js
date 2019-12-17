import infoMeApi from '../apis/infomeAPI' // fetch from dev: 'http://localhost:3000/api/v1'
import { AUTHENTICATING_USER, SET_CURRENT_USER } from './types'

export const loginUser = (name, password) => {

    return dispatch => {
        dispatch(authenticatingUser())
        const prod_login_endpoint = 'https://infome-backend.herokuapp.com/api/v1/login'
        // TODO:const dev_endpoint= 'http://localhost:3001/api/v1/login' ---> remove dev api url, for prod '/resources' 
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

export const authenticatingUser = () => (
    { type: AUTHENTICATING_USER }
)

export const setCurrentUser = userData => ({
    type: SET_CURRENT_USER,
    payload: userData
})