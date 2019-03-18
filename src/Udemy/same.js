/*
Write a function called same, which accepts two arrays.
The function should return true if every value in the array
has it's corresponding value squared in the second array.
The frequency of values must be the same

Examples
same([1, 2, 3], [4, 1, 9]) true
same([1, 2, 3], [1, 9]) false
same([1, 2, 1], [4, 4, 1]) false (must be same frequency)
*/

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    const correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}
