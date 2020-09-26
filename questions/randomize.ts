import "type-dungeon";

/**
 * @remove
 */
type Union<V, U extends any[]> = {
  0: V;
  1: ((...v: U) => any) extends (head: infer Head, ...tail: infer Tail) => any
    ? Union<V | Head, Tail>
    : never;
}[U["length"] extends 0 ? 0 : 1];

/**
 *
 * @typeQuestion
 * Complete the `Random` type.
 *
 * @difficulty hard
 *
 * @replaceTo
 *
 * ```
 * type Random = unknown
 * ```
 *
 **/
type Random = <T, U extends any[]>(first: T, ...remnant: U) => Union<T, U>;

declare const random: Random;

const a = { value: 1 } as const;
const b = { value: 2 } as const;
const c = { value: 3 } as const;

// Expected:
// The `random` return type should be assignable this type annotation.

const valueAB = random(a, b);
const valueABC = random(a, b, c);

const x: { readonly value: 1 } | { readonly value: 2 } = valueAB;
const y:
  | { readonly value: 1 }
  | { readonly value: 2 }
  | { readonly value: 3 } = valueABC;
