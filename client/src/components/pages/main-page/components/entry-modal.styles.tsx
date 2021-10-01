import styled from 'styled-components';
import { FormItem } from '@client/components/shared/form-item/form-item';
import { fontTitle } from '@client/themes/typography';

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  float: left;
  gap: 30px;
  padding-bottom: 10px;
`;

export const StyledHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  column-gap: 30px;
  row-gap: 10px;
`;

export const StyledTitle = styled.div`
  flex: 1;
  ${fontTitle}

  font-size: 64px;
  line-height: 75px;
  color: ${({ theme }) => theme.modal.fg};
`;

export const StyledFormItem = styled(FormItem)`
  margin: 0;
`;

export const StyledObserverItem = styled(FormItem)`
  max-width: 200px;
  flex-wrap: nowrap;
  align-items: center;
  margin: 0;

  &&& .ant-form-item-label {
    flex: 1;
    max-width: unset;
    overflow: unset;
    white-space: unset;
    text-align: left;

    label::after {
      display: none;
    }
  }
  &&& .ant-form-item-control {
    flex: 0;
  }
`;

export const StyledBody = styled.div`
  max-width: 460px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledFooter = styled.div`
  padding-bottom: 30px;
`;
