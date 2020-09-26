import "type-dungeon";

/**
 *
 * @typeQuestion
 * Edit the right hand side to match the following expected type conditions.
 *
 * @difficulty medium
 *
 * @replaceTo
 * ```
 * type Awaited<T> = unknown;
 * ```
 */
type Awaited<T> = (T extends PromiseLike<infer X>
  ? { 0: Awaited<X> }
  : { 0: T })[0];

type P1 = Promise<string>;
type P2 = Promise<Promise<string>>;

// expected
type S1 = Awaited<P1>; // should be string;
type S2 = Awaited<P2>; // shuuld be string too;
