import React from 'react';
import {
    Route,
    Switch
} from "react-router-dom";
import Home from './components/home/home';
import Landing from './components/landing/landing';
import View1 from './components/view1/view1';


export default function Router() {
    return (

            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/landing" component={Landing} />
                <Route path="/view1" component={View1} />
            </Switch>

    )
}