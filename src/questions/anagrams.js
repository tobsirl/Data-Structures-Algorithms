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

// ------------------------------------------------------------------------
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

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    const letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    const letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    }
    lookup[letter] -= 1;
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm');

// LeetCode Anagram example
const isAnagram = function (s, t) {
  const charMap = {};
  s.split('').map(
    char => (charMap[char] = charMap[char] ? charMap[char] + 1 : 1)
  );
  t.split('').map(
    char => (charMap[char] = charMap[char] ? charMap[char] - 1 : -1)
  );
  return Object.keys(charMap).every(k => charMap[k] === 0);
};

const s = 'anagram';
const t = 'nagaram';

console.log(isAnagram(s, t));
