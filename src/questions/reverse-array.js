export const reverseArray = array => {
  for (let i = 0; i < array.length / 2; i++) {
    const temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
};

export const _reverseArray = array => {
  for (let i = 0; i < array.length / 2; i++) {
    [array[i], array[array.length - 1 - i]] = [
      array[array.length - 1 - i],
      array[i]
    ];
  }
  return array;
};

// Recursive verson
function reverseRecursion(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length <= 1) {
    return arr;
  }
  return reverseRecursion(arr.slice(1)) + arr[0];
}
