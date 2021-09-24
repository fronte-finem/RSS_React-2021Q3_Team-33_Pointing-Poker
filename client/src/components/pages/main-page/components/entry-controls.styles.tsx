import styled from 'styled-components';
import { Button } from '@client/components/shared/button/button';
import { Input } from '@client/components/shared/input/input';
import { FormItem } from '@client/components/shared/form-item/form-item';
import { fontMainPage, fontText } from '@client/themes/typography';

export const StyledControlsWrapper = styled.div`
  max-width: 516px;
  width: 100%;
  margin-right: auto;
`;

export const StyledTitle = styled.div`
  ${fontMainPage}

  color: ${({ theme }) => theme.pages.main.title};
  margin: 30px 0;
  text-align: center;
`;

export const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

export const StyledCustomRow = styled(StyledRow)`
  align-items: flex-start;
`;

export const StyledFormItem = styled(FormItem)`
  flex: 1 1;
  min-width: 250px;
  width: auto;
  margin: 0;
`;

export const StyledInput = styled(Input)`
  width: 100%;
`;

export const StyledButton = styled(Button)`
  flex: 0 0 240px;
`;

export const StyledButtonInput = styled(Button)`
  border-radius: 0px 10px 10px 0px;
`;

export const StyledLabel = styled.div`
  margin-bottom: 10px;
  flex: 1;
  ${fontText}

  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: ${({ theme }) => theme.pages.main.subtitle};
`;

export const Highlight = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.pages.main.title};
`;
