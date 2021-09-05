import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: string;
    componentColor: string;
    componentHover: string;
    fontComponentColor: string;
  }
}
