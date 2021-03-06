// Using reverse method
export function reverse(string) {
  return string
    .split('')
    .reverse()
    .join('');
}

// iterative approach
export function _reverse(string) {
  let result = '';
  for (const char of string) {
    result = char + result;
  }
  return result;
}

// using the reduce method
export function __reverse(string) {
  string.split('').reduce((result, char) => char + result);
}

// module.exports.reverse = reverse;
// module.exports._reverse = _reverse;
// module.exports.__reverse = __reverse;
