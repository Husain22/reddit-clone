import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [query, setQuery] = useState("");
  const navTo = useNavigate();

  const handleKeyPress = event => {
    if (event.key === "Enter") {
      navTo(`/${query}`);
    }
  };

  return (
    <>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={query}
        onChange={e => {
          setQuery(e.target.value);
        }}
        onKeyPress={handleKeyPress}
        className="bg-gray-100 p-1 px-4 grow mx-4 max-w-lg"
      />
    </>
  );
}

export default Search;
