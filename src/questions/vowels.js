// Using the includes method
function vowels(str) {
  let counter = 0;
  const checker = ['a', 'e', 'i', 'o', 'u'];

  for (const char of str.toLowerCase()) {
    if (checker.includes(char)) {
      counter++;
    }
  }

  return counter;
}

// Using Regex
function _vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
module.exports = _vowels;
