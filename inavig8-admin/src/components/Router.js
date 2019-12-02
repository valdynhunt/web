import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import App from './App';

const Router = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/forgot" component={ForgotPassword} />
            <Route path="/reset" component={ResetPassword} />
            <Route component={Login} />
        </Switch>
    </BrowserRouter>
    
);

export default Router;