// Merge two sorted linked lists and return it as a sorted list. 
// The list should be made by splicing together the nodes of the first two lists.

// Example 1:
// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: l1 = [], l2 = []
// Output: []
// Example 3:

// Example 3:
// Input: l1 = [], l2 = [0]
// Output: [0]

const mergeLinkedLists = (listA, listB) => {
	const mergedList = [];
	let currentElementListA = null;
	let currentElementListB = null
	while (listA.length || listB.length) {
		if (!currentElementListA) {
			currentElementListA = listA.shift();
		}
		if (!currentElementListB) {
			currentElementListB = listB.shift();
		}

		if (currentElementListA && !currentElementListB) {
			mergedList.push(currentElementListA);
			currentElementListA = null;
		} else {
			if (currentElementListB && !currentElementListA) {
				mergedList.push(currentElementListB);
				currentElementListB = null;
			} else {
				if (currentElementListB < currentElementListA) {
					mergedList.push(currentElementListB);
					currentElementListB = null;
				} else {
					mergedList.push(currentElementListA);
					currentElementListA = null;
				}
			}
		}
	}
	return mergedList;
}

console.log(mergeLinkedLists([1,2,4,5,6],[1,3,4,6,9]))