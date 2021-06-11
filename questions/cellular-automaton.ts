import "type-dungeon";

/**
 * @typeQuestion
 *
 * Complete the following type `CellularAutomaton<N>` using this `Rule` type.
 * The `Rule` type represents a rule of one-dimensional cellular automan, a.k.a. Wolfram code "110".
 * Read https://en.wikipedia.org/wiki/Rule_110 if you want more detail.
 *
 * `CellularAutomaton<N>` should give the N-th generation state when starting `[1]`.
 * For example, `CellularAutomaton<1>` provides `[1,1,0]` because `[0,0,1]` generates `1`, [0,1,0] does `1`, and `[1,0,0]` does `0`.
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
type Cell = {
  val: B;
  right?: Cell;
};

/**
 * @remove
 */
type Right<T extends Cell> = T extends { right: infer R } ? R : { val: 0 };

/**
 * @remove
 */
type TailCell<LeftVal extends B, T extends Cell> = {
  val: Rule<[LeftVal, T["val"], Right<T>["val"]]>;
  right: {
    val: Rule<[T["val"], 0, 0]>;
  };
};
/**
 * @remove
 */
type MiddleCell<LeftVal extends B, T extends Cell> = T extends { right: Cell }
  ? {
      val: Rule<[LeftVal, T["val"], Right<T>["val"]]>;
      right: MiddleCell<T["val"], Right<T>>;
    }
  : TailCell<LeftVal, T>;
/**
 * @remove
 */
type HeadCell<T extends Cell> = {
  val: Rule<[0, 0, T["val"]]>;
  right: MiddleCell<0, T>;
};

/**
 * @remove
 */
type Unshift<T, U extends any[]> = Parameters<(first: T, ...rest: U) => any>;

/**
 * @remove
 */
type ToTuple<T extends Cell> = {
  0: [T["val"]];
  1: Unshift<T["val"], ToTuple<Right<T>>>;
}[T extends { right: Cell } ? 1 : 0];

/**
 * @replaceTo
 * ```
 * type CellularAutomaton<N extends number> = unknown;
 * ```
 */
type CellularAutomaton<N extends number, T extends Cell = { val: 1 }, U extends any[] = []> = {
  0: ToTuple<T>;
  1: CellularAutomaton<N, HeadCell<T>, Unshift<0, U>>;
}[U["length"] extends N ? 0 : 1];

// Expected

const s0: CellularAutomaton<0> =             [1] // prettier-ignore
const s1: CellularAutomaton<1> =           [1,1,0] // prettier-ignore
const s2: CellularAutomaton<2> =         [1,1,1,0,0] // prettier-ignore
const s3: CellularAutomaton<3> =       [1,1,0,1,0,0,0] // prettier-ignore
const s4: CellularAutomaton<4> =     [1,1,1,1,1,0,0,0,0] // prettier-ignore
const s5: CellularAutomaton<5> =   [1,1,0,0,0,1,0,0,0,0,0] // prettier-ignore
const s6: CellularAutomaton<6> = [1,1,1,0,0,1,1,0,0,0,0,0,0] // prettier-ignore
