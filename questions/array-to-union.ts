import "type-dungeon";

/**
 *
 * @typeQuestion
 * Complete `$Diff` type to match the following condition.
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
