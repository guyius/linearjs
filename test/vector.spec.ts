import { Vector } from '../src/vector';
import { expect } from 'chai';

describe('Vector', () => {
	let vector: Vector;
	let vectorX: number[] = [1, 2, 3];
	let vectorY: number[] = [4, 5, 6];
	let scalar: number = 3;

	beforeEach(() => vector = new Vector());

	it('expect module to exist', () => expect(vector).to.be.an('object'));

	it('should add two vectors', () => {
		const vectorSum = vector.add(vectorX, vectorY);
		expect(vectorSum).to.deep.equal([5, 7, 9]);
	});

	it('should subtract two vectors', () => {
		const vectorDifference = vector.sub(vectorX, vectorY);
		expect(vectorDifference).to.deep.equal([-3, -3, -3]);
		const oppositeVectorDifference = vector.sub(vectorY, vectorX);
		expect(oppositeVectorDifference).to.deep.equal([3, 3, 3]);
	});

	it('should scale a vector', () => {
		const vectorProduct = vector.scale(vectorX, scalar);
		expect(vectorProduct).to.deep.equal([3, 6, 9]);
	});

	it('should divide a vector', () => {
		const vectorRemainder = vector.divide(vectorX, scalar);
		expect(vectorRemainder).to.deep.equal([1/3, 2/3, 1]);
	});

	it('should fail to do arithmetic actions on two vectors, if they have different amount of members', () => {
		const error = 'vectors must be of same length to do arithmetic actions';
		const fourItemVector = vectorX.concat(4);
		expect(() => vector.add(fourItemVector, vectorY)).to.throw(error);
		expect(() => vector.sub(fourItemVector, vectorY)).to.throw(error);
	});

	it('should fail to do arithmetic actions on two vectors, if they are empty', () => {
		const error = 'can\'t do arithmetic actions on empty vectors';
		expect(() => vector.add([], [])).to.throw(error);
		expect(() => vector.sub([], [])).to.throw(error);
		expect(() => vector.scale([], scalar)).to.throw(error);
		expect(() => vector.divide([], scalar)).to.throw(error);
	});
});