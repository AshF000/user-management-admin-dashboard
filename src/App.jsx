import { useEffect, useState } from "react";

import useDebounce from "./hooks/useDebounce";

import "./App.css";
import UserSearch from "./components/UserSearch";
import ShowPerPage from "./components/ShowPerPage";

function App() {
  // const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const [searchValue, setSearchValue] = useState("");
  // ShowPerPage.jsx
  const [optVal, setOptVal] = useState(5);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const debouncedSearch = useDebounce(searchValue, 500);

  useEffect(() => {
    if (debouncedSearch) {
      // call searched api
    } else {
      // call initial api
    }
  }, [debouncedSearch]);

  const handleSelect = (e) => {
    setOptVal(e);
  };

  return (
    <div className="container">
      <h1>User Management Admin Dashboard</h1>
      <div className="flex-center">
        <UserSearch value={searchValue} onChange={handleSearch} />

        <ShowPerPage optVal={optVal} onChange={handleSelect} />
      </div>
    </div>
  );
}

export default App;
