// Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

const toLowerCase = function (str) {
  return str
    .split('')
    .map(c => {
      const u = c.charCodeAt(0);
      return u >= 65 && u <= 90 ? String.fromCharCode(u + 32) : c;
    })
    .join('');
};
