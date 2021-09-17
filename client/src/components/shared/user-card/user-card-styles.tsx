import styled from 'styled-components';
import { StopOutlined } from '@ant-design/icons';
import { Card as AntCard } from 'antd';

export const StyleCard = styled(AntCard)`
  margin-right: 10px;
  width: 300px;
  background: #ffffff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 4px;

  .ant-card-body {
    padding: 11px 13px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  &:nth-child(3n) {
    margin-right: 0;
  }
`;

export const StyleCardWrapper = styled.div`
  position: relative;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 300px;
  overflow-x: clip;
`;

export const StyleCardOwner = styled.p`
  position: absolute;
  top: -9px;
  left: 0;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  color: #000000;
`;

export const StyleCardTitle = styled.h3`
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Roboto', sans-serif;
  font-weight: 200;
  font-size: 28px;
  line-height: 30px;
  color: #000000;
`;

export const StyleCardText = styled.p`
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  color: #000000;
`;

export const StyleStopOutlined = styled(StopOutlined)`
  display: flex;
  flex-shrink: 0;
  font-size: 28px;
  margin-left: auto;
  margin-right: 3px;
  cursor: pointer;
`;
