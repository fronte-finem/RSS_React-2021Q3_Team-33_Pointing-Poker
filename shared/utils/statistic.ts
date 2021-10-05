export function calcMedian(values: number[]): number {
  if (values.length === 0) return NaN;
  const half = Math.floor(values.length / 2);
  values.sort((a, b) => a - b);
  return values.length % 2
    ? values[half]
    : (values[half - 1] + values[half]) / 2;
}

export function calcAverage(values: number[]): number {
  if (values.length === 0) return NaN;
  const total = values.reduce(
    (acc, value) => ({
      count: acc.count + 1,
      sum: acc.sum + value,
    }),
    { count: 0, sum: 0 }
  );
  return total.sum / total.count;
}
