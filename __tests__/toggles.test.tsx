import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@/lib/ThemeContext';
import ThemeToggle from '@/components/ThemeToggle';
import CodeModeToggle from '@/components/CodeModeToggle';

describe('Theme and Code toggles', () => {
  test('ThemeToggle switches between light and dark', () => {
    const { getByRole } = render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
    const button = getByRole('button');
    // initial theme is light
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    fireEvent.click(button);
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    fireEvent.click(button);
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  test('CodeModeToggle toggles data-codemode attribute', () => {
    const { getByRole } = render(
      <ThemeProvider>
        <CodeModeToggle />
      </ThemeProvider>
    );
    const button = getByRole('button');
    expect(document.documentElement.getAttribute('data-codemode')).toBe('off');
    fireEvent.click(button);
    expect(document.documentElement.getAttribute('data-codemode')).toBe('on');
    fireEvent.click(button);
    expect(document.documentElement.getAttribute('data-codemode')).toBe('off');
  });
});