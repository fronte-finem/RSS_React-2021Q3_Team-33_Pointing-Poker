import styled from 'styled-components';

export const DemoGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-template-rows: 1fr;
  gap: 20px;
  padding: 20px;
  background: #222;
`;
