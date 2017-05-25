import {Map} from 'immutable';
export default function(store = Map(), state = Map()){
	return store.merge(state);
}