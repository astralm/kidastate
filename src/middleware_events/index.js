import * as types from '../constants/ActionTypes.js';
import login from './events/login.js';

const initEventListeners = (channel, mobile_hash, store) => {
	channel.on(mobile_hash, data => {
		switch(data.uxui){
			case types.LOGIN :
				login(store, data.result);
		}
	});
}

module.exports = initEventListeners;