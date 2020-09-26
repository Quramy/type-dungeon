import "type-dungeon";

/**
 *
 * @typeQuestion
 * Complete the following `toUnion` type to match the following excepcted condition.
 *
 * @difficulty easy
 *
 * @replaceTo
 *
 * ```
 * type toUnion<T extends ArrayLike<any>> = unknown;
 * ```
 *
 */
type toUnion<T extends ArrayLike<any>> = T[number];

// Expected

const keys = ["age", "firstName", "lastName"] as const;

type Keys = toUnion<typeof keys>; // should be "age" | "firstName" | "lastName"
