const matrix =  [[1, 1, 0, 0, 0],
                 [0, 1, 0, 0, 1],
                 [1, 0, 0, 1, 1],
                 [0, 0, 0, 0, 0],
                 [1, 0, 1, 0, 1]]

function getVisitLandNeighbors(matrix, x, y, visited) {
	const rows =    [1, 1, 0, -1,  1,  0, -1, -1];
	const columns = [1, 0, 1,  1, -1, -1,  0, -1];
	for (const row of rows) {
		for (const column of columns) {
			const neighborRow = x + row;
			const neighborColumn = y + column;

			if (!visited[`${neighborRow}${neighborColumn}`] && matrix[neighborRow] && matrix[neighborRow][neighborColumn] === 1) {
				visited[`${neighborRow}${neighborColumn}`] = true;
				getVisitLandNeighbors(matrix, neighborRow, neighborColumn, visited);
			}
		}
	}
};

function numberOfIslands (matrix) {
	const visited = {};
	let count = 0;
	for (let row = 0 ; row < matrix.length ; row++) {
		for (let column = 0 ; column < matrix[row].length ; column++) {
			if (matrix[row][column] === 1 && !visited[`${row}${column}`]) {
				count++;
				visited[`${row}${column}`] = true;
				getVisitLandNeighbors(matrix, row, column, visited)
			}
		}
	}
	return count;
};

console.log(numberOfIslands(matrix));
