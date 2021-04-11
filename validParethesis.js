// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true	

const examples = {
	'()': true,
	'{()': false,
	'{{(()())}}' : true,
	'{[]}': true,
	'([)]': false,
};

const bracketsHash = {
	')': '(',
	']': '[',
	'}': '{'
}

const evaluateBrackets = string => {
	const stack = [];
	const stringArray = string.split('');
	for (const char of stringArray) {
		if (char === '(' || char === '[' || char === '{') {
			stack.push(char);
		} else {
			const leftBracket = stack.pop();
			const rightBracket = bracketsHash[char];
			if (leftBracket !== rightBracket) {
				return false;
			}
		}
	}
	return stack.length ? false : true;
}

const keys = Object.keys(examples);

for (const key of keys) {
	console.log(evaluateBrackets(key));
}






