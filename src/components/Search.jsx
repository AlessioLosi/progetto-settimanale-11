import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSongsAction } from '../redux/actions/Actions';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(getSongsAction(query));
  };

  return (
    <div className="search">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cerca"
      />
      <button onClick={handleSearch}>GO</button>
    </div>
  );
};

export default Search;