// Using reverse method
module.exports = function reverse(string) {
  return string
    .split('')
    .reverse()
    .join('');
};

// iterative approach
module.exports = function _reverse(string) {
  let result = '';
  for (const char of string) {
    result = char + result;
  }
  return result;
};

// using the reduce method
module.exports = function __reverse(string) {
  string.split('').reduce((result, char) => char + result);
};
