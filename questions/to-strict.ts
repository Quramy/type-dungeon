import "type-dungeon";

/**
 *
 * @typeQuestion
 * Edit the right hand side to match the following expected type conditions.
 *
 * @replaceTo
 *
 * ```
 * type Strict<T> = unknown;
 * ```
 *
 * @difficulty easy
 *
 *
 */
type Strict<T> = { [P in keyof T]-?: T[P] };

// Expected

type SomeObjectType = {
  name?: string;
  age?: number;
};

declare const strictObj: Strict<SomeObjectType>;

const userName: string = strictObj.name; // typeof name should not be undefined / null
const age: number = strictObj.age; // typeof age should not be undefined / null
