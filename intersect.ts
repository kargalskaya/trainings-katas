const a = [1, 10, 10, 2, 6, 9, -32];
const b = [-7, 1, 9, 8, 0, 1, 10];

/**
 * Intersect
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
function intersectSimple(a: number[], b: number[]): number[] {
  const result: number[] = [];

  b.forEach((elem: number, i: number) => {
    if (a.find((el: number) => el === elem)) {
      result.push(elem);
    }
  });
  return result;
}

function intersectHashMap(a: number[], b: number[]): number[] {
  const result: number[] = [];
  const map = new Map();

  a.forEach((elem: number, i: number) => {
    map.set(elem, 1);
  });

  b.forEach((elem: number, i: number) => {
    if (map.get(elem)) {
      result.push(elem);
    }
  });
  return result;
}

console.clear();
console.log("intersectSimple", intersectSimple(a, b)); // [1, 9, 1, 10]
console.log("intersectHashMap", intersectHashMap(a, b)); // [1, 9, 1, 10]

