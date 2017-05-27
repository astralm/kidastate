export default channel => store => next => action => {
	return next(action);
}