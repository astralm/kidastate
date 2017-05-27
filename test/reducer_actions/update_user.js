import { expect } from 'chai';
import appReducer from '../../src/reducers/app.js';
import { Map, fromJS } from 'immutable';

describe('Проверка дейстивия UPDATE_USER', () => {
	it('Проверка на undefined, null и пустое значение', () => {
		expect(appReducer(Map(), {
			type: "UPDATE_USER",
			user: undefined
		})).to.equal(fromJS({
			user: {}
		}));
		expect(appReducer(Map(), {
			type: "UPDATE_USER",
			user: null
		})).to.equal(fromJS({
			user:{}
		}));
		expect(appReducer(Map(), {
			type: "UPDATE_USER"
		})).to.equal(fromJS({
			user: {}
		}));
	});
	it('Проверка на возвращаемое значение', () => {
		expect(appReducer(Map(), {
			type: "UPDATE_USER",
			user: fromJS({
				name: 'John'
			})
		})).to.equal(fromJS({
			user: {
				name: 'John'
			}
		}));
	});
});

