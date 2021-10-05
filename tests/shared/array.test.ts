import {
  countItems,
  getFibonacciSequence,
  getFirst,
  getLast,
  getPow2Sequence,
  getSequenceOfTens,
  toggleItem,
  zip,
} from '@shared/utils/array';

describe('Zip arrays', () => {
  it.each([
    { arr1: [], arr2: [], expected: [] },
    { arr1: [42], arr2: [], expected: [] },
    { arr1: [], arr2: ['a'], expected: [] },
    { arr1: [1], arr2: ['a'], expected: [[1, 'a']] },
    { arr1: [1, 2], arr2: ['a'], expected: [[1, 'a']] },
    { arr1: [1], arr2: ['a', 'b'], expected: [[1, 'a']] },
    {
      arr1: [1, 2, 3, 4, 5],
      arr2: ['a', 'b', 'c'],
      expected: [
        [1, 'a'],
        [2, 'b'],
        [3, 'c'],
      ],
    },
  ])('for $arr1 and $arr2 expect: $expected', ({ arr1, arr2, expected }) => {
    expect(zip(arr1, arr2)).toEqual(expected);
  });
});

describe('Get 10 items from sequences', () => {
  const tens = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
  const pow2 = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];
  const fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

  it(`tens`, () => {
    expect(getSequenceOfTens(10)).toEqual(tens);
  });
  it('power of 2', () => {
    expect(getPow2Sequence(10)).toEqual(pow2);
  });
  it(`fibonacci`, () => {
    expect(getFibonacciSequence(10)).toEqual(fibs);
  });
});

describe.each([
  { arr: [], first: undefined, last: undefined },
  { arr: [42], first: 42, last: 42 },
  { arr: [-42, 42], first: -42, last: 42 },
])('Get for $arr', ({ arr, first, last }) => {
  it(`first: ${first}`, () => {
    expect(getFirst(arr)).toBe(first);
  });
  it(`last: ${last}`, () => {
    expect(getLast(arr)).toBe(last);
  });
});

describe('Count items', () => {
  it.each([
    { arr: [], expected: new Map() },
    { arr: [42], expected: new Map([[42, 1]]) },
    {
      arr: [1, 2, 1, 3, 1, 2, 1],
      expected: new Map([
        [1, 4],
        [2, 2],
        [3, 1],
      ]),
    },
  ])('for $arr expect: $expected', ({ arr, expected }) => {
    expect(countItems(arr, (x) => x)).toEqual(expected);
  });
});

describe('Toggle item', () => {
  it.each([
    { item: 42, arr: [], expected: [42] },
    { item: 42, arr: [42], expected: [] },
    { item: 42, arr: [1, 2, 3], expected: [1, 2, 3, 42] },
    { item: 42, arr: [1, 2, 3, 42], expected: [1, 2, 3] },
    { item: 42, arr: [42, 42, 42], expected: [] },
  ])('for $item and $arr expect: $expected', ({ item, arr, expected }) => {
    expect(toggleItem(item)(arr)).toEqual(expected);
  });
});
