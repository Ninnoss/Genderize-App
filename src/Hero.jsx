import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const Hero = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetchSuggestions();
  }, []);

  function fetchSuggestions() {
    fetch('https://randomuser.me/api/?results=200')
      .then((res) => res.json())
      .then((data) => {
        const nameSuggestions = data.results.map((item) => item.name.first);
        setSuggestions(nameSuggestions);
      });
  }

  function onSubmit(e) {
    e.preventDefault();
    fetch(`https://api.genderize.io?name=${search}`)
      .then((res) => res.json())
      .then((data) => setResults(data))
      .catch((err) => console.log(err.message));

    fetchSuggestions();
    setSearch('');
  }

  return (
    <div className="container pt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-5">
          <div className="py-5">
            <h1 className="fw-bolder text-center fs-2">
              Predict the gender of <br /> a person based on your name.
            </h1>
          </div>

          <SearchBar
            search={search}
            setSearch={setSearch}
            suggestions={suggestions}
            onSubmit={onSubmit}
          />
          <SearchResults results={results} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
