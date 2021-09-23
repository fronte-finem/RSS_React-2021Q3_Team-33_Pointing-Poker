export class Store<T> {
  constructor(private key: string) {}

  public save = (data: T): void => {
    window.localStorage.setItem(this.key, JSON.stringify(data));
  };

  public load = (initialData: T): T => {
    const data = window.localStorage.getItem(this.key);
    if (!data) return initialData;
    return JSON.parse(data);
  };
}
