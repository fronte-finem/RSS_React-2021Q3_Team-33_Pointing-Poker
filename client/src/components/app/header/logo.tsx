import React from 'react';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import Icon from '@ant-design/icons';
import { StyledLogoSvg } from '@client/components/app/header/header.styles';

const SHADOW: React.SVGProps<SVGFEBlendElement> = {
  mode: 'normal',
  in2: 'BackgroundImageFix',
  result: 'effect1_dropShadow',
};
const SHAPE: React.SVGProps<SVGFEBlendElement> = {
  mode: 'normal',
  in: 'SourceGraphic',
  in2: 'effect1_dropShadow',
  result: 'shape',
};
const HARD_ALPHA: React.SVGProps<SVGFEColorMatrixElement> = {
  in: 'SourceAlpha',
  type: 'matrix',
  values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
  result: 'hardAlpha',
};
const MATRIX: React.SVGProps<SVGFEColorMatrixElement> = {
  type: 'matrix',
  values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0',
};
const SIZE1: React.SVGProps<SVGFilterElement> = {
  width: '78.7107',
  height: '78.7107',
};
const SIZE2: React.SVGProps<SVGFilterElement> = {
  width: '24.38',
  height: '33.632',
};
const TYPE: React.SVGProps<SVGFilterElement> = {
  filterUnits: 'userSpaceOnUse',
  colorInterpolationFilters: 'sRGB',
};

const Filter = (props: React.SVGProps<SVGFilterElement>) => (
  <filter {...props} {...TYPE}>
    <feFlood floodOpacity="0" result="BackgroundImageFix" />
    <feColorMatrix {...HARD_ALPHA} />
    <feOffset dy="4" />
    <feGaussianBlur stdDeviation="2" />
    <feComposite in2="hardAlpha" operator="out" />
    <feColorMatrix {...MATRIX} />
    <feBlend {...SHADOW} />
    <feBlend {...SHAPE} />
  </filter>
);

const RHOMBUS =
  'M4 35.3553L39.3553 8.22544e-06L74.7107 35.3553L39.3553 70.7107L4 35.3553Z';
const LETTER2 =
  'M42.7754 35.3554L42.9194 23.6554L42.7754 10.2274C42.7754 10.2274 43.0514 10.2034 43.6034 10.1554C44.1554 10.1074 44.8754 10.0474 45.7634 9.97539C46.6754 9.90339 47.6474 9.84339 48.6794 9.79539C49.7354 9.74739 50.7554 9.72339 51.7394 9.72339C54.0914 9.72339 55.9154 10.4434 57.2114 11.8834C58.5074 13.3234 59.1554 15.4834 59.1554 18.3634C59.1554 20.1634 58.9154 21.6514 58.4354 22.8274C57.9794 23.9794 57.3554 24.8914 56.5634 25.5634C55.7954 26.2114 54.9314 26.6794 53.9714 26.9674C53.0114 27.2314 52.0154 27.3634 50.9834 27.3634C50.1434 27.3634 49.3274 27.3394 48.5354 27.2914C47.7434 27.2434 47.2274 27.2074 46.9874 27.1834V35.3554H42.7754ZM51.1634 23.9074C52.5074 23.9074 53.3954 23.7034 53.8274 23.2954C54.1634 22.9594 54.4034 22.3594 54.5474 21.4954C54.6914 20.6314 54.7634 19.4794 54.7634 18.0394C54.7634 16.8634 54.7034 15.9754 54.5834 15.3754C54.4634 14.7754 54.3194 14.3554 54.1514 14.1154C54.0074 13.8514 53.8634 13.6594 53.7194 13.5394C53.5274 13.3954 53.1794 13.2754 52.6754 13.1794C52.1954 13.0594 51.6074 12.9994 50.9114 12.9994C50.1434 12.9994 49.3994 13.0354 48.6794 13.1074C47.9834 13.1794 47.4194 13.2514 46.9874 13.3234V23.5474C47.1794 23.5954 47.6714 23.6674 48.4634 23.7634C49.2794 23.8594 50.1794 23.9074 51.1634 23.9074Z';
const LETTER1 =
  'M23.7754 59.3554L23.9194 47.6554L23.7754 34.2274C23.7754 34.2274 24.0514 34.2034 24.6034 34.1554C25.1554 34.1074 25.8754 34.0474 26.7634 33.9754C27.6754 33.9034 28.6474 33.8434 29.6794 33.7954C30.7354 33.7474 31.7554 33.7234 32.7394 33.7234C35.0914 33.7234 36.9154 34.4434 38.2114 35.8834C39.5074 37.3234 40.1554 39.4834 40.1554 42.3634C40.1554 44.1634 39.9154 45.6514 39.4354 46.8274C38.9794 47.9794 38.3554 48.8914 37.5634 49.5634C36.7954 50.2114 35.9314 50.6794 34.9714 50.9674C34.0114 51.2314 33.0154 51.3634 31.9834 51.3634C31.1434 51.3634 30.3274 51.3394 29.5354 51.2914C28.7434 51.2434 28.2274 51.2074 27.9874 51.1834V59.3554H23.7754ZM32.1634 47.9074C33.5074 47.9074 34.3954 47.7034 34.8274 47.2954C35.1634 46.9594 35.4034 46.3594 35.5474 45.4954C35.6914 44.6314 35.7634 43.4794 35.7634 42.0394C35.7634 40.8634 35.7034 39.9754 35.5834 39.3754C35.4634 38.7754 35.3194 38.3554 35.1514 38.1154C35.0074 37.8514 34.8634 37.6594 34.7194 37.5394C34.5274 37.3954 34.1794 37.2754 33.6754 37.1794C33.1954 37.0594 32.6074 36.9994 31.9114 36.9994C31.1434 36.9994 30.3994 37.0354 29.6794 37.1074C28.9834 37.1794 28.4194 37.2514 27.9874 37.3234V47.5474C28.1794 47.5954 28.6714 47.6674 29.4634 47.7634C30.2794 47.8594 31.1794 47.9074 32.1634 47.9074Z';

export const LogoSvg = () => (
  <StyledLogoSvg viewBox="0 0 79 79" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <Filter id="filter_rhombus" x="0" y="0" {...SIZE1} />
      <Filter id="filter_letter2" x="38.7754" y="9.72339" {...SIZE2} />
      <Filter id="filter_letter1" x="19.7754" y="33.7234" {...SIZE2} />
    </defs>
    <g className="rhombus" filter="url(#filter_rhombus)">
      <path d={RHOMBUS} />
    </g>
    <g className="letter2" filter="url(#filter_letter2)">
      <path d={LETTER2} />
    </g>
    <g className="letter1" filter="url(#filter_letter1)">
      <path d={LETTER1} />
    </g>
  </StyledLogoSvg>
);

export const Logo = (props: CustomIconComponentProps) => (
  <Icon component={LogoSvg} {...props} />
);
