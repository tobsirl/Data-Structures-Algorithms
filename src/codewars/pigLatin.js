// Simple Pig Latin
function pigIt(str) {
  // Code here
  const arr = str.split(' ');
  const newArr = [];

  for (const letter in arr) {
    // use substr, could also use slice() or regex replace
    const result = arr[letter].substr(1) + arr[letter].substr(0, 1);
    newArr.push(result);
  }

  for (const word in newArr) {
    if (newArr[word] === '!' || newArr[word] === '?') {
      newArr[word] += '';
    } else {
      newArr[word] += 'ay';
    }
  }

  return newArr.join(' ');
}
