/**
 * 2 arguments passed: returns a new array
 * which is a result of input being mapped using
 * the specified mapper.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being mapped using original mapper.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} mapper
 * @param {Array} input
 * @return {Array | Function}
 */
export function map<T>(mapper: (x: T) => T, input: T[]): T[];
export function map<T>(mapper: (x: T) => T): (subInput: T[]) => T[];
export function map(): typeof map;

export function map<T>(mapper?: (x: T) => T, input?: T[]) {
  if (arguments.length === 0) {
    return map;
  }
  if (arguments.length === 1) {
    return function subFunction(subInput: T[]) {
      if (arguments.length === 0) {
        return subFunction;
      }
      return subInput.map(mapper!);
    };
  }
  return input!.map(mapper!);
}
