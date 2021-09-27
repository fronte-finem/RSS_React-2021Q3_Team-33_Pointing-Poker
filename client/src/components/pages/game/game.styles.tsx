import styled from 'styled-components';

export const Page = styled.div`
  width: 100%;
  padding: 20px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export const Header = styled.div`
  grid-area: top;
`;

export const Center = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
`;

export const Footer = styled.div`
  grid-area: bottom;
`;
