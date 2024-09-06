import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSongs } from '../redux/actions/Actions';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
      if (response.ok) {
        const data = await response.json();
        const limitedResults = data.data.slice(0, 4);
        dispatch(setSongs(limitedResults)); 
      } else {
        console.error('Errore nella ricerca');
      }
    } catch (error) {
      console.error('Errore nella fetch', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cerca una canzone..."
      />
      <button onClick={handleSearch}>Cerca</button>
    </div>
  );
};

export default Search;
