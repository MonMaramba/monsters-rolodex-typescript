import React from 'react';

import './search-box.styles.css';


const SearchBox = ({className, placeholder, onChangHandler }) => (
  <input
    className={'search-box ${className}'}
    type='search'
    placeholder={placeholder}
    onChange={(e)=> onChangHandler(e)}
  />
);

export default SearchBox;