import styled from 'styled-components';
import { Button as AntButton } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export const StyleIssueTitle = styled.p`
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 48px;
  line-height: 56px;
  color: ${({ theme }) => theme.issueCard.fg};
`;

export const StyleButton = styled(AntButton)`
  margin-left: auto;
  margin-right: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

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

export const StyleAddIcon = styled(PlusOutlined)`
  font-size: 56px;
  transition: all 300ms;
`;
