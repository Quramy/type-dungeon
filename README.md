<!-- This is a generated file. Don't touch directly! -->

# Type Dungeon

### awaited

<a href="https://www.typescriptlang.org/v2/play?#code/PTAEFEBMEsBdVgCwKagE7QOaPoghgHaSgDO0kqsA9qALZ6wDGiCKoAZlQDZdUDu0AplDIAHgAdkjWMmKwAnpNCMqRONFUkAdACgFSgIJ88cWQB4AKgD5QAXlCF5Abh17FqAAoBGO6A9oqWmgSZDMSWAwhKxd9TwAmX39A4NCkoJCwiMFMK2jXEBEJKRlINyUAZR97IxMSs29o0AKSRCoAVy5iACNUcMjMGPdQcoTq41NIerjG5sQ2ju7erKEEKioXIA" target="blank">
  Play this via TypeScript playground !
</a>

```
// Edit the right hand side to match the following expected type conditions.
type Awaited<T> = any;

type P1 = Promise<string>;
type P2 = Promise<Promise<string>>;

// expected
type S1 = Awaited<P1>; // should be string;
type S2 = Awaited<P2>; // shuuld be string too;

```

<a href="https://www.typescriptlang.org/v2/play?#code/PTAEFEBMEsBdVgCwKagE7QOaPoghgHaSgDO0kqsA9qALZ6wDGiCKoAZlQDZdUDu0AplDIAHgAdkjWMmKwAnpNCMqRONFUkAdACgFSgIJ88cWQB4AKgD5QAXlAAKCyNEyiJUAAU0VWtBLIADLQANbIZoLsyGigABo2APygAN6gAAwAXKBGJjKQZvGgAL6gWamZoM5FAJQA2mkAugDcOnqKqJ4AjHZePn4BZiSwGEJWLfodAEw93r7+4bP94UMjmFZjrSAuktKybUoAyt32Oab5XWOgWySIVACuXMQARqgrgpjj7aAH0yfGZ2ZPJNLtdEHcHs9XsN3ggqFQWkA" target="blank">
  Example answer. 
</a>

### curry

<a href="https://www.typescriptlang.org/v2/play?#code/PTAEGEHsFsAcBsCmAXRpkAs0DMCuA7AY2QEtJ90BPWNZSUaAQ2UI3S1G0nnkgHcS+AOahEADxrFEAEyo1QhctJKlyAOgBQ0xIXiMATjgLEyFQrn37KACmz4AXKABix1fgCUjxvkoBuDRogoACiEjqo0gGK+ADOyKCM0rIAvKDWjI74uNAARoj6ADSgOZnZefruoMkAfAmgANTF-tFxxZAEKQoWVulJ7tYAjO7+Oe340tbDoEExGO3wspj6-KKWkPoaox2DAAw7RQN7UzNzuAvsy3yryxsaLfEAbozwuIiluflVbduHO8dgs3msgAcgB5AAqFxW+RuGiAA" target="blank">
  Play this via TypeScript playground !
</a>

```
// Complete the function type to match the following expected type condition.
declare function curry(fn: Function): any;

// Expected

const add = (a: number, b: number) => a + b;
const bound = curry(add)(1);
bound(); // should throw error
bound(100, 100); // should throw error

const value: number = bound(100); // should NOT throw error

```

<a href="https://www.typescriptlang.org/v2/play?#code/PTAEGEHsFsAcBsCmAXRpkAs0DMCuA7AY2QEtJ90BPWNZSUaAQ2UI3S1G0nnkgHcS+AOahEADxrFEAEyo1QhctJKlyAOgBQ0xIXiMATjgLEyFQrn37KAHgAqosanzSAzqABix1fgB8ACg1QTnwALlBbABoNAEow+3EnV1A-RjDBbER9UABBCNA1AsMXZDT8DKyAIWjQAF4fUHTM0AAlUAB+ZNSc6rrkgrUDIRcwqtr61rD8RAA3TIBuDQ0QUABRCR1UaUXFfGLQRmlZGs7J3GgAI0y889OLzJ76xlAAalBzhZ2988gCI4ULKwpQ7RPwARmiC2+vz8ENAyxcGB+8FkmH0-FElkg+g0UOcYIADPi8qDCbD4YjcMj2Gi+Bi0diNJ9kKBpox4LhELdLlljrjpAT8WSwAikbIAHIAeXsqPRmXpGiAA" target="blank">
  Example answer. 
</a>

## LICENSE

MIT
