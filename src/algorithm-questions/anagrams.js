const charCount = string => {
  const table = {};

  for (const char of string.replace(/\W/g, '').toLowerCase()) {
    table[char] = table[char] + 1 || 1;
  }

  return table;
};

const anagrams = (stringA, stringB) => {
  const charCountA = charCount(stringA);
  const charCountB = charCount(stringB);

  if (Object.keys(charCountA).length !== Object.keys(charCountB).length) {
    return false;
  }

  for (const char in charCountA) {
    if (charCountA[char] !== charCountB[char]) return false;
  }

  return true;
};

function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (const char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
    return true;
  }
}

function buildCharMap(str) {
  const charMap = {};

  for (const char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join();
}
