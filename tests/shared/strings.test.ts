import { abbreviation, words } from '@shared/utils/string';

describe('Parse words', () => {
  it.each([
    { text: '', expected: [] },
    { text: '     ', expected: [] },
    { text: '  abc  ', expected: ['abc'] },
    { text: '  abc  xyz  ', expected: ['abc', 'xyz'] },
    { text: '  a b c x y z  ', expected: ['a', 'b', 'c', 'x', 'y', 'z'] },
  ])('for "$text" expect: $expected', ({ text, expected }) => {
    expect(words(text)).toEqual(expected);
  });
});

describe('Get abbreviation', () => {
  it.each([
    { text: '', expected: '' },
    { text: '     ', expected: '' },
    { text: '  abc  ', expected: 'a' },
    { text: '  abc  xyz  ', expected: 'ax' },
    { text: '  a b c x y z  ', expected: 'abcxyz' },
  ])('for "$text" expect: "$expected"', ({ text, expected }) => {
    expect(abbreviation(text)).toEqual(expected);
  });
});
