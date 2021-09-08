import styled from 'styled-components';
import { StopOutlined } from '@ant-design/icons';
import { Card as AntCard } from 'antd';

export const StyleCard = styled(AntCard)`
  width: 100%;
  max-width: 500px;
  background: #ffffff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 4px;

  .ant-card-body {
    padding: 18px 22px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const StyleCardWrapper = styled.div`
  position: relative;
  margin-left: 27px;
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
  top: -10px;
  left: 5px;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  color: #000000;
`;

export const StyleCardTitle = styled.h3`
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 3em;
  line-height: 56px;
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
  font-size: 47px;
  margin-left: auto;
  margin-right: 3px;
  cursor: pointer;
`;
