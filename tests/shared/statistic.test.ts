import { calcAverage, calcMedian } from '@shared/utils/statistic';

describe.each([
  { arr: [], average: NaN, median: NaN },
  { arr: [42], average: 42, median: 42 },
  { arr: [0, 42], average: 21, median: 21 },
  { arr: [3, 6, 0], average: 3, median: 3 },
  { arr: [-3, -6, 0], average: -3, median: -3 },
  { arr: [-3, 6, 0], average: 1, median: 0 },
  { arr: [3, 6, 1, 0], average: 2.5, median: 2 },
  { arr: [-3, -6, -1, 0], average: -2.5, median: -2 },
  { arr: [-3, 6, -1, 0], average: 0.5, median: -0.5 },
])('Calc for $arr', ({ arr, average, median }) => {
  it(`average expected: ${average}`, () => {
    expect(calcAverage(arr)).toBe(average);
  });

  it(`median expected: ${median}`, () => {
    expect(calcMedian(arr)).toBe(median);
  });
});
