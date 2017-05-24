export default function(store, action){
	console.log("Simple action: " + action.type + "; Props: " + action.props);
	return store;
}