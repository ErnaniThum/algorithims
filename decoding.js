// 3a2b2a

function decode (string) {
	let result = '';
	const stringArray = string.split('');

	while(stringArray.length) {
		const numElem = +stringArray.shift();
		const elem = stringArray.shift();
		result += ''.padStart(numElem, elem);
	}

	return result; 
}

const results = {
	'3a2b2a': 'aaabbaa',
	'1a': 'a',
	'1a1b1c1a1b1c': 'abcabc',
	'2b': 'bb'
}

const resultKeys = Object.keys(results);

for (const key of resultKeys) {
	const result = decode(key)
	if (result === results[key]) {
		console.log(`Decode ${key} - Passed`);
	} else {
		console.log(`Decode ${key} - Failed. ${result}`)
	}

}
