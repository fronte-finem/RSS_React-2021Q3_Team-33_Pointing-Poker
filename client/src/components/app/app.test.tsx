import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from '@client/components/app/app';
import { GameServiceProvider } from '@client/providers/game-service';

// https://github.com/ant-design/ant-design/issues/30964

const AppWrapper = () => (
  <GameServiceProvider>
    <App />
  </GameServiceProvider>
);

describe('App', () => {
  it('should render App', async () => {
    const { queryByTestId } = render(<AppWrapper />);

    await waitFor(() => {
      expect(queryByTestId('app')).not.toBeEmptyDOMElement();
    });
  });
});
