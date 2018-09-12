import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, withRouter} from 'react-router-dom';
import rootReducer from './reducers/index.js'
// 
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import usersReducer from './reducers/usersReducer'
import thunk from 'redux-thunk'
import withAuth from './hocs/withAuth'
// 
// const inititialState = {
//     picture: null,
//     counter: 1,
//     search: ''
// }

// function reducer(state = inititialState, action) {
//     console.log('reducer is run', state, action);

//     if(action.type === 'cat'){
//         console.log('TRUE');
        
//     }

//     return state
// }
// const rootReducer = combineReducers({ usersReducer })
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
console.log( 'state inside of store', store.getState());

// import configureStore from './store/configureStore'
// const store = configureStore()

// store.dispatch({type: 'cat', payload: 'meow'})

const AuthedApp = withAuth(App);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
