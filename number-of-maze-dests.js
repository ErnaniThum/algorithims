const matrix = [
	[0,0,0,0],
	[0,-1,0,0],
	[-1,0,0,0],
	[0,0,0,0]
];

const isFinal = (matrix, row, column) => {
	if (matrix.length -1 === row && matrix[0].length -1 === column) return true;
	return false;
}

const evaluatePath = (matrix, row, column) => {
	let count = 0;
	if (isFinal(matrix, row, column)) {
		return 1;
	}
	if(matrix[row+1] && matrix[row+1][column] === 0) {
		count += evaluatePath(matrix, row+1, column);
	} 
	if (matrix[row][column+1] === 0) {
		count += evaluatePath(matrix, row, column+1);
	} 
	return count;
}

function countMazePaths (matrix) {
	evaluatePath(matrix, 0, 0, 0);
	console.log(evaluatePath(matrix, 0, 0))
}

console.log(countMazePaths(matrix));