// Using reverse method
export function reverse(string) {
  return string
    .split('')
    .reverse()
    .join('');
}

export function _reverse(string) {
  let result = '';
  for (const char of string) {
    result = char + result;
  }
  return result;
}
