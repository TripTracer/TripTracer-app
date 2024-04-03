import { Field, QueryBuilder, RuleGroupType } from 'react-querybuilder';
import 'react-querybuilder/dist/query-builder.css';

function QueryBuilderComponent({
  fields,
  query,
  setQuery,
}: {
  fields: Field[];
  query: RuleGroupType;
  setQuery: (query: RuleGroupType) => void;
}) {
  return (
    <QueryBuilder fields={fields} query={query} onQueryChange={setQuery} />
  );
}
export default QueryBuilderComponent;
