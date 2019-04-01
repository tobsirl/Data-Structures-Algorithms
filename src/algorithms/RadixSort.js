// returns the digit in num at the given place value
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// returns the number of digits in num
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// given an array of numbers, returns the number of digits
// in the largest number in the list
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// ! Radix Sort Pseudocode
// 	• Define a function that accepts a list of numbers
// 	• Figure out how many digits the largest number has
// 	• Loop from k = 0 up to this largest number of digits
// 	• For each iteration of the loop:
// 		○ Create buckets for each digit (0 to 9)
// 		○ Place each number in the corresponding bucket based on its kth digit
// 	• Replace our existing array with values in our buckets, starting with 0 and going up to 9
// 	• Return list at the end!

function radixSort(nums) {
  const maxDigitCount = mostDigits(nums); // find the number with the most digits
  for (let k = 0; k < maxDigitCount; k++) {
    const digitBuckets = Array.from({ length: 10 }, () => []); // create the buckets
    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k); // get the digit
      digitBuckets[digit].push(nums[i]); // put the number into the bucket
    }
    nums = [].concat(...digitBuckets); // place the numbers into a new array
  }
  return nums;
}
