import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import LoginMJ from './Pages/minjoo/Login/Login';
import MainMJ from './Pages/minjoo/Main/Main';

import LoginJY from './Pages/jiyeon/Login/Login';
import MainJY from './Pages/jiyeon/Main/Main';

import LoginJJ from './Pages/jongjin/Login/Login';
import MainJJ from './Pages/jongjin/Main/Main';

import LoginMinji from './Pages/minji/Login/Login';
import MainMinji from './Pages/minji/Main/Main';

import LoginYj from './Pages/yeonju/Login/Login';
import MainYj from './Pages/yeonju/Main/Main';
import House from './Pages/House';


class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
              
                    <Route exact path='/' component={House}/>

                    <Route exact path='/login-minjoo' component={LoginMJ} />
                    <Route exact path='/main-minjoo' component={MainMJ} />

                    <Route exact path='/login-jiyeon' component={LoginJY} />
                    <Route exact path='/main-jiyeon' component={MainJY} />``

                    <Route exact path='/login-jongjin' component={LoginJJ} />
                    <Route exact path='/main-jongjin' component={MainJJ} />

                    <Route exact path='/login-minji' component={LoginMinji} />
                    <Route exact path='/main-minji' component={MainMinji} />

                    <Route exact path='/login-yeonju' component={LoginYj} />
                    <Route exact path='/main-yeonju' component={MainYj} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;




