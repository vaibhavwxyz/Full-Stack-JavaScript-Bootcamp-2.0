import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <form className="mb-5 bg-[#fee5e5] text-[#ef4f5f] placeholder:text-[#ef4f5f] rounded-full max-w-2xl flex justify-between items-center py-2 px-4">
      <input
        type="text"
        placeholder="Search any recipe"
        className="bg-[#fee5e5] text-[#ef4f5f] placeholder:text-[#ef4f5f] px-1 rounded-full outline-none text-lg w-full text-start"
      />
      <FontAwesomeIcon icon={faSearch} />
    </form>
  );
};

export default SearchBar;
