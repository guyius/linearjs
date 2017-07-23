import * as Linear from '../src/index';
import { expect } from 'chai';

describe('linear module', () => {
	it('should load default modules', () => {
		expect(Linear.Matrix).to.be.an('function');
		expect(Linear.Vector).to.be.an('function');
	});
});