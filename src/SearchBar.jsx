/* eslint-disable react/prop-types */
import { BiSearch } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { useTheme } from './ThemeContext';

const SearchBar = ({ onSubmit }) => {
  const { darkMode } = useTheme();

  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetchSuggestions();
  }, []);

  function fetchSuggestions() {
    fetch('https://randomuser.me/api/?results=500')
      .then((res) => res.json())
      .then((data) => {
        const nameSuggestions = data.results.map((item) => item.name.first);
        setSuggestions(nameSuggestions);
      });
  }

  function handleSuggestionClick(e, suggestion) {
    e.preventDefault();
    setSearch(suggestion);
    onSubmit(e, suggestion);
    setSearch('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(e, search);
    setSearch('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`d-flex rounded-3 align-items-start ${darkMode ? 'name-search-dark' : 'name-search-light'}`}>
      <div className="d-flex flex-column w-100">
        <input
          className={`rounded-3 px-3 py-2 w-100 border-0  ${darkMode ? 'name-search-dark' : 'name-search-light'}`}
          placeholder="Enter your name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* giving name Suggestions  */}
        {search && suggestions.length > 0 && (
          <div
            className="d-flex flex-column justify-content-start px-3 py-3 overflow-x-hidden"
            style={{ maxHeight: '10rem' }}>
            {suggestions
              .filter((suggestion) => {
                const regex = new RegExp(`^${search}`, 'i');
                return regex.test(suggestion);
              })
              .map((suggestion, index) => (
                <p
                  className={`${darkMode ? 'suggestion-dark' : 'suggestion-light'}`}
                  onClick={(e) => handleSuggestionClick(e, suggestion)}
                  key={index}>
                  {suggestion}
                </p>
              ))}
          </div>
        )}
      </div>
      <button
        type="submit"
        className="d-flex justify-content-end align-items-center btn">
        <BiSearch
          size={'1.5rem'}
          color={`${darkMode ? '#fff' : '#000'}`}
        />
      </button>
    </form>
  );
};

export default SearchBar;
