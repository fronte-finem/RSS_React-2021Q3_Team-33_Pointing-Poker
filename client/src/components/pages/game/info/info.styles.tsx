import styled from 'styled-components';

export const TitleWrapper = styled.div`
  padding: 15px 0 30px;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;
`;

export const Center = styled.div`
  margin: 0 auto;

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const DealerWrapper = styled(Center)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ControlWrapper = styled(Center)``;
