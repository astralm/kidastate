import {expect, should} from 'chai';
import ActionCreator from '../../src/action_creators/create_state.js';
import {fromJS, Map} from 'immutable';
const Should = should();

describe('action_creators/create_state.js', () => {
	it('Проверка на возвращение функции по умолчанию при подключении файла', () => {
		Should.exist(ActionCreator);
		expect(typeof(ActionCreator)).to.equal("function");
	});
	it('Проверка на возвращаемое значение', () => {
		let state = fromJS({
					foo: "bar"
				}),
				actionObject = ActionCreator(state);
		expect(actionObject.type).to.equal("CREATE_STATE");
		expect(actionObject.state.get('foo')).to.equal("bar");
	});
	it('Проверка на пустое значение и undefined', () => {
		expect(ActionCreator().state).to.equal(Map());
		expect(ActionCreator(undefined).state).to.equal(Map());
	});
});