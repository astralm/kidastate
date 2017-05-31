import * as types from 'constants/ActionTypes.js';
export default channel => store => next => action => {
	const state = store.getState().app,
				mobile_hash = state.getIn(['user', 'mobile_hash']);
	switch (action.type){
		case types.LOGIN:
			channel.push(mobile_hash, {
				table: 'users',
				operation: "db_sql_select",
				sql: `select name,phone from users where email = '${action.email}' and password = '${action.password}'`,
				uxui: types.LOGIN
			});
		default: return next(action);
	}
}