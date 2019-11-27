import React from 'react'
//import ReactDOM from 'react-dom'
import { render } from 'react-dom';
import Router from './components/Router';
//import App from './app'
import './css/styles.css';
import * as serviceWorker from './serviceWorker';


//ReactDOM.render(<App />, document.getElementById('root'));



render(
    <Router />, document.querySelector('#root')
);

serviceWorker.unregister();
