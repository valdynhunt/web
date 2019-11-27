// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './app'


// ReactDOM.render(<App />, document.getElementById('root'));



import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router';
import './css/styles.css';
import * as serviceWorker from './serviceWorker';

render(
    <Router />, document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
