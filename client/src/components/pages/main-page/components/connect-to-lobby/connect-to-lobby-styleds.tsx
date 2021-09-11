import styled from 'styled-components';

export const StyledTitle = styled.p`
  font-family: ' Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 75px;
`;
export const StyledText = styled.p`
  font-family: ' Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin: 0;
`;
export const StyledWrapper = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  padding-bottom: 80px;
  text-align: left;
  float: left;
  gap: 8px;
`;

export const StyledObserver = styled.div`
  position: absolute;
  top: 10px;
  right: -300px;
  display: flex;
  width: 200px;
  justify-content: center;
  align-items: center;
`;
