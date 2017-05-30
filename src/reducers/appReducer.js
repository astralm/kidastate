import { Map, fromJS } from 'immutable';
import * as types from '../constants/ActionTypes.js';

const AppReducer = (state = Map(), action) => {
	switch(action.type){
		case types.UPDATE_STATE :
			return state.merge(fromJS(JSON.parse(action.state)));
		case types.LOGIN : 
			return action.email && action.password ? 
				(state.set('user', state.get('user') ? 
					state.get('user').merge(fromJS({
						email: action.email,
						password: action.password
					})) : 
					fromJS({
						email: action.email,
						password: action.password
					}))
				) : 
				state;
		default: 
			return state;
	}
}

module.exports = AppReducer;

