<!-- This is a generated file. Don't touch directly! -->

# Type Dungeon

TypeScript code exercise.

<!-- toc -->

- [Exercise](#exercise)
  - [array-to-union](#array-to-union)
  - [json-type](#json-type)
  - [to-strict](#to-strict)
  - [awaited](#awaited)
  - [combine-latest](#combine-latest)
  - [curry](#curry)
  - [diff](#diff)
  - [cellular-automaton](#cellular-automaton)
  - [randomize](#randomize)
- [How to create new exercise](#how-to-create-new-exercise)
- [LICENSE](#license)

<!-- tocstop -->

## Exercise

### array-to-union

Difficulty: :space_invader:

Play this with <a href="https://www.typescriptlang.org/play#code/PTAEGEHsFsAcBsCmAXRpkAs0DNL3pAO4CWAdgOagAGykAqqcZKVegJ6xq2jQCGyAYwzosoXPiJlKiAB4DEsAagAmoAc2XFkTUgDoAUMg5d6jZgB4AKqFmpSygM6gAggCdXvNgBliAa0TmvKRsAHwhoAC8oACupL6kRKQA3Pr6IKAAojKcSojKqeqkDsig-mxOUQDaAES85IjVADSg1djErsUAcrzQDc3V8LxdPQ0AuqBDaszFKYbGoADSiOWR6KY65kackNilyw4hSaDpDhiQ0fCqAEZotfXVoAA+LW0dyN29D88DQ+8j1fogA" target="_blank">TypeScript playground</a> !

```typescript
// Complete the following `toUnion` type to match the following excepcted condition.
type toUnion<T extends ArrayLike<any>> = unknown;

// Expected

const keys = ["age", "firstName", "lastName"] as const;

type Keys = toUnion<typeof keys>; // should be "age" | "firstName" | "lastName"
```

<a href="https://www.typescriptlang.org/play#code/C4TwDgpgBMD2CqA7AlrRAeAKlCAPYEiAJgM5QCCATpQIYgAyyA1hOjYiAHydQC8UmANqIArgFsARhEoBdANwAoBQHplUAKK5IAYwJEl2tCWBQWIMv0EAiGgHMIVgDRQrAM2SVjAORpiHzqwAbGm9fBxkoEKhDRGNFBVBIKABpCHM+GAQUNHREiFhXUzSSTjkoVSgSAAtYEUCiKCkXOwcoAB8Xd09gHz8rdpdg0L6FIA" target="_blank">
  Check out the answer.
</a>
  
### json-type

Difficulty: :space_invader:

Play this with <a href="https://www.typescriptlang.org/play#code/PTAEGEHsFsAcBsCmAXRpkAs0AMBSBlAeQDkAZASwGtFt0BPWRAOlAEllQAnRWbgZ0QA7ZH3qNQkAGagAbgEN4AV0Si8RYk1hzOAgBQBKWt2SLOgvkwBQyBmgIkK1UAF5QiwZUGQA7oIDclpYAxpDmHDIAjABcoPZkVGiuAN4AvgEhYbIATDFxjomgANoAuumhfOEAzLnq+S6ggorw8GWZMgAsNQ4J9UmWoKCS8HIA5jGSCgIANP0NctCIMQBEgvOISzMDjdAxEQAMe5ug2pwxhUmgGJAji6BLVzdLoCnFR5CwyOShAAra8zGNZozNKBECgAAqWEGkGaPnIghGoAASgAJfCiIJyQQNSAcABGaAEnHICnIAC9EAATdCQWLqYLlcIAVi68ScrgMLgAfKAIn5QGC+FcmtSCaBEJxOJBOAy2gA2Vl1ZKDQQxTnOHkRZ78wXC+CitASqUyoA" target="_blank">TypeScript playground</a> !

```typescript
// Complete the `JSONLike` type. It represents type of values `JSON.parse()` returns.
type JSONLike = unknown;

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
```

<a href="https://www.typescriptlang.org/play#code/C4TwDgpgBACgTgSwLYOAgbtAvFAdgVwBtCoAfKAIwHsrCIBDXMqAZ2EVwHNmCkKI4AbgBQw0JCgApAMoB5AHIAZBAGtswqMwDeGzXoDaakAC5W7BFwC6pmQuVqReqAF9d5W0tUR9lt7EQoaJgiwgDGVLhsUOgAjDZynmpQOFrOIuGRwNEATPF2XslQPukRUegAzHmJ2HhEhCWZ0QAsVfY1OpoAZoT0nKad9IQsEAA0urj0SBCmAEQTUzNjmrymMQAMa0tQ9HBwpvpaUAAWVJzTUDMnZzMulltUYGgRMDuTpgTEY2miAPQ-UAAVI7QTq0QhUADuFm4ACUABLSFhQUKMPBULL8VgCBCDBAALwgABMoMAqFIEmFSll0ABWVoFHAACgAlMkAHxQGKCKB-VgnIjEzECOBUOCUxroABs9KSKSgnVwphZ7M5Lm5vJY-MIgugwtFwiAA" target="_blank">
  Check out the answer.
</a>
  
### to-strict

Difficulty: :space_invader:

Play this with <a href="https://www.typescriptlang.org/play#code/PTAEFEBMEsBdVgCwKagE7QOaPoghgHaSgDO0kqsA9qALZ6wDGiCKoAZlQDZdUDu0AplDIAHgAdkjWMmKwAnpNCMqRONFUkAdACgFSgMqwM0gDwAVAHygAvKACuBANYF+BANw6dICBKkzIL31UAypaZAB5ACMAK39zRVQ7AG8dUFACPHCAfgAuUmNBTE90vExkPIz7WijkNE8AX08dCkYuPDRUFQISeF6TWGiY-KMB01DwofjEy2bu3ocSOoA5LOR8-qLbAoGhrUzw91AfYKp2DLXSRCp7LmJXeFqHImR2QVljqp4defgy9aqNTq2020j2-yOJ0SZ1A-yuNzuGSoj1QjgobwIHzABFuXB0QA" target="_blank">TypeScript playground</a> !

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

<a href="https://www.typescriptlang.org/play#code/C4TwDgpgBAysBOBLAxsAPAFQHxQLxQG8oBtABSkQDsoBrCEAewDMoMBdAWgH4AuVstlAC+AbgBQYgPSSoAUQAekVBAAmE0JFgMAthADyAIwBWEVBnDR8BMVCiUAhrt5QAzgioBzcbfseIzygBXbQMIeHFRCRVTABt7eGhkBko3V3dUQyM+OCRUNBgdfWNTYHNILHExJJTgKECXMIA5Rwg+NyRKDzw03OBMgDoHXREoaSgNCGY7FtcACwZAmJU7BlrQuspopipVUbtFmKrk1N9W-ZCw7vaUPuN+05GxianTuYWllbXoQM2IbcpdjIgjFDkA" target="_blank">
  Check out the answer.
</a>
  
### awaited

Difficulty: :space_invader::space_invader:

Play this with <a href="https://www.typescriptlang.org/play#code/PTAEFEBMEsBdVgCwKagE7QOaPoghgHaSgDO0kqsA9qALZ6wDGiCKoAZlQDZdUDu0AplDIAHgAdkjWMmKwAnpNCMqRONFUkAdACgFSgIJ88cWQB4AKgD5QAXlABXAgGsC-AgG4dexagAKAIx2oH5oVLTQJMhmJLAYQlZe+v4ATMGh4ZHRGRFRMXGCmFaJ3iAiElIykD5KAMpB9kYmVWaBiaBlJIhUDlzEAEaosfGYSb6gtWmNxqaQrSntnYgOvQNDBUIIVFReQA" target="_blank">TypeScript playground</a> !

```typescript
// Edit the right hand side to match the following expected type conditions.
type Awaited<T> = unknown;

type P1 = Promise<string>;
type P2 = Promise<Promise<string>>;

// expected
type S1 = Awaited<P1>; // should be string;
type S2 = Awaited<P2>; // shuuld be string too;
```

<a href="https://www.typescriptlang.org/play#code/C4TwDgpgBAgg7gQwJbAgEwDwBUB8UC8UAFFlBAB6oB2aAzlAAoBOA9gLZK0QAySA1hAxIqAMwhMoADRwAoKFAD8UAN5QADAC5YiFOgzSoAXzlQtqzVFKGAlAG01AXQDcMmaEiMAjAUasOXDFpgJmEAcxwXd2gGACYfZnZOQQT-QSCQqnCI1wB6HLJySABjVDQ3cGgAZW9CeGRSjAZPCKg8qFoACxYAVwAbNCgAI2h0sMiKqEq42p0G2Ja2zu6+geH24LCoYBYWFyA" target="_blank">
  Check out the answer.
</a>
  
### combine-latest

Difficulty: :space_invader::space_invader:

Play this with <a href="https://www.typescriptlang.org/play#code/PTAEGEHsFsAcBsCmAXRpkAs0DNL3pAO4CWAdgOagAGAxjAEZmIAyAhqgM7JWjYCupGsmKRSoACaIa8VgCd2I0gDoAUCDVgAKhmIdeAoYtC7QfDonGgSmUACUAHgCkAyqACCABQCSS0M8RoGMjIsBwAXCCy9gBWHEqSAG7ArLDEwGSS9sD8gsKiwHTQjKQs7IhcoKpkqLLYrDRoAPL05rIJrPRIADyaAHygAN4qoKAcfC00ssT0iAAUNPRhoLMJS5oAlKAAvP0JkMTi60t7BwDcKgC+KiqS0nI4BnlihcWlnMizw5VKSnLk4aBmq12p1EF1WKQAJ69ADaAF0VEdAS1EG0Ot0BABrUhEUjw3rnDSgACi9lgUlQ4mutxksjQdFIFQ4AEYlkDUSDulwphQCTcpLT6aImQAmNkotGgrqkPhFVF8mn3UAMpkAZnFwPRYPokDwiAhfJULyYbHesxZABpRiKrRxVeslGMJlMZrNZjCEsyrQkbaAEqq4ZsdoMviA-czRhhIHx4JYZqNkDzyF8VchQHSxvBkKyE0ntuHCSMwz7I9HY6B4zK5bIU8K0xmY8gxaAqzNZPmfYXQMXVaWY3G0Dq9RDa4z6+VG+qK7qkBCO6rzhd1ucgA" target="_blank">TypeScript playground</a> !

```typescript
// Complete the following `combineLatest` function declaration.
//
// This function is used with RxJS API. See https://rxjs.dev/api/index/function/combineLatest .
interface Observable<T> {
  subscribe(cb: (v: T) => void): void;
}

declare function combineLatest(
  ...args: Observable<any>[]
): Observable<unknown[]>;

// Expected

declare const s1: Observable<string>;
declare const s2: Observable<number>;
declare const s3: Observable<boolean>;

combineLatest(s1, s2, s3).subscribe(([v1, v2, v3]) => {
  // v1 should be string
  const result1: string = v1;

  // v2 should be number
  const result2: number = v2;

  // v3 should be boolean
  const result3: boolean = v3;
});
```

<a href="https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgPICMDO0Bud0A2EAPACoB8yA3gFDLKYCuWCUw6EAFAugFzKcc-UgEpkAXko4A9sAAmI-jPkBuGgF8aNMAE8ADigCqIdNIAeoAOZlK45KWQQzkEHMxosufEWKgY0ZABlSgB+IOR+EAgcaDUaOQgEAjgoFBhGEAQwYGkQZARpAFt0UAgAGThITDBiQ0dnCFd3DGwoPEISOBAdcgBtAF1yTjpkADpxlMtMfkMaRQ9W9p8R2np6XoAFZFBkAGsIHWkYZEN+mZNzK1rNwbV6TXI4gHon5ABRMwMsiDktBKSUigCiBqgwAIz8FpeDrEapsECWR7xRLJVL5XKgzAAJkhnja3hIIEYxWgSP+qKBGLADAAzLjFgTiKZpEQukiaAViqUKlUwJxMGCADQMLHCzA0kSjJgsNgcTicXo4IXIHCilU0-piSTUEYvFVghgAC2kjAIcmQHAYYHhlhGwNBqSYBDAEKtNok+ri9D1qqNJrNFpQRJJUDtVOQjtNYBxyGDHCgHtVXuQPppftN5stzNZIDDIOpkeddIt0hZEC6iZpanUIjUQA" target="_blank">
  Check out the answer.
</a>
  
### curry

Difficulty: :space_invader::space_invader:

Play this with <a href="https://www.typescriptlang.org/play#code/PTAEGEHsFsAcBsCmAXRpkAs0DMCuA7AY2QEtJ90BPWNZSUaAQ2UI3S1G0nnkgHcS+AOahEADxrFEAEyo1QhctJKlyAOgBQ0xIXiMATjgLEyFQrn37KACmz4AXKABix1fgCUjxvkoBuDRogoACiEjqo0gGK+ADOyKCM0rIAvKDWjI74uNAARoj6ADSgOZnZefruoMkAfAmgANTF-tFxxZAEKQoWVulJ7tYAjO7+gWAAAsgxALTiksgzlpD6oAAGOe340iugMRjt8LKMhISIsPEDCfpC2Yj4yBrrHdbDAUET07PhC-pLq4+b212+0Ox1O50u12gt3u-2kgwADPCigNEcNQEEgbgDuwfnxRIt9FFyK0AG6MeC4RClXL5KptJ4o+EvIA" target="_blank">TypeScript playground</a> !

```typescript
// Complete the function type to match the following expected type condition.
declare function curry(fn: Function): any;

// Expected

const add = (a: number, b: number) => a + b;
const bound = curry(add)(1);

// @ts-expect-error `bound` should accept 1 argument
bound();

// @ts-expect-error `bound` should accept 1 argument
bound(100, 100); // should throw error

const value: number = bound(100);
```

<a href="https://www.typescriptlang.org/play#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXzGRhgE8AeAFXhAA8MRVgBneAMTU11QD4AKAKHhJUALngUANPwCUYqrXqMWvKGKypEIGPACCE+ADojcJhjUat8AELT4AXm7x1m7QCVB8APzwVYnbYcfIwNYAHMmMRt7R3chMVQQADctAG5+fgB6DPgAURoAB3B6YHSwPFN4KGBgex9VeFRkAFsAIy19FvjmtpgAxyh4AGp4FrSy1AqWnDQauwIiUhVq6V4ARmk0zOyAAQwmAFpaQsxD4hxtAAMpmYv4JgALaYgaqDAwEHyMeFXKmFDmhgYfjXRi8DbpLLwXYHI5FU4wc7wK7TRi3B5PF5vD5fH5hAGoIEg4BrAAMJP0qzJG3gkPRyGe8Aw9wRAHdqGcYKVyl9ElAIMgQF1WpY5kTSSTwUA" target="_blank">
  Check out the answer.
</a>
  
### diff

Difficulty: :space_invader::space_invader:

Play this with <a href="https://www.typescriptlang.org/play#code/PTAEGEHsFsAcBsCmAXRoAGASAIgSwGb7qjICesayko0AhsgMYAWJTa+k88kA7rgHYBzUA0j8AJrmS4xAOgBQIUADEAmgEkANCu48S5NE1oBnVmmO1oafpbQBXafCml9FBWQqgcBfAB4AgtoAQgB8oAC8oLT8pADc8vIeaAAKAE6QsKaRAN7yoKC44gBcoPx20ABGiKnx+dLISCXGyKkCgrUktILGTS1tANoAuvEAvvHyovzNoOKI+LR28MhpGVmguXVdPaBDmvJjCUmgAEqIAI52uKmI4iuZEV54hL53xtpJkPgzcwtLryHjSbTWDpTIARhKpwuVxurweGwKxVAYIADCi9nUpI1QAAiaAuWCQZo4vYHCZiYGg4wAJkh50u11uVPheURJVR6NZ9WxeIJROQJK5WxK-RxyGMOMGpPGSgAAuKALSIAAeFAYyCVqXSqXJU2QoBBqwAzHToYy4TlWYV2WiMZ1uiKpfsZWB5cYlarEOrNdrdZTVgAWU0M2HMy2YhqIEq8g38wUHIA" target="_blank">TypeScript playground</a> !

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
```

<a href="https://www.typescriptlang.org/play#code/C4TwDgpgBAJAIgSwGZIDwEEA0UBCA+KAXigG8oBtABSgQDsoBRAD2ACcBDAY2FQGsIQAeyRQsUfkJH4AugGoA-AC5RVaVAC+UAGQAoKKQrU6jJpwA2AVwAmEPgOGjsEhzIC0SlZTXqA3Dp2gkFCUrIJgAM5EpHo0Vsq0FgC2AEYQrH76wAjAZhDK4Wx0AOYZUMDsReH5hbRF5NJ+vv6cgrQFUDZI7BZmwCFhkcQkMeWVyvWYOk0B4NAAShAAjhYIrBBW-RFR8Mhom+HYgRAOnd29+3h+Oi1twFBgoREAjMoLy6vr+1HD+ghxUE8AAyAyaZbK5ZQAIkSIHuggKkMm0xu7QeAwATK8lis1htHoNor9-kCQSNwXkoNDYWB4cBESMKlUKJDgOFIdIkVcAPRcqAAAVZrggTEg3CFrFCrGurVR+IAzFj3rivkMYn9lCTQWVGeMOVNubyBeEhSKIGK0pLpbd7viACyKnGffHfMk5ClUuEIzk6IA" target="_blank">
  Check out the answer.
</a>
  
### cellular-automaton

Difficulty: :space_invader::space_invader::space_invader:

Play this with <a href="https://www.typescriptlang.org/play#code/PTAEGEHsFsAcBsCmAXRpkAs0DNL3pAO4CWAdgOboCesaABuIvgK7wCGATgILPIxt9SAHgByAPjqhmAZzKVMxaaDoAlVoknIaiAHQAoEKAAqWZWqSbtoDolg3piUsiVtr60JGwfSiALQATYmhHWUhSNnhQAGMmeFZOUDZeflIAGkSdAGsdNh1QAHU8bA42aGjIfzQAIgBGGoAGKv1DFUQ2f1AMZGRYaQAuEEcdEkziWkDcyA5yYBHiYHNEAH06+tBiLypIZlBCNidQaCm0SuQ2Ynhm4AMwBlj47mToATDRCVBpDG34DvJiADc0Jg0CJfJhQORHIgSshiGEPmdULssKQEZxYRRlABtGoAXToV1AADEpqBEAAPUoIRDpO4sdiPPjPQRCGrvOyQf7ESpKOg41I1VL1fGgABGiCiSQc2PqQoFIshPhhiF5NTo6SxssFwtA-kgKuUavS+w6fO1QpFeoNdHqBL0WlooAAQqAALygGqgAA+oHqAG4bqA7ChYdDfMRyKRjvarItVkIjGTyahSP4lFinelM87cWI3XpQMYkym06B+R70njQAB+X2gPoFosUkvpwUV324mse+uNxPNxyl8uyj2d2uehuFvvJget9LDnW1tYTpvT1Pp4dtqtjnuT4szssbuej7vLqctg9zyvH8e9vdri++o9dpeNnyAjgBmOOxYJu+D7MAbmbqgHGDQJmIn4OmgjD0pwPBMi8wgiH+SikMw0DihwebuswpCZFGhCkJ+hgAKLkrQUSoP4eh6FEYTSMgHz1H0ED3Ay8H8Cy9TYYWvF8XxOKdoYwbdMQYYRlGNi0fRjHSDULEwXE7FPIhrI8fx-H8tqQlgCJoYcOGkbRnRpAMR8ABMClsXBKksuZ6kaWWgrOXKOrCTYoniUZUkmWZ0gAMxWbBjKca8-kOQJLlaq5FqgO5IZiQZEnGTJHwACxBUpNkISyaURU5AqFVFMVubpHn6YZkmINJpmyQArJlDwccyrx1Q5WklYVsrda5OlBuViWVSltUfAAbI1yk5a8o08R15rRfNnWlf1CVeVVehAA" target="_blank">TypeScript playground</a> !

```typescript
// Complete the following type `CellularAutomaton<N>` using this `Rule` type.
// The `Rule` type represents a rule of one-dimensional cellular automan, a.k.a. Wolfram code "110".
// Read https://en.wikipedia.org/wiki/Rule_110 if you want more detail.
//
// `CellularAutomaton<N>` should give the N-th generation state when starting `[1]`.
// For example, `CellularAutomaton<1>` provides `[1,1,0]` because `[0,0,1]` generates `1`, [0,1,0] does `1`, and `[1,0,0]` does `0`.
type B = 1 | 0;
// prettier-ignore
type Rule110<T extends [B, B, B]> =
  T extends [1, 1, 1] ? 0 :
  T extends [1, 1, 0] ? 1 :
  T extends [1, 0, 1] ? 1 :
  T extends [1, 0, 0] ? 0 :
  T extends [0, 1, 1] ? 1 :
  T extends [0, 1, 0] ? 1 :
  T extends [0, 0, 1] ? 1 :
  T extends [0, 0, 0] ? 0 :
  never;

type Rule<T extends [B, B, B]> = Rule110<T>;

type CellularAutomaton<N extends number> = unknown;

// Expected

const s0: CellularAutomaton<0> =             [1] // prettier-ignore
const s1: CellularAutomaton<1> =           [1,1,0] // prettier-ignore
const s2: CellularAutomaton<2> =         [1,1,1,0,0] // prettier-ignore
const s3: CellularAutomaton<3> =       [1,1,0,1,0,0,0] // prettier-ignore
const s4: CellularAutomaton<4> =     [1,1,1,1,1,0,0,0,0] // prettier-ignore
const s5: CellularAutomaton<5> =   [1,1,0,0,0,1,0,0,0,0,0] // prettier-ignore
const s6: CellularAutomaton<6> = [1,1,1,0,0,1,1,0,0,0,0,0,0] // prettier-ignore
```

<a href="https://www.typescriptlang.org/play#code/C4TwDgpgBAQlC8UCMUA+UAMBuAUAejyjACcJhgBLCYgWgoHMA7Ae1J1EigCUBXAGwhIkGADwAVKBAAewCIwAmAZygBtGABpYmmAF0AfAhxQoE6bIXKVSTdeQ6oAfkxQAXEZOSZcpatu2M9k4obsamXha+mhg2gciu7mHmPlZRUbEY8aGeSZbRyDGOcSEeZt65NmmFwQnZZap5eUix1VmlESoNlU4ZxYwQAG7UuOzg0LwC4rXtGlqw+gjc-ILC4nrDHNAAwhB8fAsA3u79AIZ8LrC4xsQMABbADufbu7gAvuuj3LfAk20+T3wGRCJOr7KDXeh3c4URgAM2o3CgL0KXFcUFBJzOzjeOBGnDExwofH+IgAMhAYcAAGqnKY+GbAiL-QFoo6nc7jCAiFRkinUviaMQqABEGKFOk0XC+q2Fop0+kuYK+50OxmMGPZSy5gpFpzFqUw8vc2OxuOgAFkKPJ5AJiTyqTTfsp6bTlEyFgyfKDwZCoP9Ee4nCrVWq2YsJtzyfb+SYZbrxZ8Id8xHpY3wxYbg1clVALVabTs+OJU3qE3dVmt3MYXu5zvjCbbI3yBRXTVAABIQY7yYke10F5lB9VhzkdfXa2UZxWJ86560QYl5ZOvd6cACqjEUNwoFPEmlXLqgx0YIBU80QAAVjsRjgBbMjURQiAAUMIoxEUwFrmgAdL-SB-zlXABKBADCPEAWw2ExmDEHgwAmXtfX7A53Awc4VHHOMdAVJBAI3Lcd0wtN4zEGC4ImSVE3LCsXgwg8vWzP0kSCVEAhXLYC34K8AEEeGAZgb2OfjGBEdwADkD0YHgbwAI2odQakdJDdgOKAhxQF4FOMfclPA08FlPHAB1Q2syPgzkl3cXDlL4LjiF4-jBOEkQxM0Dsux7PQ93w7dvjyVc9BolRV2FARGHoYAbjFA8JO6VEmmGAgoAAUSkSAAGNZHkHF0uYDdgCgRQ0JsuyHIEoS8pEDBmUzWrfHsJKSDIShqDoJhWAgHBcvywrrP+Uq+PK5ykBqurjBSawAigRrSHIKhaAYFg2G6j9CoAJkeTi+B4wanMqtbRtqib1Em9Qppm5r5rapbOpWgrFAAZk23YBsciqRIew7VWO6JTuic7CCaubWsWjqury1bFAAFme2ztvs3b3pEKGvuO6x0bOzH-oawHZpahb2uWiH7oAVlh16hsqknRp+rGTrp-6zpxog8au0GiZ6xQADZyfhsq9pErnmTRumMcZ8Wmem3HLpBwnOqAA" target="_blank">
  Check out the answer.
</a>
  
### randomize

Difficulty: :space_invader::space_invader::space_invader:

Play this with <a href="https://www.typescriptlang.org/play#code/PTAEGEHsFsAcBsCmAXRpkAs0AMBKBDAOwBMZt0BPWRAOgChkq0CSZQBeUAV0IGtDIAd0IBuOnWKIAxvHwAnNFMiEAzslByipaAC5QLbWLpLV6-B1ABvUADd88Loj0BGUAF9Q+FaBNqxv9QAjC2s7BydQACZ3T28A-2U1HxDbe0c9AGYYrx9E5CMQUABRAA9qKVRiHTpCgBUsUGxNVmhyBWQuOUJKalAVDEgueGJQQLQvFQBLAHNCfECkdAxJ70ZeogFkfGRJ5XpjPNTwgEEAIQtm7QAKfAAaUYBKBNMjxzPwC60YG-vA+6knuIAqASnprAp8KRCPAKK8Iq4PAAfKwaRCQ5QwuF6aIeThhN6nZ5JCjVUCgZHgtFQzH4+HuOhkimo9HQ2G07H0xkoiHUtlpCJZXFw95iIA" target="_blank">TypeScript playground</a> !

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

<a href="https://www.typescriptlang.org/play#code/C4TwDgpgBAqgdgSwPZwDwDUA0soQB7ARwAmAzlAIZwgDaAugHxQC8UA3gFBRQAMAXFHQBuLlACMAgBSSAdHIBuAmAEoWTKiFX5CJcpIAWECsQEI4AMwgAnKAAkjxbHJnAKCADamL1qABU37qrM6tSi3AD8sIgoGFAAPnYO2P4eDGFQAnAQ8tYiAL40MDQARO5EAObA+sV0uAREZLxQkTwZ4nQiHKCQUABKVMRIALYsUKi+2DB1Oo0a9AyS5ghWpMACE1DOVhBDcFRrsEFM8MhoGzAMncQQAMbuFNtQNyirUFYDwwL9JMOdz3CvCijNhQeQUdwAVwgAjEUDylHI-1WIiRwCgACNgaDwVCBAAmOEIp4vYAoklPLFgyHQqAAZkJFERJM6AHoWVAAKJ4SA3QgmDhsvyGKAAA3ePyGIreEGAEKscCg3WgpH0SAh7mIGOgjNICHKe3RZUV+gQ5CVlDgcCQrmApxkHA4qOx1IAggAhUbiwZDSQUbDo5RkgFoqlQ90AYU9Hx9fox2BugYdTrwAhB22MKHcIGduPEhISaYcmezoZpBPhrFL7qDrxAfFEBelGbgWZzNNheQb7CbgxbJZxZbhXcLzdbpYE9IrbYjIiAA" target="_blank">
  Check out the answer.
</a>
  
## How to create new exercise
Read [CONTRIBUTING.md](./CONTRIBUTING.md).

## LICENSE

MIT
