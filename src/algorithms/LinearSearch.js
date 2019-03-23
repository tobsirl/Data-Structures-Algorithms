// Linear Search Pseudocode
//  This function accepts an array and a value
//  Loop through the array and check if the current array element is equal to the value
//  If it is, return the index at which the element is found
//  If the value is never found, return -1
//

function linearSearch(arr, val) {
  // eslint-disable-next-line no-restricted-syntax
  for (const item of arr) {
    if (item === val) {
      return arr.indexOf(val);
    }
  }
  return -1;
}
