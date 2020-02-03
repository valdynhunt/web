import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './auth/Login';
import ForgotPassword from './auth/ForgotPassword';
import ResetPassword from './auth/ResetPassword';
import Register from './auth/Register';
import Confirm from './auth/Confirm';
import Design from './Design'
import LocationObjects from './LocationObjects'
import App from './App';
import Export from './Export';

const Router = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/forgot" component={ForgotPassword} />
            <Route path="/reset" component={ResetPassword} />
            <Route path="/register" component={Register} />
            <Route path="/design/:location_id" component={Design} />
            <Route path="/design" component={Design} />
            <Route path="/location-objects/:location_id" component={LocationObjects} />
            <Route path="/export" component={Export} />
            <Route path="/confirm" component={Confirm} />
            <Route component={Login} />
        </Switch>
    </BrowserRouter>
    
);

export default Router;