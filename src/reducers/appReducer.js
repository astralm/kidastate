import { UPDATE_FOO } from '../constants/ActionTypes.js';
import { Map } from 'immutable';

const AppReducer = (state = Map(), action) => {
	switch(action.type){
		case UPDATE_FOO:
			return state.set('foo', action.foo);
		case "UPDATE_BAR":
			return state.set('bar', action.bar);
		default: 
			return state;
	}
}

module.exports = AppReducer;

