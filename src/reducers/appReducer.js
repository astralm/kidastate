import { Map, fromJS } from 'immutable';
import * as types from '../constants/ActionTypes.js';

const AppReducer = (state = Map(), action) => {
	switch(action.type){
		case types.UPDATE_STATE :
			return state.merge(fromJS(JSON.parse(action.state)));
		case types.SIGN_IN :
			const user = state.get('user') ? state.get('user').merge(action.user) : undefined;
			return user != undefined ? state.set('user', user) : state;
		default: 
			return state;
	}
}

module.exports = AppReducer;

