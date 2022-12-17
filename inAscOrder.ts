const arr1: number[] = [1, 10, 2, 6, 9, -32];
const arr2: number[] = [1, 2, 3, 4, 10, 11, 20];

/**
 * Are the numbers in order?
 * @param {number[]} input The input data
 * @returns {boolean} Returns status
 */
function inAscOrder(input: number[]): boolean {
  let result = true;
  for (let i = 1; i < input.length; i++) {
    if (input[i] <= input[i - 1]) {
      result = false;
      break;
    }
  }
  return result;
}
console.log(inAscOrder(arr1)); // false
console.log(inAscOrder(arr2)); // true
