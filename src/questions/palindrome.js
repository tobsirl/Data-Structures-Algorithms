// using reduce
export function isPalindrome(string) {
  const validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const stringCharacters = string
    .toLowerCase()
    .split('')
    .reduce(
      (characters, character) => (validCharacters.indexOf(character) > -1
          ? characters.concat(character)
          : characters),
      []
    );
  return stringCharacters.join('') === stringCharacters.reverse().join('');
}

// using every
export function _isPalindrome(string) {
  string
    .split('')
    .every(
      (character, index) => character === string[string.length - 1 - index]
    );
}

// using Regex
export function __isPalindrome(string) {
  const cleaned = string.replace(/\W/g, '').toLowerCase();

  return (
    cleaned
    === cleaned
      .split('')
      .reverse()
      .join('')
  );
}

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}
