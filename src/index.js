import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import './index.css';

import configureStore from './store/configureStore';
const store = configureStore()
// import withAuth from './hocs/withAuth'
// const AuthedApp = withAuth(App);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
