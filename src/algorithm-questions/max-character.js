export function maxChar(str) {
  const charMap = {}; // Object
  let max = 0;
  let maxChar = '';

  // Creates the object using of for arrays
  for (const char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  // Checks for the highest key value using in for objects
  for (const char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}
