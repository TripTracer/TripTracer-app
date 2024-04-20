import React, { useContext } from 'react';

import { act, render, waitFor } from '@testing-library/react-native';

import { ColorSchemeContext, LanguageContext } from './PreferencesContext'; // Update path to your file

// Dummy component to test useContext
const DummyComponent = () => {
  const colorSchemeContext = useContext(ColorSchemeContext);
  const languageContext = useContext(LanguageContext);

  return (
    <div>
      <span data-testid='colorScheme'>{colorSchemeContext?.colorScheme}</span>
      <button onClick={() => colorSchemeContext.setColorScheme('dark')}>
        Change Color Scheme
      </button>
      <span data-testid='language'>{languageContext?.language}</span>
      <button onClick={() => languageContext.setLanguage('fr')}>
        Change Language
      </button>
    </div>
  );
};

describe('ColorSchemeContext', () => {
  it('should provide default color scheme context', () => {
    const { getByTestId } = render(
      <ColorSchemeContext.Provider>
        <DummyComponent />
      </ColorSchemeContext.Provider>,
    );
    waitFor(() => {
      expect(getByTestId('colorScheme').textContent).toBe('system');
    });
  });

  it('should update color scheme context', () => {
    const { getByTestId } = render(
      <ColorSchemeContext.Provider>
        <DummyComponent />
      </ColorSchemeContext.Provider>,
    );
    waitFor(() => {
      act(() => {
        getByTestId('colorScheme').previousSibling.click();
      });

      expect(getByTestId('colorScheme').textContent).toBe('dark');
    });
  });
});

describe('LanguageContext', () => {
  it('should provide default language context', () => {
    const { getByTestId } = render(
      <LanguageContext.Provider>
        <DummyComponent />
      </LanguageContext.Provider>,
    );
    waitFor(() => {
      expect(getByTestId('language').textContent).toBe('en');
    });
  });

  it('should update language context', () => {
    const { getByTestId } = render(
      <LanguageContext.Provider>
        <DummyComponent />
      </LanguageContext.Provider>,
    );
    waitFor(() => {
      act(() => {
        getByTestId('language').previousSibling.click();
      });

      expect(getByTestId('language').textContent).toBe('fr');
    });
  });
});
