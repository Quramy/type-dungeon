import "type-dungeon";

/**
 *
 * @typeQuestion
 *
 * Replace the RHS of the following `RequiredKeys` type to match the expected section.
 *
 * @difficulty medium
 *
 * @replaceTo
 * ```
 * type RequiredKeys<T> = keyof T;
 * ```
 *
 */
type RequiredKeys<T> = {
  [P in keyof T]-?: {} extends Pick<T, P> ? never : P;
}[keyof T];

// Expected

type User = {
  id: number;
  lastName: string;
  firstName: string;
  middleName?: string;
};

const validKeys: RequiredKeys<User>[] = ["id", "lastName", "firstName"];

// @ts-expect-error 'middleName' is an optional key in User type
const invalidKeys: RequiredKeys<User>[] = ["middleName"];
