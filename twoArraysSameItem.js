function hashArray (array) {
	const hashmap = {};
	for (el of array) {
		hashmap[el] = true;
	}
	return hashmap;
}

function findCommonElements (array1, array2) {
	const hashedArray1 = hashArray(array1);
	for (el of array2) {
		if (hashedArray1[el]) {
			return true;
		}
	}
	return false;
}

// test

const tests = {
	test1: [[1,2,3,4],['a','b','c']],
	test2: [[1,2,3,4,5,6,7],['a','b','c',3]],
}

const keys = Object.keys(tests) 
for (key of keys) {
	const [array1, array2] = tests[key]
	console.log(findCommonElements(array1,array2));
}