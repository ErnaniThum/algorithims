const matrix =  [[1, 1, 0, 0, 0],
                 [0, 1, 0, 0, 1],
                 [1, 0, 0, 1, 1],
                 [0, 0, 0, 0, 0],
                 [1, 0, 1, 0, 1]]


function isSafe(coordinates, matrix) {
	const [row, column] = coordinates;
	if (row < 0 || 
		  row >= matrix[0].length ||
			column < 0 ||
			column >= matrix[0][0].length 
	) {
		return false;
	}
	else return true;
}

function getNeighborLandsCoordinates(coordinate, matrix){
		const landPositions = []
		const [n, m] = coordinate;
		const rows =    [1,-1, 1,-1, 1, 0,-1, 0];
		const columns = [1,-1,-1, 1, 0, 1, 0,-1]
		for (const row of rows) {
			for(const column of columns) {
				const rowPos = n + row;
				const columnPos = m + column;
				if (isSafe([rowPos, columnPos], matrix)) {
					if (matrix[rowPos][columnPos] === 1) {
						landPositions.push([rowPos, columnPos]);
					}
				}
			}
		}
		return landPositions;
};

function DFS (coordinate, matrix, visited) {
	const neighborLandsCoordinates = getNeighborLandsCoordinates(coordinate, matrix);
	for (neighborLandsCoordinate of neighborLandsCoordinates) {
		const [row, column] = neighborLandsCoordinate;
		if (!visited[`${row}${column}`]) {
			visited[`${row}${column}`] = true;
			DFS(neighborLandsCoordinate, matrix, visited);
		}
	}
};

function numberOfIslands (matrix) {
	const visited = {}
	let count = 0;
	for (const row in matrix) {
		for (const column in matrix[+row] ) {
			if (!visited[`${row}${column}`] && matrix[+row][+column] === 1) {
				visited[`${row}${column}`] = true;
				count++;
				DFS([+row, +column], matrix, visited);
			};
		}
	}
	return count;
};

console.log(numberOfIslands(matrix));
