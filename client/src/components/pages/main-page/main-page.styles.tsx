import styled from 'styled-components';

export const StyledMainPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 26px;
  box-shadow: ${(props) => props.theme.content.wrapper.shadow};
`;
