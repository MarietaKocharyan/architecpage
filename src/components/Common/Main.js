import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../About/about';
import Home from '../Home';
import Arts from '../Arts'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            {/* <Route path='/goal' component={Goal}/> */}
            <Route path='/arts' component={Arts}/> 
        </Switch>
    </main>
);

export default Main;