/**
 * 2 arguments passed: returns a new array
 * which is a result of input being filtered using
 * the specified filter function.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being filtered using original filter
 * function.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} filterer
 * @param {Array} input
 * @return {Array | Function}
 */

export function filter<T>(filterer: (x: T) => boolean, input: T[]): T[];
export function filter<T>(filterer: (x: T) => boolean): (input: T[]) => T[];
export function filter(): typeof filter;

export function filter<T>(filterer?: (x: T) => boolean, input?: T[]) {
  if (arguments.length === 0) {
    return filter;
  }
  if (arguments.length === 1) {
    return function subFunction(subInput: T[]) {
      if (arguments.length === 0) {
        return subFunction;
      }
      return subInput.filter(filterer!);
    };
  }
  return input!.filter(filterer!);
}
