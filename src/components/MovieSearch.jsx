import { useState } from 'react';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearch] = useState('');

    function handleSearch() {
        onSearch(searchTerm);
    }

    return (
        <div>
            <i className="fas fa-search"></i>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for a movie..."
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchBar;