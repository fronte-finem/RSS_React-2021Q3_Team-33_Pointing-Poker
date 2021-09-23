import { action, makeObservable, observable } from 'mobx';
import { DefaultTheme } from 'styled-components';
import { darkTheme, lightTheme } from '@client/themes/themes';
import { Store } from '@client/utils/store';

const THEME_STORE_KEY = 't33-pp:is-dark-theme';

interface StoreData {
  isDark: boolean;
}

export class ThemeState {
  private store = new Store<StoreData>(THEME_STORE_KEY);

  @observable public theme: DefaultTheme;
  @observable public isDark: boolean;

  constructor() {
    makeObservable(this);
    const { isDark } = this.store.load({ isDark: false });
    this.isDark = isDark;
    this.theme = isDark ? darkTheme : lightTheme;
  }

  @action public darkOn() {
    this.theme = darkTheme;
    this.isDark = true;
    this.store.save({ isDark: true });
  }

  @action public lightOn() {
    this.theme = lightTheme;
    this.isDark = false;
    this.store.save({ isDark: false });
  }
}
