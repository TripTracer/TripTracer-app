import { PreferencesContext } from './PreferencesContext';

describe('PreferencesContext', () => {
  it('should create a context object with default values', () => {
    const context = PreferencesContext._currentValue;
    expect(context).toBeDefined();
    expect(typeof context.toggleTheme).toBe('function');
    expect(context.isThemeDark).toBe(false);
  });
  it('should throw an error if no default value is provided', () => {
    expect(() => {
      code_under_test.PreferencesContext();
    }).toThrow();
  });
});