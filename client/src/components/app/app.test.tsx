import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from '@client/components/app/app';
import { StateServiceProvider } from '@client/providers/state-service';

// https://github.com/ant-design/ant-design/issues/30964

const AppWrapper = () => (
  <StateServiceProvider>
    <App />
  </StateServiceProvider>
);

describe('App', () => {
  it('should render App', async () => {
    const { queryByTestId } = render(<AppWrapper />);

    await waitFor(() => {
      expect(queryByTestId('app')).not.toBeEmptyDOMElement();
    });
  });
});
