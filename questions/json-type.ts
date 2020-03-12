import "type-dungeon";

/**
 * @remove
 */
type Primitive = null | boolean | string | number;

/**
 *
 * @typeQuestion
 * Complete the `JSONLike` type. It represents type of values `JSON.parse()` returns.
 *
 * @difficulty easy
 *
 * @replaceTo
 *
 * ```
 * type JSONLike = unknown
 * ```
 */
type JSONLike = {
  [key: string]: JSONLike,
} | JSONLike[] | Primitive;

const v1: JSONLike = {};
const v2: JSONLike = [];
const v3: JSONLike = null;
const v4: JSONLike = {
  flag: false,
  name: "name",
  num: 100,
  arr: [{ hoge: "hoge" }],
  optionParam: null,
};

// The following RHSs can not be serialized to JSON
const v5: JSONLike = () => 1; // should be error
const v6: JSONLike = { fn: () => 1 }; // should be error
