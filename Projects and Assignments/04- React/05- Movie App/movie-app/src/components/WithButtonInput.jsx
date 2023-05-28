import { useState } from "react";

const WithButtonInput = () => {
  const [searchText, setSearchText] = useState("");

  function handelSearch() {}

  return (
    <div className="flex w-full items-center space-x-2 md:w-1/3">
      <input
        className="flex h-10 w-48 rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 text-white focus:outline-none focus:ring-1 focus:ring-white/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      <button
        type="button"
        className="rounded-md bg-[#e50914] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#ff2c37] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={() => {
          const filteredData = handelSearch();
          setMovies(filteredData);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default WithButtonInput;
