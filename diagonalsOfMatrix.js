const matrix = [
	[1, 2, 3, 4],
	[4, 3, 2, 1],
	[7, 8, 9, 6],
	[6, 5, 4, 3]
]
// [0, 0], [1,1], [2,2], [3,3]
// [0, 3], [1,2], [2,1], [3,0]

const getPrimaryDiagonal = matrix => {
	const array = []
	const matrixSize = matrix.length;
	for (let i = 0 ; i < matrixSize ; i++){
		array.push(matrix[i][i]);
	}
	return array;
}

const getSecondaryDiagonal = matrix => {
	const array = [];
	const matrixSize = matrix.length;
	for (let i = 0; i < matrixSize;  i++) {
		const j = matrixSize - i - 1;
		array.push(matrix[i][j]);
	}
	return array;
}

const primaryDiagonal = getPrimaryDiagonal(matrix);
console.log(`Primary Diagonal: ${primaryDiagonal.join(', ')}`);
const secondaryDiagonal = getSecondaryDiagonal(matrix);
console.log(`Secondary Diagonal: ${secondaryDiagonal.join(', ')}` );