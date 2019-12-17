import infoMeApi from '../apis/infomeAPI' // fetch from dev: 'http://localhost:3000/api/v1'
import { AUTHENTICATING_USER, SET_CURRENT_USER } from './types'

export const authenticatingUser = () => ({ 
    type: AUTHENTICATING_USER 
})

export const setCurrentUser = userData => ({
    type: SET_CURRENT_USER,
    payload: userData
})

export const loginUser = (name, password) => async dispatch => {
    try {
        dispatch(authenticatingUser())

        const data = { user: { name, password } }
        const response = await infoMeApi.post('/login', data)

        const userJWT = await response.data.jwt
        const userData = await response.data.user
        
        localStorage.setItem('jwt', userJWT)
        dispatch(setCurrentUser(userData))

    } catch (error) {
        console.log(error, "in session/actions/loginUser")
    }
    // async always returns a promise, https://scotch.io/tutorials/asynchronous-javascript-using-async-await
}