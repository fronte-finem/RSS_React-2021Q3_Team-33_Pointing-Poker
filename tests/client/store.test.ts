import { Store } from '@client/utils/store';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
  removeItem: jest.fn(),
  key: jest.fn(),
};
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

const TOKEN = 'test store key';
const store = new Store<{ x: number }>(TOKEN);

describe('Test Store', () => {
  it('set item', async () => {
    const data = { x: 123 };
    store.save(data);
    expect(window.localStorage.setItem).toBeCalledWith(
      TOKEN,
      JSON.stringify(data)
    );
  });

  it('get item', async () => {
    const initialData = { x: 42 };
    const result = store.load(initialData);
    expect(window.localStorage.getItem).toBeCalledWith(TOKEN);
    expect(result).toEqual(initialData);
  });
});
