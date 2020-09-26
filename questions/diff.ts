import "type-dungeon";

/**
 * @typeQuestion
 *
 * Complete `$Diff` type to match the following condition.
 * FYI, Flow type has the same name utility type.
 *
 * @difficulty medium
 *
 * @replaceTo
 *
 * ```
 * type $Diff<A, B> = any;
 * ```
 */
type $Diff<A, B> = { [P in Extract<keyof A, keyof B>]+?: A[P] } &
  { [P in Exclude<keyof A, keyof B>]-?: A[P] };

type Props = {
  id: number;
  title: string;
  tags: string[];
};

const defaultProps = {
  tags: [],
};

type RequiredProps = $Diff<Props, typeof defaultProps>;

const props1: RequiredProps = {
  id: 100,
  title: "my post",
};

const props2: RequiredProps = {
  id: 100,
  title: "my post",
  tags: ["ts"],
};

// @ts-expect-error
const props3: RequiredProps = {
  id: 100,
  tags: [],
};

// @ts-expect-error
const props4: RequiredProps = {
  title: "my post",
};
