import { css } from 'styled-components';

enum Shadows {
  NONE = 'none',
  MAIN = '2px 4px 4px rgba(0, 0, 0, 0.3)',
  MEDIUM = '0px 6px 8px rgba(0, 0, 0, 0.3)',
  LARGE = '0px 15px 10px rgba(0, 0, 0, 0.15)',
  WRAPPER = '0px 4px 8px rgba(0, 0, 0, 0.15)',
  HOVER = '4px 6px 8px rgba(0, 0, 0, 0.2)',
  TEXT = '0 4px 4px rgba(0, 0, 0, 0.25)',
}

export const shadowNone = css`
  box-shadow: ${Shadows.NONE};
`;

export const shadowMain = css`
  box-shadow: ${Shadows.MAIN};
`;

export const shadowMedium = css`
  box-shadow: ${Shadows.MEDIUM};
`;

export const shadowLarge = css`
  box-shadow: ${Shadows.LARGE};
`;

export const shadowWrapper = css`
  box-shadow: ${Shadows.WRAPPER};
`;

export const shadowHover = css`
  box-shadow: ${Shadows.HOVER};
`;

export const shadowText = css`
  text-shadow: ${Shadows.TEXT};
`;
