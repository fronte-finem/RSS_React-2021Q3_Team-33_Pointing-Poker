import { css } from 'styled-components';

export const mainFont = css`
  font-family: 'Noto Sans', sans-serif;
`;

export const secondaryFont = css`
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

export const fontTextSmall = css`
  ${secondaryFont};
  font-weight: 100;
  font-size: 12px;
  line-height: 15px;
`;

export const fontButton = css`
  ${mainFont};
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
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
