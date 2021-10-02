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

export const getSequenceOfTens = (size: number): number[] =>
  Array(size)
    .fill(0)
    .map((_, i) => 10 * i);

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

export function getFirst<T>(array: T[]): T | undefined {
  if (array.length < 1) return undefined;
  return array[0];
}

export function getLast<T>(array: T[]): T | undefined {
  const lastIndex = array.length - 1;
  if (lastIndex < 0) return undefined;
  return array[lastIndex];
}

export function modifyItem<A>(
  array: A[],
  predicate: (a: A) => boolean,
  modify: (a: A) => A
): A[] {
  const index = array.findIndex(predicate);
  if (index < 0) return [...array];
  return [
    ...array.slice(0, index),
    modify(array[index]),
    ...array.slice(index + 1),
  ];
}

export function toggleItem<T>(item: T) {
  return (prevArray: T[]): T[] => {
    const nextArray = prevArray.filter((elem) => elem !== item);
    if (nextArray.length === prevArray.length) {
      nextArray.push(item);
    }
    return nextArray;
  };
}

export function countItems<T, X>(
  array: T[],
  getValue: (item: T) => X
): Map<X, number> {
  return array.reduce((acc, item) => {
    const value = getValue ? getValue(item) : item;
    const count = acc.get(value) || 0;
    acc.set(value, count + 1);
    return acc;
  }, new Map());
}

// p1 - 0..4
// p2 - 5..9
export function getPage<T>(array: T[], page: number, pageSize = 5): T[] {
  if (page < 0) return [];
  if (page === 0) return array.slice();
  const b = page * pageSize;
  const a = b - pageSize;
  return array.slice(a, b);
}
