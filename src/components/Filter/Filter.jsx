const Filter = ({ value, onInputChange }) => {
  return (
    <label htmlFor="">
      Find contacts by name
      <input type="text" name="filter" onChange={onInputChange} value={value} />
    </label>
  );
};

export default Filter;
