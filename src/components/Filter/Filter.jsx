import { FilterLabel, FilterInput } from './Filter.styled';

const Filter = ({ value, onInputChange }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        onChange={onInputChange}
        value={value}
      />
    </FilterLabel>
  );
};

export default Filter;
