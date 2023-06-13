import { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const Hero = () => {
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  function onSubmit(e, name) {
    e.preventDefault();
    fetch(`https://api.genderize.io?name=${name}`)
      .then((res) => res.json())
      .then((data) => setResults(data))
      .catch((err) => setError(err.message));
  }

  return (
    <div className="container pt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-5">
          <div className="py-5">
            <h1 className="fw-bolder text-center fs-2">
              Predict the gender of <br /> a person based on their name.
            </h1>
          </div>

          <SearchBar onSubmit={onSubmit} />
          <SearchResults
            results={results}
            error={error}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
