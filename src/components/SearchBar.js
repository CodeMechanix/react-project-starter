import React from 'react';



export default function SearchBar({ onSearch }) {   

    const [searchTerm, setSearchTerm] = React.useState("");

    const handleClick = () => {
        onSearch(searchTerm);
    }

    const handleKeyUp = (event) => {
        if (event.key === 'Enter') {
            onSearch(event.target.value);
        } 
        else {
            setSearchTerm(event.target.value);
        } 
    }

  return (
    <div>
      <input type="text" placeholder="Search for photos..." onKeyUp={handleKeyUp} />
      <button onClick={handleClick}>Search</button>
    </div>

    
  );
}