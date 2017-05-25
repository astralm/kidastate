import {expect} from 'chai';
import {fromJS} from 'immutable';

describe('Работоспособность модулей', () => {
	it('chai mocha', () => {
		const foo = 1;
		expect(foo).to.equal(1);
	});
	it('immutable', () => {
		var foo = fromJS({
			foo: "bar"
		});
		var bar = foo.set("foo", "foo");
		expect(bar.get('foo')).to.equal("foo");
		expect(foo.get('foo')).to.equal("bar");
	});
});