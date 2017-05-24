import React from 'react';
import {Router, Route} from 'react-router';
import {Main} from './pages/main.jsx';
import CreateHistory from 'history/createHashHistory';

export const Paths = <Router history = {CreateHistory()}>
	<Route path="/" component={Main}/>
</Router>