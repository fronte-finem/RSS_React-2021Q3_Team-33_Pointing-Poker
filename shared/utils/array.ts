export type Pair<A, B> = readonly [x: A, y: B];

export type BiFunc<A, B, C> = (x: A, y: B) => C;

export type ZipWith<A, B, C> = (func: BiFunc<A, B, C>) => BiFunc<A[], B[], C[]>;

export type Zip<A, B> = BiFunc<A[], B[], Pair<A, B>[]>;

/**
 * Merge two array with some function that take two args - elements from each array
 */
export function zipWith<A, B, C>(func: BiFunc<A, B, C>) {
  return (arrayA: A[], arrayB: B[]) =>
    Array(Math.min(arrayA.length, arrayB.length))
      .fill(0)
      .map((_, i) => func(arrayA[i], arrayB[i]));
}

/**
 * Merge two array in one array where each element is pair
 */
export function zip<A, B>(arrayA: A[], arrayB: B[]): Pair<A, B>[] {
  return zipWith((x: A, y: B) => [x, y] as const)(arrayA, arrayB);
}

export function getRandomItem<A>(arrayA: A[]): A {
  return arrayA[Math.trunc(Math.random() * arrayA.length)];
}
