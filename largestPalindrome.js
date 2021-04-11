// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
// Example 3:

// Input: s = "a"
// Output: "a"
// Example 4:

// Input: s = "ac"
// Output: "a"

// 5 "babab" 1
// 4 "baba" "abab" 2
// 3 "bab", "aba", "bab" 3
// 2 "ba", "ab", "ba", "ab"  4 
// 1 - 5 (optimze to 1)

const longestPalindromeByCenter = (s, left, right) => {
	let _left = 0;
	let _right = 0;
	while(s[left] && s[right]) {
		if (s[left] === s[right]) {
			_left = left;
			_right = right;
			left--;
			right++;
		} else {
			return [_left, _right];
		}
	}
	return [_left, _right]
}

const longestPalindrome = s => {
	let biggestPalindrome = [0,0];
	let biggestPalindromeLength = 1;

	for (let index = 0; index < s.length; index++) {
		const [left1, right1] = longestPalindromeByCenter(s, index, index);
		const palindrome1Length = 1 + right1 - left1;
		if (biggestPalindromeLength < palindrome1Length) {
			biggestPalindrome = [left1, right1];
			biggestPalindromeLength = palindrome1Length;
		} 

		const [left2, right2] = longestPalindromeByCenter(s, index, index+1);
		const palindrome2Length = 1 + right2 - left2;
		if (biggestPalindromeLength < palindrome2Length) {
			biggestPalindrome = [left2, right2];
			biggestPalindromeLength = palindrome2Length;
		} 
	}
	return s.slice(biggestPalindrome[0], biggestPalindrome[1]+1);
}


console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("ac"));
console.log(longestPalindrome("abab"));







