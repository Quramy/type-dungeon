<!-- This is a generated file. Don't touch directly! -->

# Type Dungeon

TypeScript code exercise.

<!-- toc -->

- [Exercise](#exercise)
  - [array-to-union](#array-to-union)
  - [json-type](#json-type)
  - [to-strict](#to-strict)
  - [combine-latest](#combine-latest)
  - [convert-object-keys](#convert-object-keys)
  - [curry](#curry)
  - [diff](#diff)
  - [only-required-keys](#only-required-keys)
  - [union-to-intersection](#union-to-intersection)
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
  
### combine-latest

Difficulty: :space_invader::space_invader:

Play this with <a href="https://www.typescriptlang.org/play#code/PTAEGEHsFsAcBsCmAXRpkAs0DNL3pAO4CWAdgOagAGAxjAEZmIAyAhqgM7JWjYCupGsmKRSoACaIa8VgCd2I0gDoAUCDVgAKhmIdeAoYtC7QfDonGgSmUACUAHgCkAyqACCABQCSS0M8RoGMjIsBwAXCCy9gBWHEqSAG7ArLDEwGSS9sD8gsKiwHTQjKQs7IhcoKpkqLLYrDRoAPL05rIJrPRIADyaAHygAN4qoKAcfC00ssT0iAAUNPRhoLMJS5oAlKAAvP0JkMTi60t7BwDcKgC+KiqS0nI4BnlihcWlnMizSl9y5OGgza12p1EF1WKQAJ69ADaAF0jv8Wog2h1ugIANakIikWG9c4aUAAUXssCkqHE11uMlkaDopAqHAAjEsAUigd0uFMKLiblIqTTRPSAEzMxHI4FdUh8IpI7mU+6gWn0gDMIsBKJB9EgeEQYO5KheTDY71mjIANKNBeaOEr1koxhMpjNZrMoQkGeaEpbQAklXDtv0hiMQN6GaMMJA+PBLDNRshOeRhgqBchQNSxvBkEzY-HtiG8UGwJ6wxGo6AY5LpbJE4qU2nI8hhaAKzNZLnPfnQMGfcXI9G0JrtWDq8nU+V6yqy1qkGC20rzhd1ucgA" target="_blank">TypeScript playground</a> !

```typescript
// Complete the following `combineLatest` function declaration.
//
// This function is used with RxJS API. See https://rxjs.dev/api/index/function/combineLatest .
interface Observable<T> {
  subscribe(cb: (v: T) => void): void;
}

declare function combineLatest(...args: Observable<any>[]): Observable<unknown[]>;

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
  
### convert-object-keys

Difficulty: :space_invader::space_invader:

Play this with <a href="https://www.typescriptlang.org/play#code/PTAEGEHsFsAcBsCmAXRpkAs0ANwENpF4BLAL0QBMB5AIwCtEBjZbdAT1jUk4Cc9lIPdJFDR+jDOiygAZpHjxIAd2IA7AOahEAD07NKoRpFUViyYsYB0AKBC2wASTHq1Xek2SyeMUD0QBnWGN-LhlQAHVEGlAAQQAFB1BiOCRCVVQKUBo2UHg8DQBXPHU0JQxiCVBYPxlEIQAif1U8AGtEAFpGPBCKetAANzweYjwaJFBmwlAACkRLdUtQACUC7IBKGxBQACECzzZIAtAlfM8BQ2N+urPpP0DgtwZmf2FQSHdn44xIENA2theQzQ9S6hHgnW6lD6-mQww0-k2wHsoAAyiIDkdVIgDOdMMQXsgOFxePxBK8-NUAoh0gTpITOG8wpg0EZVFceBk3h9kAjrPS0PgwWRKLQnsgADwAFQAfKAALygAqqFqqZSqADc1mRAFFdB5KFr+aAAOLUur8ShLAJBVQhSVE+WgADe1lASQoAC5QDC4epNW6ZMQeDCAPqTRBen1qP2u3LdZBhggR72w6P+wx+C0UEP8L2qArQGh1TUAX011lZMN81oeoq9pqxfAyVvutsQ9oZCpdbuIntA9QAjAAGEdD+oAGljgeDCfDXvqAE0fgU2hPY3lQ3P+wBpAp8aDENduxiZjI55BegcANiHV4AzAAOACcQ6fACYP0-J2WtZXPKz2QyL1u3dSNUw0dNpxhAA5JMwN9dMN2QWDCHgtNYxPRAsxiC8JgLIseFLR0AOubdEABAAxbxoBRZo2jfQUiGmO4bRCUU1nLLZJWkOQFGUaNZCVZgLFUC42WuF5-heNQklUWA9i5MVXlBIgIR6FNfRsGQhPMYwxMAsjKOo2jWkQBik3gKUtG0VATBeK0jB4ChxSjDRx1AfI2GlaVpneOgvUlNYvUYkhyGobkpVlEC-z+ciXgVUUPEsKTfPoNYPJeVz1AAbQAXXTPxkD3USpMsPwKAKRhEGmaY8EYRh3JadK5Si2Nj2Cf8LOFChDMdJpTPMsFpia9M3UK4rnTat1QEsWa6oaqa3WylTQsoQzcq9PzspaXLJ2m0AfzdEt3KdEsMo81Q2A46wSy1LZvlNUB2llAAJSASmsbTVGEvSulgMw8FW6Y1Hk3CsvSkDxp4USQb2Sx-BIKrpiHdyBw2AQAFVYF4fAQmmdKAGpZNB+HEeqtHLAEAAZZQ6lx6rrtu5FvhKEM5BEZ7QDekoKMgSBPp0kTvTosy4m6Lp4GBuS9jQjQIdjKGYel5B4YQMxpnqEN6g2MRYGmP6AdWjY6EgNQNe10s7rAFnEDZvmntlG3ef5r6ftE-r6JCqXQdl9R5fa21PFgPqRbfMX-Al729musaUAm2BSYqaqUdACnqdpnh6fx0AiYThGk+mNHLaAA" target="_blank">TypeScript playground</a> !

```typescript
// Complete the `CamelizedObject` type operator to match the following expected condition.
//
// Imagine object from response of Web API implemented by language which prefer "snake-cased" variable name (e.g. Ruby).
// But you want to convert the response objects to objects whose keys are "camel-cased" strings.
//
// So you need to this type operator to represents the type of the converted objects.
type CamelizedObject<T> = unknown;

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
function convertKeysFromSnake2Camel<T extends Record<string, any>>(obj: T): CamelizedObject<T> {
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
```

<a href="https://www.typescriptlang.org/play#code/C4TwDgpgBAwghgWwgGwJYC8IBMDyAjAKwgGNgAeAFQD4oBeKAawhAHsAzKCqCAD2AgB2WAM5RhwAE6oBAcygB+KAG8oAbQAKUaY2btOUOKIDKAuEwBM8JMjLqqAXQBcnDfagBfKM4oBuAFB+oJBQJmYQ5uqGxHA2XLz8QqLiUrI09HF8giJQAAYAJErSbBASUAAS7gD6BUUlUABK7jl+UAq5BfBgqMAxGBBkZVTuBaEWkcLRNvVDza3Ond29mJRU-oHg0KPhViiU3JmJYpLSMmlQAKoC0V09aMtbEVExK6sBAPRvUACiPJCk2AEgtAAOKCEpwfhYeoQYRgFgCYQQCgbOjKFpaLDOZInfytNioCTiSqmJBY46yXFQZCGYDExAQMkpGSU4gSCAQ7CVCHOAQAVwQeBK-nca2I8PEUDZsPFEHwBGcoIE4Mh0OlCKRKPoSnRqExUAARABGAAMpuN+oANOj8YTaSSGQaAJosYS8piW9HUon25z6gDSvIkiFQHtarPZkK5wGchoAbMbYwBmAAcAE5janzFnU1aRQExQjgFACwA3EqQ5za1q6xk460E8QAOXptYpnppzdJRyZLLZHKwAEFo1A+QKhX5PPRS+W-cxhAAxCQsBAPHbIAAUUrh6rlAEo1h9OAALaBsFjIZAsADuJygbF5V2AqHhxfhZYkwFETBAom00jAvJFiwhAkEWwAsMW9LIAAtNEiJYN2JwAHR+Pej7PgIr4CO+wCzj+i7LquUF7PEWSiNCYoSFgZDYrIFoGAIIBUFQ67AfKnC7vMUF9LgIGkCsaJhuKRbfqI9ByqBSGiaxhC7gYSTkjIqj2JSbLAIGmGiUhbJYLyxAQOu65wMQxD0Qwcm0DQVatFhErRNYPF4aiwimBYa7ruZlKtGpGmCTZrRIYFxmmei-mqPZKCOcwThQGxqgMPYVr+XmrTuPRSieIYDEgPuE7vJ8R4sKCUDQTQZQsDIECoQ+pAYZBNxLAZ-6Aa2MhydZPkSJhzXAEhwhoPp67GvRhq7kh4HnGAkASPAiLrnJADUWgCABvX9agg2jeNLAADLXiUs0Gbl7j5VAhWVZUZ4QaV5QVRA84sCw1XoS+LlhI8EwxOuPWte16Kdd1K2AX1YBoMA676pU+pjQgcBgOu1yLHcEBjQQLDSBD0PCqd50QJdj0lTQuMPU9aG1a9rnbFB31A8OtFtX5BYSmAzmUx9kw06tuXeRA6ldVAYB9QNBnDVAW3gXtV4HYYR1QEtgvrZtx1+EAA" target="_blank">
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

<a href="https://www.typescriptlang.org/play#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXzGRhgE8AeAFXhAA8MRVgBneAMTU11QD4AKAKHhJUALngUANPwCUYqrXqMWvKGKypEIGPACCE+ADojcJhjUat8AELT4AXm7x1m7QCV4AfngqxO2w+8jA1gAcyYxG3tHdzFUEAA3LQBufn4AejT4AFEaAAdwemBUsDxTeChgYHtvVXhUZABbACMtfSbYxpaYf0coeABqeCaUktQyppw0KrsCIlIVSuleAEZpFPTMgAEMJgBaWnzMfeIcbQADCamz+CYAC0mIKqgwMBBcjHhl8pgQxoYMfiXRi8NapDLwbZ7A4FY4wU7wC6TRjXO4PJ4vN4fL6hP6oAFA4ArAAMRP0yxJa3g4NRyEe8AwtzhAHdqCcYMVSh94lAIMgQB1mpYZgTiUTQUA" target="_blank">
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

<a href="https://www.typescriptlang.org/play#code/C4TwDgpgBAJAIgSwGZIDwEEA0UBCA+KAXigG8oBtABSgQDsoBRAD2ACcBDAY2FQGsIQAeyRQsUfkJH4AugGoA-AC5RVaVAC+UAGSkK1OoyacANgFcAJhD4Dho7BNsyAtEpWU16gNwAob6EhQlKyCYADORKTeUDTmyrSmALYARhCsPtHACMDGEMqhbHQA5ulQwOyFoXkFtIXk0j5evpyCtPlQlkjspsbAQSHhxCRRpeWVFNKY3o1+4NAAShAAjqYIrBDmfWER8Mhom6HY-hC2HV09+3g+3s2twFBgwWEAjMoLy6vr+xFD0QixUE8AAyAyYZLI5ZQAIgSIHugnykMm0xubQe-QATK8lis1htHgNIr9-kCQcNMtlclBobCwPDgIiyaNlORIcBQpCJlMrgB6blQAACbKcECYkG4wtYwVY1xaqPxAGYse9cV9BsM-soSaCRhVmZzpryBUKRWLgBKpTLbvd8QAWJU4z7475k8GU6lwhFInxAA" target="_blank">
  Check out the answer.
</a>
  
### only-required-keys

Difficulty: :space_invader::space_invader:

Play this with <a href="https://www.typescriptlang.org/play#code/PTAECUFMAcBsEMDGlQBcAWLwAkDKoB7AMzU1CINlgIHcBLAOwHNQADKARwFc6AnSACYBpSAE8AzqzSjoKVAVABbeKkTpSKSAA9ZiVINDjIeugQYA6AFCoZWSNz6CREgDwAVAHygAvKADWYsSgbgDclpYgoACiOsb6AuE2sqAAqka8PqAA3pagoHQCAFygDFyKAEaQvGF5COKoAHLwipDF9byMTDXkfPVNLW2oHczdigUCsJD9kAD8g8NdlgC+YZaIZvWgAG7wsAXO4sWcPPzCYuIuaVUeANoAupk3AEQFTwA0oE91jc2Q759EXo-FpPO6rSIAAVQ4gAtNpdKg4bxeAQMgByMYCCZTX5o-LiUDwBiEaCoUwMXb+MT5YlXDJJSBrDaoGk7PZnCRHewnJznS7pW4PXzPTHY6agsJAA" target="_blank">TypeScript playground</a> !

```typescript
// Replace the RHS of the following `RequiredKeys` type to match the expected section.
type RequiredKeys<T> = keyof T;

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
```

<a href="https://www.typescriptlang.org/play#code/C4TwDgpgBAShCOBXAlgJwgEwNIRAZwB4AVAPigF4oBvAKCigG0AFKZAOygGtcB7AMyhEAugFoA-AC5qAXygQAHsAhsMeKE2QBjTsQA06smKhsIANwiooUpgG4a0htxD9BQuzQD0HqAFF5kTSUMGhpQSCgAVTwLCmo6VgwpNkQAWwAjCzt6ABsAQzxgADlclIgpAtR2AHMsqD40AuLS8uBKthr4lOQMDGyIJohJKArqu2l3TR42AqhTXOzunHwpOCQ0TCXCKIsSBiFYhgAibsP9Q7zGkohTqEP61EvSw7cQrygAAWA8EQUA4B-UKgeJYAORdHp9AYg1hqXIcHhgYDIKbzLi4VgcbaWMIQGiTabADFzBbYXB4FYIFDoUn4AhY3b7ShHcG9fpXZ52IA" target="_blank">
  Check out the answer.
</a>
  
### union-to-intersection

Difficulty: :space_invader::space_invader:

Play this with <a href="https://www.typescriptlang.org/play#code/PTAEGEHsFsAcBsCmAXRpkAs0DNL3pAO4CWAdgOagAGAqgEwCSV6AnrGspKNAIbIDGGdFlC58RMpUQAPfolj9UAE1D9IpJcWTF1AOgBQIavSar1AN0QAnZAGdRVmKACupHaVbt0XMqiu3ERXdPRANkNjQTAB4AFQA+UABeF1IAa1IiUgBufX1wrxoAqyTQAG99UFBiJQAuUFtkK0kcytIeaEQ6hqaKFtAeck7QUmdoACNrHIBfHLyI0AAFSAaS8srqrsbmiuH2oe7tyrHIJRZNnvJp2fzIooB5KyWV5MLrUAAfReXkWaMAATsAFoZOxFMCrI4rPo1KQVtIAIx1aKvKwPJ7IBLJNZVWqgABEAAk7gBxACieIANDs2h06niMJBBpSdgMhnQAAxUma5f5AkGBZDgyHQ9RwuhIxhRFFo76Yso7Db4gBidzuzNaezpuEg6tAx1OWsgXH1LGZ3JFsOQoGkAGYJQwpfdHrLVgrcXiAEIAQQASrqaUM8WMeFZday6hyqUcTmd8cHiiazTkgA" target="_blank">TypeScript playground</a> !

```typescript
// Complete the following `U2I` type to match the following excepcted condition.
// `U2I` converts from union type to intersection type.
type U2I<T> = unknown;

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
```

<a href="https://www.typescriptlang.org/play#code/C4TwDgpgBAqgTASQDwBUB8UC8UAUKoQAewEAdgCYDOUAhqSFAPy40BcUKAlFhnQ+6QgA3CACduREhWo42UAJakAZmKgBlbpl70m6qAOFiA3ACgToSLEqrsAbxNQF5dpWCjFAc1OPSNALYQLm6e3rQegVCkAK5+AEbGJgC+pubg0AAKAPauWFD2jvLOUK7upF4Okf4RJSEVsZnkIEGl5clmFtAw1qIA8qJZOdhdqgA+UAPAKQD0U1AAAsCUALREkADGwCuiopmiJmuZpDmEAIzs8MjDvf3ZwBh2FYXsAEQAEj0A4gCizwA0Fb4Ai8ABaZcJ-Co0cLsOAABn+bRMM3mixWhHWmzEOz2ByOwCghDg50QSCufQm9zyjyKzwAYj0ehCfFUXkpMpkmVB6o1WeyuQ0QBDEbjjgBmYmXbrk26U-JOF4AIQAggAlTmAiLPWI0UScqEROH-RzcppQLU6-mNIWmIA" target="_blank">
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

<a href="https://www.typescriptlang.org/play#code/C4TwDgpgBAQlC8UCMUA+UAMBuAUAejyjACcJhgBLCYgWgoHMA7Ae1J1EigCUBXAGwhIkGADwAVKBAAewCIwAmAZygBtGABpYmmAF0AfAhxQoE6bIXKVSTdeQ6oAfkxQAXEZOSZcpatu2M9k4obsamXha+mhg2gciu7mHmPlZRUbEY8aGeSZbRyDGOcSEeZt65NmmFwQnZZap5eUix1VmlESoNlU4ZxYwQAG7UuOzg0LwC4rXtGlqw+gjc-ILC4nrDHNAAwhB8fAsA3u79AIZ8LrC4xsQMABbADufbu7gAvuuj3LfAk20+T3wGRCJOr7KDXeh3c4URgAM2o3CgL0KXFcUFBJzOzjeOBGnDExwofH+IgAMhAYcAAGqnKY+GbAiL-QFoo6nc7jCAiFRkinUviaMQqABEGKFOk0XC+q2Fop0+kuYK+50OxmMGPZSy5gpFpzFqUw8vc2OxuOgAFkKPJ5AJiTyqTTfsp6bTlEyFgyfKDwZCoP9Ee4nCrVWq2YsJtzyfb+SYZbrxZ8Id8xHpY3wxYbg1clVALVabTs+OJU3qE3dVmt3MYXu5zvjCbbI3yBRXTVAABIQY7yYke10F5lB9VhzkdfXa2UZxWJ86560QYl5ZOvd6cACqjEUNwoFPEmlXLqgx0YIBU80QAAVjsRjgBbMjURQiAAUMIoxEUwFrmgAdL-SB-zlXABKBADCPEAWw2ExmDEHgwAmXtfX7A53Awc4VHHOMdAVJBAI3Lcd0wtN4zEGC4ImSVE3LCsXgwg8vWzP0kSCVEAhXLYC34K8AEEeGAZgb2OfjGBEAA5A9GB4G8ACNqAFA8-UQdFQxQF49wPcDTwWU8B1Q2syPgzkl3cXCkN2LjiF4-jBOEsTNA7Lsez0Pd8O3b48lXPQaJUVdhQERh6GAG4xQPcTulRJphgIKAAFEpEgABjWR5BxBLmA3YAoEUNCzL4CyrIEoT0pEDBmUzcrfHsaKSDIShqDoJhWAgHA0oyrLTP+fK+MK2ykDKirjBSawAigarSHIKhaAYFg2Faj8soAJkeTi+B47qbOKhb+vKob1GG9QRrG2rJoambmrmzLFAAZmW8zVss9aipEq7ttVXbon26JDsIGqJvq6ampa9L5sUAAWW68vugqNpE0HXt26xEYO5Gvqqn7xrqqbGtm4HLoAVghrrrKekQ8f696Ub2ymvoOtGiAxk6AZxtrFAANkJqHHts1nmQRymkZpwXadG9Hjv+7HmqAA" target="_blank">
  Check out the answer.
</a>
  
### randomize

Difficulty: :space_invader::space_invader::space_invader:

Play this with <a href="https://www.typescriptlang.org/play#code/PTAEGEHsFsAcBsCmAXRpkAs0AMBKBDAOwBMZt0BPWRAOgChkq0CSZQBeUAV0IGtDIAd0IBuOnWKIAxvHwAnNFMiEAzslByipaAC5QLbWLpLV6-B1ABvUADd88Loj0BGUAF9Q+FaBNqxv9QAjC2s7BydQACZ3T28A-2U1HxDbe0c9AGYYrx9E5CMQUABRAA9qKVRiHTpCgBUsUGxNVmhyBWQuOUJKalAVDEgueGJQQLQvFQBLAHNCfECkdAxJ70ZeogFkfGRJ5XpjPNTwgEEAIQtm7QAKfAAaUYBKBNMjxzPwC60YG-vA+6knuIAqASnprAp8KRCPAKK8Iq4PAAfKwaRCQ5QwuF6aIeThhN6nZ5JChg1Ho6Gw-HwmLI8FoqGYqnYmkoiEMylpCJZXFw95iIA" target="_blank">TypeScript playground</a> !

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
const y: { readonly value: 1 } | { readonly value: 2 } | { readonly value: 3 } = valueABC;
```

<a href="https://www.typescriptlang.org/play#code/C4TwDgpgBAqgdgSwPZwDwDUA0soQB7ARwAmAzlAIZwgDaAugHxQC8UA3gFBRQAMAXFHQBuLlACMAgBSSAdHIBuAmAEoWTKiFX5CJcpIAWECsQEI4AMwgAnKAAkjxbHJnAKCADamL1qABU37qrM6tRQAPywiCgYUAA+dg7Y-h5MAnAQ8tYiAL40MDQARO5EAObA+gV0uAREZLzh9QJidCIcoJBQAEpUxEgAtixQqL7YMNU6dRr0DJLmCFakwAIjUM5WEH1wVEuwQUzwyGgrMAytxBAAxu4U61AXKItQVj39At0k-a33cI8Ug2xQeQUdwAVwgTSg2Uo5G+ixEsOAUAARv9AcCwQIAEyQ6F3B7AeH4u6ooGg8FQADMOIoMPxrQA9PSoABRPCQC6EEwcRl+QxQAAGzw+fX5TwgwBBVjgUHa0FI+iQIPcxGR0BppAQJS2SOKMv0CHIssocDgSFcwEOMg4HARaLJAEEAEKDIW9PqSCjYJHKQk-RGksFOgDCLpe7s9yOwFx91tteAEAPWxhQ7hAdox4hx8UTDhTaYD5OxUNYBadvseIATYuTcFT6fJYiz7GrvVr+fRhabOZrdYLAipxfrwZEQA" target="_blank">
  Check out the answer.
</a>
  
## How to create new exercise
Read [CONTRIBUTING.md](./CONTRIBUTING.md).

## LICENSE

MIT
