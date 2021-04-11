// aaabbccc -> 3a2b3c
function encode (string) {
	let counter = 1;
	let currentElement = '';
	let result = '';

	const stringArray = string.split('');

	for (const el of stringArray) {
		if (!currentElement) {
			currentElement = el;
		} else {
			if (currentElement === el) {
				counter++;
			} else {
				result += `${counter}${currentElement}`;
				counter = 1;
				currentElement = el;
			} 
		}
	}
	result += `${counter}${currentElement}`;
	return result;
}

const results = {
	'aaabbccc' : '3a2b3c',
	'a': '1a',
	'bbba': '3b1a',
	'abcabc': '1a1b1c1a1b1c'
}

const keys = Object.keys(results);

keys.forEach(key => {
	const result = encode(key);
	if (result === results[key]) {
		console.log (`Key ${key} - Passed`);

	} else {
		console.log(`Key ${key} - Failed`);
	}
});