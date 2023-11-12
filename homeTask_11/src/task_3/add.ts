/**
 * 2 arguments passed: returns sum of a and b.
 *
 * 1 argument passed: returns a function which expects
 * b and returns sum of a and b.
 *
 * 0 arguments passed: returns itself.
//  *
//  * @param {Number} a
//  * @param {Number} b
//  * @return {Number | Function}
//  */

export function add(a: number, b: number): number;
export function add(a: number): (b: number) => number;
export function add(): typeof add;

export function add(a?: number, b?: number) {
  if (arguments.length === 0) {
    return add;
  }
  if (arguments.length === 1) {
    return function subFunction(subB: number) {
      if (arguments.length === 0) {
        return subFunction;
      }
      return a! + subB;
    };
  }
  return a! + b!;
}
