import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers/index.js'
import usersReducer from './reducers/usersReducer'
import withAuth from './hocs/withAuth'

import './stylesheets/index.css';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


const AuthedApp = withAuth(App);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
