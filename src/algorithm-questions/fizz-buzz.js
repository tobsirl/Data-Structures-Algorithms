export function fizzbuzz(num) {
  const output = [];

  for (let i = 1; i < num; i++) {
    if (i % 6 === 0) output.push('Fizz Buzz');
    else if (i % 2 === 0) output.push('Fizz');
    else if (i % 3 === 0) output.push('Buzz');
    else output.push(i);
  }
  return output;
}

export function _fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}
