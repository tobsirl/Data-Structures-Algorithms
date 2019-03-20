// Multiple pointers patterns
// Time Complexity - O(N^2)
// Space Complexity - O(1)

// Write a function called sumZero which accepts a sorted array of intergers
// The function should find the first pair where the sum is 0. Return an array
// that includes both values that sum to zero or undefined if a pair does not exist

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);

// Time Complexity - O(N)
// Space Complexity - O(1)

function _sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left]], arr[right];
    }
    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
