import React from 'react';
import {BrowserRouter, Switch,  Route } from 'react-router-dom';

import Login from './view/login'
import Dashboard from './view/Dashboard'
import New from './view/New'

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/new" component={New}/>
        </Switch>
        
        </BrowserRouter>
    )
}
