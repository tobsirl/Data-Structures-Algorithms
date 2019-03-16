export function getSecondLargest(nums) {
  // Complete the function
  let highest = nums[0];
  let secondHighest = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > highest) {
      secondHighest = highest;
      highest = nums[i];
    }

    if (nums[i] > secondHighest && nums[i] < highest) {
      secondHighest = nums[i];
    }
  }
  return secondHighest;
}
