import styled from 'styled-components';

export const StyledGameCard = styled.div`
  width: 130px;
  height: 210px;
  background-color: ${(props) => props.theme.bg};
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.componentColor};
`;

export const StyledCardScore = styled.p`
  font-size: 70px;
  margin: 0;
`;
export const StyledCardScoreType = styled.p`
  position: absolute;
  font-size: 20px;
  margin: 0;
`;
