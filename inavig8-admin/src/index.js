import React from 'react'
import { render } from 'react-dom';
import Router from './components/Router';
import './css/styles.css';
import * as serviceWorker from './serviceWorker';


render(
    <Router />, document.querySelector('#root')
);

serviceWorker.unregister();
