import { css } from 'styled-components';

const mainFont = css`
  font-family: 'Noto Sans', sans-serif;
`;

const secondaryFont = css`
  font-family: 'Roboto', sans-serif;
`;

export const fontTitle = css`
  ${mainFont};
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`;

export const fontSubtitle = css`
  ${mainFont};
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`;

export const fontText = css`
  ${secondaryFont};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const fontButton = css`
  ${mainFont};
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const fontMainPage = css`
  ${secondaryFont};
  font-weight: 700;
  font-size: 46px;
  line-height: 54px;
`;

export const fontAvatar = css`
  ${secondaryFont};
  font-weight: 700;
  font-size: 46px;
  line-height: 54px;
`;
