/// <reference types="@vitest/browser/context" />
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { App } from './app.tsx';

describe('App component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should view header', () => {
    render(<App />);

    const h = screen.getByTestId('header');
    expect(h).toHaveClass('text');
  });
});
