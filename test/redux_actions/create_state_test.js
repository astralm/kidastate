import {expect, should} from 'chai';
import Action from '../../src/redux_actions/create_state.js';
import {fromJS, Map} from 'immutable';
const Should = should();
describe('Проверка redux_actions/create_state', () => {
	it('Проверка на возвращение по умолчанию функции', () => {
		Should.exist(Action);
		expect(typeof(Action)).to.equal("function");
	});
	it('Проверка на возвращаемое значение', () => {
		let state = fromJS({
					foo: "bar"
				}),
				store = Map(),
				responce = Action(store, state);
		expect(responce).to.equal(state);
	});
	it('Проверка на пустое значение и undefined', () => {
		expect(Action()).to.equal(Map());
		expect(Action(undefined)).to.equal(Map());
	});
});