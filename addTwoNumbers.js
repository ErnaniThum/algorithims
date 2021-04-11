// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

const sumNumbers = (l1, l2) => {
	const result = [];

	const maxLength = l1.length > l2.length ? l1.length: l2.length;
	let remaining = 0;
	for (let index = 0 ; index < maxLength ; index++ ) {
		const val1 = l1[index] || 0;
		const val2 = l2[index] || 0;

		const total = val1 + val2 + remaining;
		const rest = total % 10;
		remaining = total >= 10 ? 1 : 0;

		result.push(rest);
	}
	if (remaining) {
		result.push(remaining);
	}

	return result;
}

console.log(sumNumbers([2,4,3], [5,6,7])) // [7,0,1,1]
console.log(sumNumbers([2,4,3], [5,6,4])) // [7,0,8]
console.log(sumNumbers([9,9,9,9,9,9,9], [9,9,9,9])) // [8,9,9,9,0,0,0,1]
console.log(sumNumbers([0], [0])); // [0]
