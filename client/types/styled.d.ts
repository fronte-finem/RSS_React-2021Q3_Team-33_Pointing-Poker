import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: string;
    fontColor: string;
    componentColor: string;
    componentHover: string;
    fontComponentColor: string;
  }
}
