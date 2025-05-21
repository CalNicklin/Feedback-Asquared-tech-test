import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './SearchBar.css'



function SearchBar(props) {

  const [term, setTerm] = useState("");

  function passTerm() {
    props.onSearch(term);
  };

  function handleTermChange({ target }) {
    setTerm(target.value);
  };

  function handleClear() {
    setTerm("");
  };


  function keyUp(event) {
    if (event.key === "Enter") {
      props.onSearch(term);
    }
  };

  return (
    <div className='searchbar'>
      <input
        placeholder="Search for a cocktail"
        onChange={handleTermChange}
        onKeyUp={keyUp}
        value={term}
      />
      <Link to={{ pathname: "/searchResults" }}>
        <button type="button" onClick={() => { passTerm(); handleClear() }} >
          SEARCH
        </button>
      </Link>
    </div>
  );
}





export default SearchBar