import styled from 'styled-components';
import { Card as AntCard } from 'antd';

export const StyleIssueCard = styled(AntCard)`
  width: 100%;
  max-width: 500px;
  min-width: 380px;
  background: #ffffff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 4px;

  .ant-card-body {
    margin: 0;
    padding: 19px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
  }
`;