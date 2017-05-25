import React from 'react';
import ReactDOM from 'react-dom';
import {Paths} from './router.jsx';
import * as Phoenix from 'phoenix';
import {createStore, applyMiddleware} from 'redux';
import Middleware from './middleware.js';
import {Provider} from 'react-redux';
import Reducer from './reducer.js';
import CreateStateCreator from './action_creators/create_state.js';
import {fromJS} from 'immutable';

const Channel = {}, // здесь подключение к wws каналу через объект Phoenix
			Store = applyMiddleware(Middleware(Channel))(createStore)(Reducer),
			state = fromJS({
				foo: "Я текст из состояния!"
			});
			
Store.dispatch(CreateStateCreator(state));

window.addEventListener("DOMContentLoaded", function(){
	ReactDOM.render(
		<Provider store = {Store}>{Paths}</Provider>,
		document.getElementById("container")
	);
});