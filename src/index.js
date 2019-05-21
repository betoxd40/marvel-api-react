import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/Main'
import store from './store'
import { Provider } from 'react-redux'
import './index.css';

const App = (
    <Provider store={store}>
        <Main />
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
