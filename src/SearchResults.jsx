/* eslint-disable react/prop-types */
const SearchResults = ({ results }) => {
  if (results === null)
    return (
      <div className="result-box py-4 rounded-3 mt-3">
        <h6 className="text-center text-muted fw-normal">THERE IS NOT ENOUGH INFORMATION</h6>
      </div>
    );

  // Display the fetched data
  return (
    <div className="result-box py-4 rounded-3 mt-3">
      <h6 className="text-left ps-3 text-muted fw-bold">Name: {results.name}</h6>
      <h6 className="text-left ps-3 text-muted fw-bold">Gender: {results.gender}</h6>
      <h6 className="text-left ps-3 text-muted fw-bold">Count: {results.count}</h6>
    </div>
  );
};

export default SearchResults;
