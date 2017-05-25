import {expect, should} from 'chai';
import Reducer from '../src/reducer.js';
import {Map, fromJS} from 'immutable';
const Should = should();
describe('Проверка reducer.js', () => {
	it('Проверка на возвращение функции по умолчанию при подключении файла', () => {
		Should.exist(Reducer);
		expect(typeof(Reducer)).to.equal("function");
	});
	it('Проверка на пустое значение и undefined', () => {
		expect(Reducer()).to.equal(Map());
		expect(Reducer(undefined)).to.equal(Map());
		expect(Reducer(Map(), undefined)).to.equal(Map());
		expect(Reducer(Map())).to.equal(Map());
	});
	describe('Проверка на выполнение подключеных функций', () => {
		it('Проверка CREATE_STATE', () => {
			let action = {
						type: "CREATE_STATE",
						state: fromJS({
							foo: "bar"
						})
					},
					store = Map(),
					responce = Reducer(store, action);
			expect(responce.get('foo')).to.equal('bar');
		});
	});
})