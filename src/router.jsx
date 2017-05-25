import React from 'react';
import {Router, Route} from 'react-router';
import {MainContainer} from './pages/main.jsx';
import CreateHistory from 'history/createHashHistory';

export const Paths = <Router history = {CreateHistory()}>
	<Route path="/" component={MainContainer}/>
</Router>