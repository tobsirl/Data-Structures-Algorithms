//* Binary Search Pseudocode
// 	• This function accepts a sorted array and a value
// 	• Create a left pointer at the start of the array, and a right pointer at the end of the array.
// 	• While the left pointer comes before the right pointer:
// 		○ Create a pointer in the middle
// 		○ If you find the value you want, return the index
// 		○ If the value is too small, move the left pointer up
// 		○ If the value is too large, move the right pointer down
// 	• If you never find the value, return -1

function binarySearch(arr, val) {
  let left = arr[0];
  let right = arr[arr.length - 1];

  while (left < right) {
    const mid = Math.floor(arr.length / 2);

    if (mid === val) return val;
    if (val < mid) right = mid + 1;
    if (val > mid) left = mid - 1;
  }
  return -1;
}

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (arr[mid] !== val && start <= end) {
    if (val < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  if (arr[mid] === val) {
    return mid;
  }
  return -1;
}
