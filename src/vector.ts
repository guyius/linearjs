export class Vector {

	add(vectorA: number[], vectorB: number[]): number[] | void {
		if (this.validateVectorsForArithmetic(vectorA, vectorB)) {
			return this.applyArithmeticAction('add', vectorA, vectorB);
		}
	}

	sub(vectorA: number[], vectorB: number[]): number[] | void {
		if (this.validateVectorsForArithmetic(vectorA, vectorB)) {
			return this.applyArithmeticAction('subtract', vectorA, vectorB);
		}
	}

	scale(vectorA: number[], scalar: number): number[] | void {
		if (this.validateVectorsForScalarArithmetic(vectorA)) {
			return this.applyArithmeticActionWithScalar('scale', vectorA, scalar);
		}
	}

	divide(vectorA: number[], scalar: number): number[] | void {
		if (this.validateVectorsForScalarArithmetic(vectorA)) {
			return this.applyArithmeticActionWithScalar('divide', vectorA, scalar);
		}
	}

	private applyArithmeticAction(action: string, vectorA: number[], vectorB: number[]): number[] {
		let result: number[] = [];
		vectorA.forEach((member, index) => action === 'add' ? result.push(member + vectorB[index]) : result.push(member - vectorB[index]));
		return result;
	}

	private applyArithmeticActionWithScalar(action: string, vectorA: number[], scalar: number): number[] {
		let result: number[] = [];
		vectorA.forEach(member => action === 'scale' ? result.push(member * scalar) : result.push(member / scalar));
		return result;
	}

	private validateVectorsForArithmetic(vectorA: number[], vectorB: number[]): void | boolean {
		this.isVectorEmptyError(vectorA);
		this.isVectorEmptyError(vectorB);
		this.isVectorLengthEqualError(vectorA, vectorB);
		return true;
	}

	private validateVectorsForScalarArithmetic(vectorA: number[]): void | boolean {
		this.isVectorEmptyError(vectorA);
		return true;
	}

	private isVectorEmptyError(vector: number[]): void {
		if(this.isVectorEmpty(vector)) {
			throw new Error('can\'t do arithmetic actions on empty vectors');
		}
	}

	private isVectorLengthEqualError(vectorA: number[], vectorB: number[]): void {
		if (!this.isVectorLengthEqual(vectorA, vectorB)) {
			throw new Error('vectors must be of same length to do arithmetic actions');
		}
	}

	private isVectorEmpty(vector: number[]): boolean {
		return vector.length === 0;
	}

	private isVectorLengthEqual(vectorA: number[], vectorB: number[]): boolean {
		return vectorA.length === vectorB.length;
	}
}