import { useCallback } from 'react';
import Button from "../Button";
import "./index.css";

const SearchInput = ({ onSearch, filter, setFilter }) => {

  const onSearchChange = (e) => setFilter({...filter, query: e.target.value});
  const onSubmit = useCallback(() => onSearch(filter), [filter, onSearch]);

  return (
    <div className="SearchInput">
      <input value={filter.query} onChange={onSearchChange} placeholder='Enter name'/>
      <Button onClick={onSubmit}>Submit</Button>
    </div>
  );
};

export default SearchInput;
