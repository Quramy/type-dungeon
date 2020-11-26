import "type-dungeon";

/**
 * @typeQuestion
 *
 * Complete the `CamelizedObject` type operator to match the following expected condition.
 *
 * Imagine object from response of Web API implemented by language which prefer "snake-cased" variable name (e.g. Ruby).
 * But you want to convert the response objects to objects whose keys are "camel-cased" strings.
 *
 * So you need to this type operator to represents the type of the converted objects.
 *
 * @difficulty medium
 *
 * @replaceTo
 *
 * ```
 * type CamelizedObject<T> = unknown;
 * ```
 */
type CamelizedObject<T> = keyof T extends string
  ? { [P in keyof T as Snake2Camel<P>]: T[P] }
  : T;

/**
 * @remove
 */
type Snake2Pascal<T extends string> = T extends `${infer H}_${infer R}`
  ? `${Capitalize<H>}${Snake2Pascal<R>}`
  : Capitalize<T>;
/**
 * @remove
 */
type Snake2Camel<T extends string> = Uncapitalize<Snake2Pascal<T>>;

// Expected

type GeneratedResponseType = {
  id: string;
  first_name: string;
  last_name: string;
  created_at: number;
};

const responseObj: GeneratedResponseType = {
  id: "10000",
  first_name: "Yosuke",
  last_name: "Kurami",
  created_at: 1606389092229,
};

const converted: {
  id: string;
  firstName: string;
  lastName: string;
  createdAt: number;
} = convertKeysFromSnake2Camel(responseObj);

// The following function converts keys in input object to camel-cased string.
function convertKeysFromSnake2Camel<T extends Record<string, any>>(
  obj: T,
): CamelizedObject<T> {
  const keys = Object.keys(obj) as string[];
  return keys.reduce((acc, k) => {
    const camelizedKey = snake2Camel(k);
    return {
      ...acc,
      [camelizedKey]: obj[k],
    };
  }, {} as any);
}

// hoGe -> Hoge
function capitalize(input: string) {
  return input.slice(0, 1).toUpperCase() + input.slice(1).toLowerCase();
}

// hoge_foo -> HogeFoo
function snake2Pascal(input: string) {
  return input.split("_").map(capitalize).join("");
}

// hoge_foo -> hogeFoo
function snake2Camel(input: string) {
  const p = snake2Pascal(input);
  return p.slice(0, 1).toLowerCase() + p.slice(1);
}
