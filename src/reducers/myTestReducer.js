// a reducer is a PURE function that takes the previous state and an action as arguments and returns new state based on the action.type
import { /* your type here, CHANGE_MESSAGE */ } from '../actions/types'


const initialState = {
    upcoming_bill_data: [],
    changing_upcoming_bill_data: [],
    isClicked: false,
    productiveBills: [],
}

// returns an object
// will overwrite our state
// if something is not returned, state will become undefined
const exampleReducer = (state = initialState, action) => {
    switch (action.type) {

        // case CHANGE_MESSAGE:
        // return {exampleMessage: 'Hola Mundo'}

        default:
            return state

    }
}

export default exampleReducer