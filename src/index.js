import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import withAuth from './hocs/withAuth'

import App from './App';
import './stylesheets/index.css';

// import { composeWithDevTools } from 'redux-devtools-extension'
// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import * as reducers from './components'
// import rootReducer from './reducers/index.js'
// import usersReducer from './reducers/usersReducer'
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

import configureStore from './store/configureStore';
const store = configureStore()
const AuthedApp = withAuth(App);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
