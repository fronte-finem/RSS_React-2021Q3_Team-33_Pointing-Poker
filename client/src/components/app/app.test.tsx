import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '@client/components/app/app';

describe('Main', () => {
  it('should switch routes', () => {
    const { container } = render(<App />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
