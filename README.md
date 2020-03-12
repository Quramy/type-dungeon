<!-- This is a generated file. Don't touch directly! -->

# Type Dungeon

TypeScript code exercise.

<!-- toc -->

- [Exercise](#exercise)
  - [json-type](#json-type)
  - [to-strict](#to-strict)
  - [awaited](#awaited)
  - [curry](#curry)
  - [randomize](#randomize)
- [How to create new exercise](#how-to-create-new-exercise)
- [LICENSE](#license)

<!-- tocstop -->

## Exercise

### json-type

Difficulty: `EASY` .

Play this with <a href="https://www.typescriptlang.org/v2/play?#code/PTAEGEHsFsAcBsCmAXRpkAs0AMBSBlAeQDkAZASwGtFt0BPWRAOlAEllQAnRWbgZ0QA7ZH3qNQkAGagAbgEN4AV0Si8RYk1hzOAgBQBKWt2SLOgvkwBQyBmgIkK1UAF5QiwZUGQA7oIDclpYAxpDmHDIAjABcoPZkVGiuAN4AvgEhYbIATDFxjomgANoAuumhfOEAzLnq+S6ggorw8GWZMgAsNQ4J9UmWoKCS8HIA5jGSCgIANP0NctCIMQDkgvOISzMDjdAxEQAMe5ug2pwxhUmgGJAji6BLVzdLoCnFR5CwyOShAAra8zGNZozNKBECgAAqWEGkGaPnIghGoAASgAJfCiIJyQQNSAcABGaAEnHICnIAC9EAATdCQWLqYLlcIAVi68ScrgMLgAfKAIn5QGC+FcmtSCaBEJxOJBOAy2gA2Vl1ZKDQQxTnOHkRZ78wXC+CitASqUyoA" target="_blank">TypeScript playground</a> !

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

<a href="https://www.typescriptlang.org/v2/play?#code/C4TwDgpgBACgTgSwLYOAgbtAvFAdgVwBtCoAfKAIwHsrCIBDXMqAZ2EVwHNmCkKI4AbgBQw0JCgApAMoB5AHIAZBAGtswqMwDeGzXoDaakAC5W7BFwC6pmQuVqReqAF9d5W0tUR9lt7EQoaJgiwgDGVLhsUOgAjDZynmpQOFrOIuGRwNEATPF2XslQPukRUegAzHmJ2HhEhCWZ0QAsVfY1OpoAZoT0nKad9IQsEAA0urj0SBCmAOQTUzNjmrymMQAMa0tQ9HBwpvpaUAAWVJzTUDMnZzMulltUYGgRMDuTpgTEY2miAPQ-UAAVI7QTq0QhUADuFm4ACUABLSFhQUKMPBULL8VgCBCDBAALwgABMoMAqFIEmFSll0ABWVoFHAACgAlMkAHxQGKCKB-VgnIjEzECOBUOCUxroABs9KSKSgnVwphZ7M5Lm5vJY-MIgugwtFwiAA" target="_blank">
  Check out the answer.
</a>
  
### to-strict

Difficulty: `EASY` .

Play this with <a href="https://www.typescriptlang.org/v2/play?#code/PTAEFEBMEsBdVgCwKagE7QOaPoghgHaSgDO0kqsA9qALZ6wDGiCKoAZlQDZdUDu0AplDIAHgAdkjWMmKwAnpNCMqRONFUkAdACgFSgMqwM0gDwAVAHygAvKACuBANYF+BANw6dICBKkzIL31UAypaZAB5ACMAK39zRVQ7AG8dUFACPHCAfgAuUmNBTE90vExkPIz7WijkNE8AX08dCkYuPDRUFQISeF6TWGiY-KMB01DwofjEy2bu3ocSOoA5LOR8-qLbAoGhrUzw91AfYKp2DLXSRCp7LmJXeFqHImR2QVljqp4defgy9aqNTq2020j2-yOJ0SZ1A-yuNzuGSoj1QjgobwIHzABFuXB0QA" target="_blank">TypeScript playground</a> !

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

<a href="https://www.typescriptlang.org/v2/play?#code/C4TwDgpgBAysBOBLAxsAPAFQHxQLxQG8oBtABSkQDsoBrCEAewDMoMBdAWgH4AuVstlAC+AbgBQYgPSSoAUQAekVBAAmE0JFgMAthADyAIwBWEVBnDR8BMVCiUAhrt5QAzgioBzcbfseIzygBXbQMIeHFRCRVTABt7eGhkBko3V3dUQyM+OCRUNBgdfWNTYHNILHExJJTgKECXMIA5Rwg+NyRKDzw03OBMgDoHXREoaSgNCGY7FtcACwZAmJU7BlrQuspopipVUbtFmKrk1N9W-ZCw7vaUPuN+05GxianTuYWllbXoQM2IbcpdjIgjFDkA" target="_blank">
  Check out the answer.
</a>
  
### awaited

Difficulty: `MEDIUM` .

Play this with <a href="https://www.typescriptlang.org/v2/play?#code/PTAEFEBMEsBdVgCwKagE7QOaPoghgHaSgDO0kqsA9qALZ6wDGiCKoAZlQDZdUDu0AplDIAHgAdkjWMmKwAnpNCMqRONFUkAdACgFSgIJ88cWQB4AKgD5QAXlCF5Abh17FqAAoBGO6A9oqWmgSZDMSWAwhKxd9TwAmX39A4NCkoJCwiMFMK2jXEBEJKRlINyUAZR97IxMSs29o0AKSRCoAVy5iACNUcMjMGPdQcoTq41NIerjG5sQ2ju7erKEEKioXIA" target="_blank">TypeScript playground</a> !

```typescript
// Edit the right hand side to match the following expected type conditions.
type Awaited<T> = any;

type P1 = Promise<string>;
type P2 = Promise<Promise<string>>;

// expected
type S1 = Awaited<P1>; // should be string;
type S2 = Awaited<P2>; // shuuld be string too;
```

<a href="https://www.typescriptlang.org/v2/play?#code/C4TwDgpgBAgg7gQwJbAgEwDwBUB8UC8UAFFlBAB6oB2aAzlAAoBOA9gLZK0QAySA1hAxIqAMwhMoADTwB+KAG8oABgBcsRCnQZpUAL5Q1i1VFK6AlAG0lAXQDcAKHuhIjAIwFGrDlwy1gTYQBzHAdnaAYAJg9mdk5BGO9BPwCqYJDHAHoMsnJIAGNUNCdwaABld0J4ZEKMBlcQqCyoWgALFgBXABs0KAAjaGSg0JKoUqjKjRrIhqbW9q6e-ub-IKhgFhYHIA" target="_blank">
  Check out the answer.
</a>
  
### curry

Difficulty: `MEDIUM` .

Play this with <a href="https://www.typescriptlang.org/v2/play?#code/PTAEGEHsFsAcBsCmAXRpkAs0DMCuA7AY2QEtJ90BPWNZSUaAQ2UI3S1G0nnkgHcS+AOahEADxrFEAEyo1QhctJKlyAOgBQ0xIXiMATjgLEyFQrn37KACmz4AXKABix1fgCUjxvkoBuDRogoACiEjqo0gGK+ADOyKCM0rIAvKDWjI74uNAARoj6ADSgOZnZefruoMkAfAmgANTF-tFxxZAEKQoWVulJ7tYAjO7+Oe340tbDoEExGO3wspj6-KKWkPoaox2DAAw7RQN7UzNzuAvsy3yryxsaLfEAbozwuIiluflVbduHO8dgs3msgAcgB5AAqFxW+RuGiAA" target="_blank">TypeScript playground</a> !

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

<a href="https://www.typescriptlang.org/v2/play?#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXzGRhgE8AeAFXhAA8MRVgBneAMTU11QD4AKAKHhJUALngUANPwCUYqrXqMWvKGKypEIGPACCE+ADojcJhjUat8AELT4AXm7x1m7QCV4AfngqxO2w+8jA1gAcyYxG3tHdzFUEAA3LQBufn4AejT4AFEaAAdwemBUsDxTeChgYHtvVXhUZABbACMtfSbYxpaYf0coeABqeCaUktQyppw0KrsCIlIVSuleAEZpFImp3jX4DPgmAAtJiCqMfZgcAHdqYhwYfg3GFYAGJ-1ll+3dg6OTs8vr853fijMrxKAQZAgDrNSwzB7AZ5PT6Zb7IY7wAByAHkqKdzlctID+EA" target="_blank">
  Check out the answer.
</a>
  
### randomize

Difficulty: `HARD` .

Play this with <a href="https://www.typescriptlang.org/v2/play?#code/PTAEGEHsFsAcBsCmAXRpkAs0AMBKBDAOwBMZt0BPWRAOgChkq0CSZQBeUAV0IGtDIAd0IBuOnWKIAxvHwAnNFMiEAzslByipaAC5QLbWLpLV6-B1ABvUADd88Loj0BGUAF9Q+FaBNqxv9QAjC2s7BydQACZ3T28A-2U1HxDbe0c9AGYYrx9E5CMQUABRAA9qKVRiHTpCgBUsUGxNVmhyBWQuOUJKalAVDEgueGJQQLQvFQBLAHNCfECkdAxJ70ZeogFkfGRJ5XoA1PC9ULSI1w8AHytD9KiYq5Oj0CyPTmbtAAp8ABpR36kAJRiIA" target="_blank">TypeScript playground</a> !

```typescript
// Complete the `Random` type.
type Random = unknown;

declare const random: Random;

const a = { value: 1 } as const;
const b = { value: 2 } as const;
const c = { value: 3 } as const;

// Expected:
// The `random` return type should be assignable this type annotation.
const value: { value: 1 } | { value: 2 } | { value: 3 } = random(a, b, c);
```

<a href="https://www.typescriptlang.org/v2/play?#code/C4TwDgpgBAYgrgOwMYB4CCUC8UCGCQA0UASlrvgHxkAUOATgOYDOAXFGgJRZXEDcAUP1CQoAVQQBLAPYIUANSKioEAB7AICACZNyIANoBdKtgDe-KFAAMbOQIsBGNtWoA6NwDc2orpip4QXKrqWjrUABYQOJpsEggAZhB0UAASkZpEbi7AOBIANjHxiVAAKjm5Pn74UAD8YpIy8lAAPilpRKV5VGwIEO6JAgC+eqJ6AOS5GgzAYaMGymoa2lY1y2z2BgJC4NDEeJpSALZkKMWK88FL-oYU1HESdEzAbKdQmXQQBwh4T2IVddKyF6iCibTQQJC5ejQJAyR5QOh7Q5sXZaQ6bGEIOE4MgmKDuHC5OAQNZQAa4HQYx4CSnAKAAIxxeIJRLYACZSeSoDTqbDaUhGfjCcSoABmDk4Cm8zYAemlUAAoipIEh1NF+LKShEoAADBGog7a+EQYBwOgIKDCaBMMJSOC5TT06ASpgSBhfOkTC1hCQ6S3kBBSbLAAEufg0plCti4wUsqD2DktaPM4XssmJiOxsVk7B6-YHWhEOlEJAcARAA" target="_blank">
  Check out the answer.
</a>
  
## How to create new exercise
Read [CONTRIBUTING.md](./CONTRIBUTING.md).

## LICENSE

MIT
