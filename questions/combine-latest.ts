import "type-dungeon";

/**
 *
 * @typeQuestion
 * Complete the following `combineLatest` function declaration. 
 *
 * This function is used with RxJS API. See https://rxjs.dev/api/index/function/combineLatest .
 *
 * @difficulty medium
 */
interface Observable<T> {
  subscribe(cb: (v: T) => void): void;
}

/**
 * @remove
 */
type Unboxing<T> = T extends Observable<infer S> ? S : never;

/**
 * @replaceTo
 * ```
 * declare function combineLatest(...args: Observable<any>[]): Observable<unknown[]>
 * ```
 */
declare function combineLatest<U extends Observable<any>[]>(...args: U): Observable<{
  [P in keyof U]: Unboxing<U[P]>;
}>;

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
