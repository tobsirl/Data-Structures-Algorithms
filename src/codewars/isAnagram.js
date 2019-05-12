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
