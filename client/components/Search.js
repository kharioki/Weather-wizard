import React from 'react';

const Search = ({ selectedCity, setSelectedCity }) => {
  const [query, setQuery] = React.useState('');

  // handlechange
  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedCity(query);
  }

  return (
    <div className="flex items-start w-full mt-14 lg:mt-2 px-2 py-2 rounded-md shadow bg-slate-50 dark:bg-gray-800">
      <input
        type="text"
        name="search-item"
        className="bg-slate-50 dark:bg-gray-800 px-2 py-2 block w-full pl-7 pr-12 text-sm sm:text-md rounded-md"
        placeholder="Search for place..."
        value={query}
        onChange={handleChange}
      />
      <button className="flex items-center mx-2" onClick={handleSubmit}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>
  );
}

export default Search;
