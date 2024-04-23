import { render, screen, waitFor } from '@testing-library/react-native';

import QueryProvider from './ReactQuery';

describe('React Query', () => {
  it('should render children inside QueryClientProvider', () => {
    render(
      <QueryProvider>
        <div>Test</div>
      </QueryProvider>,
    );
    waitFor(() => {
      expect(screen.getByText('Test')).toBeInTheDocument();
    });
  });
  it('should render without children', () => {
    render(<QueryProvider></QueryProvider>);

    expect(screen.queryByText('Test')).toBeNull();
  });
});
