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

export const getPow2Sequence = (size: number): number[] =>
  Array(size)
    .fill(0)
    .map((_, i) => 2 ** i);

export const getFibonacciSequence = (size: number): number[] => {
  if (size < 1) return [];
  let i = 1;
  let prev = 0;
  let curr = 1;
  const fibArray = [prev];

  while (i < size) {
    fibArray.push(curr);
    [prev, curr] = [curr, curr + prev];
    i += 1;
  }
  return fibArray;
};

export function repeatCurry<A>(num: number): (arrayA: A[]) => A[] {
  return (arrayA: A[]) => Array(num).fill(arrayA).flat();
}

export function repeat<A>(arrayA: A[], num: number): A[] {
  return Array(num).fill(arrayA).flat();
}
