import React from 'react';
import ReactDOM from 'react-dom';
import {Paths} from './router.jsx';
import * as Phoenix from 'phoenix';
import {createStore, applyMiddleware} from 'redux';
import Middleware from './middleware.js';
import {Provider} from 'react-redux';
import Reducer from './reducer.js';
import Action from './action_creators/simple.js';
import {fromJS} from 'immutable';

const Channel = {}; // здесь подключение к wws каналу через объект Phoenix

const Store = applyMiddleware(Middleware(Channel))(createStore)(Reducer);

const state = fromJS({
	foo: "bar"
});

Store.merge(state);

Store.dispatch(Action("simple action property"));

window.addEventListener("DOMContentLoaded", function(){
	ReactDOM.render(
		<Provider store = {Store}>{Paths}</Provider>,
		document.getElementById("container")
	);
});