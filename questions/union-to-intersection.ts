import "type-dungeon";

/**
 *
 * @typeQuestion
 * Complete the following `U2I` type to match the following excepcted condition.
 * `U2I` converts from union type to intersection type.
 *
 * @difficulty middle
 *
 * @replaceTo
 *
 * ```
 * type U2I<T> = unknown;
 * ```
 *
 */
type U2I<T> = (T extends any ? (a: T) => any : never) extends (a: infer S) => any ? S : never;

type User = {
  id: string;
  name: string;
  age: number;
};

type Post = {
  id: string;
  name: string;
  body: string;
};

type UserOrPost = User | Post;

// @ts-expect-error
const x1: U2I<UserOrPost> = {
  id: "HOGE",
  name: "hoge",
  age: 20,
};

// @ts-expect-error
const x2: U2I<UserOrPost> = {
  id: "FOO",
  name: "foo",
  body: "foo body",
};

const x3: U2I<UserOrPost> = {
  id: "BAR",
  name: "bar",
  age: 20,
  body: "bar body",
};
