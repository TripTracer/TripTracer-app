import { render, waitFor } from '@testing-library/react-native';
import QueryBuilderComponent from './QueryBuilder';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import '@testing-library/jest-dom';
>>>>>>> 4a79951 (feat: the QueryBuilder test added.)
=======
import '@testing-library/jest-dom';
>>>>>>> 4f95cee (feat: the QueryBuilder test added.)
=======
=======
import '@testing-library/jest-dom';
>>>>>>> 4a79951 (feat: the QueryBuilder test added.)
>>>>>>> 56b4565 (feat: the QueryBuilder test added.)
=======
import '@testing-library/jest-dom';
>>>>>>> 1d41cf3 (feat: the QueryBuilder test added.)

describe('Query Builder', () => {
  // Renders QueryBuilder component with provided fields and query props.
  it('should render QueryBuilder component with provided fields and query props', () => {
    // Arrange
    const fields = [
      { name: 'field1', label: 'Field 1' },
      { name: 'field2', label: 'Field 2' },
    ];
    const query = { id: '1', rules: [], combinator: 'and' };
    const setQuery = jest.fn();

    // Act
    render(
      <QueryBuilderComponent
        fields={fields}
        query={query}
        setQuery={setQuery}
      />,
    );

    waitFor(() => {
      // Assert
      expect(QueryBuilderComponent).toHaveBeenCalledWith({
        fields,
        query,
        onQueryChange: setQuery,
      });
    });
  });
  it('should render QueryBuilder component with no fields when fields array is empty', () => {
    // Arrange
    const fields = [];
    const query = { id: '1', rules: [], combinator: 'and' };
    const setQuery = jest.fn();

    // Act
    render(
      <QueryBuilderComponent
        fields={fields}
        query={query}
        setQuery={setQuery}
      />,
    );

    waitFor(() => {
      // Assert
      expect(QueryBuilderComponent).toHaveBeenCalledWith({
        fields,
        query,
        onQueryChange: setQuery,
      });
    });
  });
});
