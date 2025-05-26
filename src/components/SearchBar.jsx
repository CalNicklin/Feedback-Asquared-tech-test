import React, { useState } from "react";
import './SearchBar.css'
import { useNavigate } from "react-router-dom";


function SearchBar(props) {
  const navigate = useNavigate()
  const [term, setTerm] = useState("");

  function handleTermChange({ target }) {
    setTerm(target.value);
  };

  function handleClear() {
    setTerm("");
  };


  function keyUp(event) {
    if (event.key === "Enter") {
      props.onSearch(term);
      navigate('/searchresults');
      handleClear();
    }
  };

  function newSearch(e) {
    if (term) {
      props.onSearch(term);
      navigate('/searchresults');
      handleClear();
      e.preventDefault();
    }
  };


  return (
    <div className='searchbar'>
      <input
        placeholder="Search for a cocktail"
        onChange={handleTermChange}
        onKeyUp={keyUp}
        required
        value={term}
        id="input"
      />
      <button id='button' type="button" className="search" onClick={newSearch} >
        SEARCH
      </button>
    </div>
  );
}





export default SearchBar