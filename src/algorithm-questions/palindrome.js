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
