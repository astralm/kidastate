import * as types from '../constants/ActionTypes.js';
import login from './events/login.js';
import forgot_password from './events/forgot_password.js';
import create_files from './events/create_files.js';

const initEventListeners = (socket, store) => {
	socket.on(types.LOGIN, data => {
		login(store, data);
	});
	socket.on(types.FORGOT_PASSWORD, data => {
		forgot_password(store, data);
	});
	socket.on(types.CREATE_FILES, data => {
		create_files(store, data);
	});
}

module.exports = initEventListeners;