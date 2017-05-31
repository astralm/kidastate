import * as types from 'constants/ActionTypes.js';
export default channel => store => next => action => {
	const state = store.getState().app;
	localStorage.state = JSON.stringify(state.toJS());
	switch (action.type){
		case types.SIGN_IN:
			var user = state.get('user');
			channel.push("qw6ads562-1", {
				operation: 'db_insert',
				uxui: 'uxui_number_101',
				table: 'users',
				field: 'mobile_hash,phone,name,email',
				values: `'${user.get("hash")}','${user.get("phone")}','${user.get("login")}','${user.get("email")}'`
			});
		case types.LOGIN:
			var user = state.get('user');
			channel.push(user.get('hash'))
		default: return next(action);
	}
}