import "type-dungeon";

/**
 *
 * @typeQuestion
 *
 * Complete the function type to match the following expected type condition.
 *
 * @difficulty medium
 *
 * @replaceTo
 * ```
 * declare function curry(fn: Function): any;
 * ```
 *
 */
declare function curry<T extends Function>(fn: T):
  T extends (a: infer A, ...rest: infer B) => infer R ? (a: A) => (...args: B) => R : never;

// Expected

const add = (a: number, b: number) => a + b;
const bound = curry(add)(1);
bound(); // should throw error
bound(100, 100); // should throw error

const value: number = bound(100); // should NOT throw error
