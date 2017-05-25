import {Map} from 'immutable';
import CreateState from './redux_actions/create_state.js';
export default function(store = Map(), action = {type: ""}){
	switch(action.type){
		case 'CREATE_STATE':
			return CreateState(store, action.state);
		default:
			return store;
	}
}