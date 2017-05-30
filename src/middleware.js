import * as types from 'constants/ActionTypes.js';
export default channel => store => next => action => {
	const state = store.getState().app,
				user = state.get('user');
	// localStorage.state = JSON.stringify(state.toJS());
	switch (action.type){
		case types.LOGIN:
			/*console.log({
				login: user.get('login'),
				hash: user.get('hash'),
				email: user.get('email'),
				phone: user.get('phone')
			});*/
		default: return next(action);
	}
}