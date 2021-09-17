import styled from 'styled-components';

export const StyledChat = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: flex-start;
  row-gap: 2em;

  max-width: 1140px;
  width: 100%;
`;

export const StyledMessageWrapper = styled.div`
  max-width: 640px;
  width: 100%;

  color: ${({ theme }) => theme.chat.message.fg};
  background: ${({ theme }) => theme.chat.message.bg};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px 0 0 20px;

  font-family: 'Roboto', sans-serif;
`;

export const StyledMessage = styled.div`
  padding: 10px 20px;

  font-weight: 300;
  font-size: 48px;
  line-height: 56px;
  text-align: left;
`;

export const StyledDateTime = styled.time`
  display: block;
  padding: 5px 20px;

  color: ${({ theme }) => theme.chat.message.dateTime};

  font-size: 20px;
  font-style: italic;
  text-align: right;
`;
