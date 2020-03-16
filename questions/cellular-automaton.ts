import "type-dungeon";

/**
 * @typeQuestion
 *
 * Complete the following type `CellularAutomaton<N>` using this `Rule` type.
 * The `Rule` type represents a rule of one-dimensional cellular automan, a.k.a. Wolfram code "110".
 * Read https://en.wikipedia.org/wiki/Rule_110 if you want more detail.
 *
 * `CellularAutomaton<N>` should give N-th generation state when starting `[1]`.
 * For example, `CellularAutomaton<1>` provides `[1,1,0]` because `[,,1]` generate `1` and [,1,] does `1` and `[1,,]` does `0`.
 *
 * @difficulty hard
 *
 */
type B = 1 | 0;
// prettier-ignore
type Rule110<T extends [B, B, B]> =
  T extends [1, 1, 1] ? 0 :
  T extends [1, 1, 0] ? 1 :
  T extends [1, 0, 1] ? 1 :
  T extends [1, 0, 0] ? 0 :
  T extends [0, 1, 1] ? 1 :
  T extends [0, 1, 0] ? 1 :
  T extends [0, 0, 1] ? 1 :
  T extends [0, 0, 0] ? 0 :
  never;

type Rule<T extends [B, B, B]> = Rule110<T>;

/**
 * @remove
 */
type SLL = {
  val: B;
  link?: SLL;
};

/**
 * @remove
 */
type Unwrap<T extends SLL> = T extends { link: infer R } ? R : { val: 0 };

/**
 * @remove
 */
type Triple<M extends B, T extends SLL> = [M, T["val"], Unwrap<T>["val"]];

/**
 * @remove
 */
type Middle<M extends B, T extends SLL> = T extends { link: SLL } ? {
  val: Rule<Triple<M, T>>;
  link: Middle<T["val"], Unwrap<T>>;
} : {
  val: Rule<Triple<M, T>>;
  link: {
    val: Rule<[T["val"], 0, 0]>;
  };
};

/**
 * @remove
 */
type NextStep<T extends SLL> = {
  val: Rule<[0, 0, T["val"]]>;
  link: Middle<0, T>;
};

/**
 * @remove
 */
type Args<F> = F extends (...args: infer U) => any ? U : never;
/**
 * @remove
 */
type Unshift<T, U extends any[]> = Args<((...args: U) => any) extends (...args: infer S) => any ? (first: T, ...rest: S) => any : never>;

/**
 * @remove
 */
type ToTuple<T extends SLL> = {
  0: [T["val"]],
  1: Unshift<T["val"], ToTuple<Unwrap<T>>>,
}[T extends { link: SLL } ? 1 : 0];

/**
 * @replaceTo
 * ```
 * type CellularAutomaton<N extends number> = unknown;
 * ```
 */
type CellularAutomaton<N extends number, U extends any[] = [], X extends SLL = { val: 1 }> = {
  0: ToTuple<X>;
  1: CellularAutomaton<N, Unshift<1, U>, NextStep<X>>;
}[U["length"] extends N ? 0 : 1];

type S0 = CellularAutomaton<0>; // Should be         [1]
type S1 = CellularAutomaton<1>; // Should be       [1,1,0]
type S2 = CellularAutomaton<2>; // Should be     [1,1,1,0,0]
type S3 = CellularAutomaton<3>; // Should be   [1,1,0,1,0,0,0]
type S4 = CellularAutomaton<4>; // Should be [1,1,1,1,1,0,0,0,0]
