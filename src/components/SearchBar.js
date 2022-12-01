import { useState } from "react";

function SearchBar({ onSubmit }) {
const [term, setTerm] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event)=> {
   setTerm(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange}/>
      </form>
    </div>
  );
}

export default SearchBar;
