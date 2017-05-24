import Action from './ws_actions/ws_simple_action.js';
export default channel => store => next => action => {
	Action(channel, action);
	return next(action);
}