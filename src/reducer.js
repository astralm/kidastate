import {Map} from 'immutable';
import Simple from './redux_actions/simple.js';
export default function(store = Map(), action){
	switch(action.type){
		case 'SIMPLE':
			return Simple(store, action);
	}
}