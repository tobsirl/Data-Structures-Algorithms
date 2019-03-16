// using a for loop
export function factorial(num) {
  // If num = 0 OR num = 1, the factorial will return 1
  if (num === 0 || num === 1) return 1;

  // We start the FOR loop with i = 4
  // We decrement i after each iteration
  for (let i = num - 1; i >= 1; i--) {
    // We store the value of num at each iteration
    num *= i; // or num *= i;
    /*
                    num      var i = num - 1       num *= i         i--       i >= 1?
    1st iteration:   5           4 = 5 - 1         20 = 5 * 4        3          yes
    2nd iteration:  20           3 = 4 - 1         60 = 20 * 3       2          yes
    3rd iteration:  60           2 = 3 - 1        120 = 60 * 2       1          yes
    4th iteration: 120           1 = 2 - 1        120 = 120 * 1      0          no
    5th iteration: 120               0                120
    End of the FOR loop
    */
  }
  return num; // 120
}

// using a while loop
export function _factorial(num) {
  // Step 1. Create a variable result to store num
  let result = num;

  // If num = 0 OR num = 1, the factorial will return 1
  if (num === 0 || num === 1) return 1;

  // Step 2. Create the WHILE loop
  while (num > 1) {
    num--; // decrementation by 1 at each iteration
    result *= num; // or result *= num;
    /*
                    num           num--      var result      result *= num
    1st iteration:   5             4            5             20 = 5 * 4
    2nd iteration:   4             3           20             60 = 20 * 3
    3rd iteration:   3             2           60            120 = 60 * 2
    4th iteration:   2             1          120            120 = 120 * 1
    5th iteration:   1             0          120
    End of the WHILE loop
    */
  }

  // Step 3. Return the factorial of the provided integer
  return result; // 120
}

// using recursion
export function __factorial(num) {
  if (num < 0) return -1;
  if (num === 0) return 1;

  return num * __factorial(num - 1);
}
