import {Map} from "immutable";
export default function(state = Map()){
	return {
		type: "CREATE_STATE",
		state
	}
}