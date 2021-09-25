import styled from 'styled-components';
import { Button } from '@client/components/shared/button/button';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  text-align: left;
  color: ${({ theme }) => theme.fg};
  font-family: var(--font-ruda);
  font-weight: bold;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
`;

export const StyledTitleBtn = styled(Button)`
  min-width: 50px;
`;

export const StyledBtn = styled(Button)<{ selected: boolean }>`
  --alpha: ${({ selected }) => (selected ? '1' : '0.5')};
  min-width: 50px;
  opacity: var(--alpha);
`;
