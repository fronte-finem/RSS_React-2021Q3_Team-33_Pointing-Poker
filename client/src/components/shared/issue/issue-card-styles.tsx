import styled from 'styled-components';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button as AntButton } from 'antd';

export const StyleIssueCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${({ theme }) => theme.issueCard.fg};
`;

const StyledButton = styled(AntButton)`
  margin-left: auto;
  margin-right: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

export const StyledDefaultButton = styled(StyledButton)`
  &,
  &:focus {
    color: ${({ theme }) => theme.issueCard.button.default.normal};
  }
  &:hover {
    color: ${({ theme }) => theme.issueCard.button.default.hover};
  }
  &:active {
    color: ${({ theme }) => theme.issueCard.button.default.active};
  }
`;

export const StyledDangerButton = styled(StyledButton)`
  &,
  &:focus {
    color: ${({ theme }) => theme.issueCard.button.danger.normal};
  }
  &:hover {
    color: ${({ theme }) => theme.issueCard.button.danger.hover};
  }
  &:active {
    color: ${({ theme }) => theme.issueCard.button.danger.active};
  }
`;

export const StyleCancelIcon = styled(PlusOutlined)`
  font-size: 56px;
`;

export const StyleEditIcon = styled(EditOutlined)`
  font-size: 42px;
`;

export const StyleDeleteIcon = styled(DeleteOutlined)`
  font-size: 39px;
`;

export const StyleEditIssueWrapper = styled.div`
  margin-left: auto;
  margin-right: -15px;
  width: 100%;
  max-width: 137px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyleCurrentIssue = styled.p`
  position: absolute;
  top: -10px;
  left: 5px;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
`;

export const StyleIssueTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 48px;
  line-height: 56px;
  color: ${({ theme }) => theme.issueCard.fg};
`;

export const StyleIssueText = styled.p`
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
`;
