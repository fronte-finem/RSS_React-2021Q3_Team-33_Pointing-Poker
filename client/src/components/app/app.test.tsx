import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from '@client/components/app/app';

// https://github.com/ant-design/ant-design/issues/30964

describe('Main', () => {
  it('should switch routes', async () => {
    const { container } = render(<App />);

    await waitFor(() => {
      expect(container).not.toBeEmptyDOMElement();
    });
  });
});
