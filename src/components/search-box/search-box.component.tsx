import React, { ChangeEvent } from 'react';

import './search-box.styles.css';


// interfaces can be overloaded and extended like classes
// interface ISearchBoxProps {
//   className: string;
//   placeholder?: string | null;
 
// }

// interface ISearchBoxProps {
//   onChangeHandler: (a:string) => void
// }

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler:(event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({className, placeholder, onChangeHandler }: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;