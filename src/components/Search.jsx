// src/components/Search.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSongsAction } from '../redux/actions/Actions';
import { Button, Form } from 'react-bootstrap';
import '../App.css'; 

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(getSongsAction(query));
    }
  };

  return (
    <Form className="search">
      <Form.Group controlId="searchForm">
        <Form.Control
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cerca"
        />
        <Button variant="primary" type="button" onClick={handleSearch}>GO</Button>
      </Form.Group>
    </Form>
  );
};

export default Search;
