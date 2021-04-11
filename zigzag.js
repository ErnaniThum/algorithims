const matrix = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16],
	[17, 18 , 19, 20]
]

// diag1 [0,0]
// diag2 [1,0], [0,1]
// diag3 [2,0], [1,1], [0,2]
// diag4 [3,0], [2,1], [1,2], [0,3]
// diag5 [4,0], [4,1], [4,2], [4,3]

const getDiagonals = matrix => {
	let keepIterating = true
	let iteration = 0;
	while(keepIterating) {
		keepIterating = false;
		const diagonal = [];
		let column = 0
		let row = iteration;
		while (row >= 0 ) {
			if(matrix[row] && matrix[row][column]) {
				keepIterating = true;
				diagonal.push(matrix[row][column]);
			}
			column++;
			row--;
		}
		iteration++;
		console.log(`${diagonal.join(' ')}\n`);
	}
}

getDiagonals(matrix)
