<!-- This is a generated file. Don't touch directly! -->

# Type Dungeon

TypeScript code exercise.

<!-- toc -->

- [Exercise](#exercise)
  - [json-type](#json-type)
  - [to-strict](#to-strict)
  - [awaited](#awaited)
  - [curry](#curry)
  - [diff](#diff)
  - [randomize](#randomize)
- [How to create new exercise](#how-to-create-new-exercise)
- [LICENSE](#license)

<!-- tocstop -->

## Exercise

### json-type

Difficulty: :space_invader:

Play this with <a href="https://typescriptlang.org/play?#code/PTAEGEHsFsAcBsCmAXRpkAs0AMBSBlAeQDkAZASwGtFt0BPWRAOlAEllQAnRWbgZ0QA7ZH3qNQkAGagAbgEN4AV0Si8RYk1hzOAgBQBKWt2SLOgvkwBQyBmgIkK1UAF5QiwZUGQA7oIDclpYAxpDmHDIAjABcoPZkVGiuAN4AvgEhYbIATDFxjomgANoAuumhfOEAzLnq+S6ggorw8GWZMgAsNQ4J9UmWoKCS8HIA5jGSCgIANP0NctCIMQDkgvOISzMDjdAxEQAMe5ug2pwxhUmgGJAji6BLVzdLoCnFR5CwyOShAAra8zGNZozNKBECgAAqWEGkGaPnIghGoAASgAJfCiIJyQQNSAcABGaAEnHICnIAC9EAATdCQWLqYLlcIAVi68ScrgMLgAfKAIn5QGC+FcmtSCaBEJxOJBOAy2gA2Vl1ZKDQQxTnOHkRZ78wXC+CitASqUyoA" target="_blank">TypeScript playground</a> !

```typescript
// Complete the `JSONLike` type. It represents type of values `JSON.parse()` returns.
type JSONLike = unknown;

const v1: JSONLike = {};
const v2: JSONLike = [];
const v3: JSONLike = null;
const v4: JSONLike = {
  flag: false,
  name: 'name',
  num: 100,
  arr: [{ hoge: 'hoge' }],
  optionParam: null,
};

// The following RHSs can not be serialized to JSON
const v5: JSONLike = () => 1; // should be error
const v6: JSONLike = { fn: () => 1 }; // should be error
```

<a href="https://typescriptlang.org/play?#code/C4TwDgpgBACgTgSwLYOAgbtAvFAdgVwBtCoAfKAIwHsrCIBDXMqAZ2EVwHNmCkKI4AbgBQw0JCgApAMoB5AHIAZBAGtswqMwDeGzXoDaakAC5W7BFwC6pmQuVqReqAF9d5W0tUR9lt7EQoaJgiwgDGVLhsUOgAjDZynmpQOFrOIuGRwNEATPF2XslQPukRUegAzHmJ2HhEhCWZ0QAsVfY1OpoAZoT0nKad9IQsEAA0urj0SBCmAOQTUzNjmrymMQAMa0tQ9HBwpvpaUAAWVJzTUDMnZzMulltUYGgRMDuTpgTEY2miAPQ-UAAVI7QTq0QhUADuFm4ACUABLSFhQUKMPBULL8VgCBCDBAALwgABMoMAqFIEmFSll0ABWVoFHAACgAlMkAHxQGKCKB-VgnIjEzECOBUOCUxroABs9KSKSgnVwphZ7M5Lm5vJY-MIgugwtFwiAA" target="_blank">
  Check out the answer.
</a>
  
### to-strict

Difficulty: :space_invader:

Play this with <a href="https://typescriptlang.org/play?#code/PTAEFEBMEsBdVgCwKagE7QOaPoghgHaSgDO0kqsA9qALZ6wDGiCKoAZlQDZdUDu0AplDIAHgAdkjWMmKwAnpNCMqRONFUkAdACgFSgMqwM0gDwAVAHygAvKACuBANYF+BANw6dICBKkzIL31UAypaZAB5ACMAK39zRVQ7AG8dUFACPHCAfgAuUmNBTE90vExkPIz7WijkNE8AX08dCkYuPDRUFQISeF6TWGiY-KMB01DwofjEy2bu3ocSOoA5LOR8-qLbAoGhrUzw91AfYKp2DLXSRCp7LmJXeFqHImR2QVljqp4defgy9aqNTq2020j2-yOJ0SZ1A-yuNzuGSoj1QjgobwIHzABFuXB0QA" target="_blank">TypeScript playground</a> !

```typescript
// Edit the right hand side to match the following expected type conditions.
type Strict<T> = unknown;

// Expected

type SomeObjectType = {
  name?: string;
  age?: number;
};

declare const strictObj: Strict<SomeObjectType>;

const userName: string = strictObj.name; // typeof name should not be undefined / null
const age: number = strictObj.age; // typeof age should not be undefined / null
```

<a href="https://typescriptlang.org/play?#code/C4TwDgpgBAysBOBLAxsAPAFQHxQLxQG8oBtABSkQDsoBrCEAewDMoMBdAWgH4AuVstlAC+AbgBQYgPSSoAUQAekVBAAmE0JFgMAthADyAIwBWEVBnDR8BMVCiUAhrt5QAzgioBzcbfseIzygBXbQMIeHFRCRVTABt7eGhkBko3V3dUQyM+OCRUNBgdfWNTYHNILHExJJTgKECXMIA5Rwg+NyRKDzw03OBMgDoHXREoaSgNCGY7FtcACwZAmJU7BlrQuspopipVUbtFmKrk1N9W-ZCw7vaUPuN+05GxianTuYWllbXoQM2IbcpdjIgjFDkA" target="_blank">
  Check out the answer.
</a>
  
### awaited

Difficulty: :space_invader::space_invader:

Play this with <a href="https://typescriptlang.org/play?#code/PTAEFEBMEsBdVgCwKagE7QOaPoghgHaSgDO0kqsA9qALZ6wDGiCKoAZlQDZdUDu0AplDIAHgAdkjWMmKwAnpNCMqRONFUkAdACgFSgIJ88cWQB4AKgD5QAXlCF5Abh17FqAAoBGO6A9oqWmgSZDMSWAwhKxd9TwAmX39A4NCkoJCwiMFMK2jXEBEJKRlINyUAZR97IxMSs29o0AKSRCoAVy5iACNUcMjMGPdQcoTq41NIerjG5sQ2ju7erKEEKioXIA" target="_blank">TypeScript playground</a> !

```typescript
// Edit the right hand side to match the following expected type conditions.
type Awaited<T> = any;

type P1 = Promise<string>;
type P2 = Promise<Promise<string>>;

// expected
type S1 = Awaited<P1>; // should be string;
type S2 = Awaited<P2>; // shuuld be string too;
```

<a href="https://typescriptlang.org/play?#code/C4TwDgpgBAgg7gQwJbAgEwDwBUB8UC8UAFFlBAB6oB2aAzlAAoBOA9gLZK0QAySA1hAxIqAMwhMoADRwAoKFAD8UAN5QADAC5YiFOgzSoAXzlQtqzVFKGAlAG01AXQDcMmaEiMAjAUasOXDFpgJmEAcxwXd2gGACYfZnZOQQT-QSCQqnCI1wB6HLJySABjVDQ3cGgAZW9CeGRSjAZPCKg8qFoACxYAVwAbNCgAI2h0sMiKqEq42p0G2Ja2zu6+geH24LCoYBYWFyA" target="_blank">
  Check out the answer.
</a>
  
### curry

Difficulty: :space_invader::space_invader:

Play this with <a href="https://typescriptlang.org/play?#code/PTAEGEHsFsAcBsCmAXRpkAs0DMCuA7AY2QEtJ90BPWNZSUaAQ2UI3S1G0nnkgHcS+AOahEADxrFEAEyo1QhctJKlyAOgBQ0xIXiMATjgLEyFQrn37KACmz4AXKABix1fgCUjxvkoBuDRogoACiEjqo0gGK+ADOyKCM0rIAvKDWjI74uNAARoj6ADSgOZnZefruoMkAfAmgANTF-tFxxZAEKQoWVulJ7tYAjO7+Oe340tbDoEExGO3wspj6-KKWkPoaox2DAAw7RQN7UzNzuAvsy3yryxsaLfEAbozwuIiluflVbduHO8dgs3msgAcgB5AAqFxW+RuGiAA" target="_blank">TypeScript playground</a> !

```typescript
// Complete the function type to match the following expected type condition.
declare function curry(fn: Function): any;

// Expected

const add = (a: number, b: number) => a + b;
const bound = curry(add)(1);
bound(); // should throw error
bound(100, 100); // should throw error

const value: number = bound(100); // should NOT throw error
```

<a href="https://typescriptlang.org/play?#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXzGRhgE8AeAFXhAA8MRVgBneAMTU11QD4AKAKHhJUALngUANPwCUYqrXqMWvKGKypEIGPACCE+ADojcJhjUat8AELT4AXm7x1m7QCVB8APzwVYnbYcfIwNYAHMmMRt7R3chMVQQADctAG5+fgB6DPgAURoAB3B6YHSwPFN4KGBgex9VeFRkAFsAIy19FvjmtpgAxyh4AGp4FrSy1AqWnDQauwIiUhVq6V4ARmk0qZneDfgs+CYAC2mIGoxDmBwAd2piHBh+LcY1gAYX-VW33f2jk7OL663S4PfjjCqJKAQZAgLqtSxzJ7AV4vb7ZX7IU7wAByAHkqOdLjctMD+EA" target="_blank">
  Check out the answer.
</a>
  
### diff

Difficulty: :space_invader::space_invader:

Play this with <a href="https://typescriptlang.org/play?#code/PTAEGEHsFsAcBsCmAXRoAGASAIgSwGb7qjICesayko0AhsgMYAWJTa+k88kA7rgHYBzUA0j8AJrmS4xAOgBQIUADEAmgEkANCu48S5NE1oBnVmmO1oafpbQBXafCml9FBWQqgcBfAB4AgtoAQgB8oAC8oLT8pADc8vIeaAAKAE6QsKaRAN7yoKC44gBcoPx20ABGiKnx+dLISCXGyKkCgrUktILGTS1tANoAuvEAvvHyovzNoOKI+LR28MhpGVmguXVdPaBDmvJjCUmgAEqIAI52uKmI4iuZEV54hL53xtpJkPgzcwtLryHjSbTWDpTIARhKpwuVxurweGwKxVAYIADCi9nUpI1QAByaAuWCQZo4vYHCZiYGg4wAJkh50u11uVPheURJVR6NZ9WxeIJROQJK5WxK-RxyGMOMGpPGSmMTEgi3EoCqoGq6VS5KmyFAINWAGY6dDGXCcqzCuy0RjOt0RVL9jKwHKFfAlSq1ZANUDtbrMgAWQ0M2HM02YhqIEq8nX8wUHIA" target="_blank">TypeScript playground</a> !

```typescript
// Complete `$Diff` type to match the following condition.
// FYI, Flow type has the same name utility type.
type $Diff<A, B> = any;

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
  title: 'my post',
};

const props2: RequiredProps = {
  id: 100,
  title: 'my post',
  tags: ['ts'],
};

// should be error
const props3: RequiredProps = {
  id: 100,
  tags: [],
};

// should be error
const props4: RequiredProps = {
  title: 'my post',
};
```

<a href="https://typescriptlang.org/play?#code/C4TwDgpgBAJAIgSwGZIDwEEA0UBCA+KAXigG8oBtABSgQDsoBRAD2ACcBDAY2FQGsIQAeyRQsUfkJH4AugGoA-AC5RVaVAC+UAGQAoKKQrU6jJpwA2AVwAmEPgOGjsEhzIC0SlZTXqA3Dp2gkFCUrIJgAM5EpHo0Vsq0FgC2AEYQrH76wAjAZhDK4Wx0AOYZUMDsReH5hbRF5NJ+vv6cgrQFUDZI7BZmwCFhkcQkMeWVyvWYOk0B4NAAShAAjhYIrBBW-RFR8Mhom+HYgRAOnd29+3h+Oi1twFBgoREAjMoLy6vr+1HD+ghxUE8AAyAyaZbK5ZQAckSIHuggKkMm0xu7QeAwATK8lis1htHoNor9-kCQSNwXkoNDYWB4cBESMKlUKJDgOFIdIkVcAPRcqDhAAWgh6VigqSgaVCrGurVR+IAzFj3rivkMYn9lCTQWVGeMOVNubyBUKzCKxRLBFKUXc0REACyKnGffHfMk5ClUuEIzk6IA" target="_blank">
  Check out the answer.
</a>
  
### randomize

Difficulty: :space_invader::space_invader::space_invader:

Play this with <a href="https://typescriptlang.org/play?#code/PTAEGEHsFsAcBsCmAXRpkAs0AMBKBDAOwBMZt0BPWRAOgChkq0CSZQBeUAV0IGtDIAd0IBuOnWKIAxvHwAnNFMiEAzslByipaAC5QLbWLpLV6-B1ABvUADd88Loj0BGUAF9Q+FaBNqxv9QAjC2s7BydQACZ3T28A-2U1HxDbe0c9AGYYrx9E5CMQUABRAA9qKVRiHTpCgBUsUGxNVmhyBWQuOUJKalAVDEgueGJQQLQvFQBLAHNCfECkdAxJ70ZeogFkfGRJ5XpjPNTwgEEAIQtm7QAKfAAaUYBKBNMjxzPwC60YG-vA+6knuIAqASnprAp8KRCPAKK8Iq4PAAfKwaRCQ5QwuF6aIeThhN6nZ5JCjVUCgZHgtFQzH4+HuOhkimo9HQ2G07H0xkoiHUtlpCJZXFw95iIA" target="_blank">TypeScript playground</a> !

```typescript
// Complete the `Random` type.
type Random = unknown;

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
```

<a href="https://typescriptlang.org/play?#code/C4TwDgpgBAYgrgOwMYB4CCUC8UCGCQA0UASlrvgHxkAUOATgOYDOAXFGgJRZXEDcAUP1CQoAVQQBLAPYIUANSKioEAB7AICACZNyIANoBdKtgDe-KFAAMbOQIsBGNtWoA6NwDc2orpip4QXKrqWjrUABYQOJpsEggAZhB0UAASkZpEbi7AOBIANjHxiVAAKjm5Pn745hZQAPxikjLyUAA+KWlEpXkU1RZsCBDuiQIAvnqiegDkuRoMwGGTBspqGtpWdets9gYCQuDQxHiaUgC2ZCjFisvBa-6GFNRxEnRMwGyXUJl0ECcIeG9iCoNaSyD6iCi7TQQJC5ejQJAyV5QOhHU5sQ5aU67BEIJE4MgmKDuHC5OAQLZQEa4HQ414CWnAKAAIwJRJJZLYACZKdSoAz6YjGUhWcTSeSoABmHk4GmC3YAenlUAAoipIEh1NF+IqShEoAADFGYk765EQYBwOgIKDCaBMMJSOC5TTM6AypgSBh-JkzG1hCQ6W3kBBSbLAEEuQQMtlitAAITIRuOJ1oRCZHAFuMZorJ8YAwonUSmcGmiEgM1HBVAVGxCd8ojJciAYxyoPYeW062lG82c+LuVTsH345mkSAWNVO2aGwgmy3xe2RpOoF2Z3O+1zKcvV8dZ732eKpYP5-mBEA" target="_blank">
  Check out the answer.
</a>
  
## How to create new exercise
Read [CONTRIBUTING.md](./CONTRIBUTING.md).

## LICENSE

MIT
