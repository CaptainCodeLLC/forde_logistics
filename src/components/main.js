import React from 'react';
import {Switch,Route} from 'react-router-dom';

// import mainContainer from './mainContainer';
// import Checkout from './checkout';
import Home from '../components/pages/home'
import About from '../components/pages/about/';
import Services from '../components/pages/services'
import Contact from '../components/pages/contact';
import Payment from '../components/pages/payment';

const Main = () => (
    <main>
        <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/about" component = {About}/>
            <Route exact path = "/services" component = {Services}/>
            <Route exact path = "/contact" component = {Contact}/>
            <Route exact path = "/payment" component = {Payment}/>
        </Switch>
    </main>
)

export default Main;
