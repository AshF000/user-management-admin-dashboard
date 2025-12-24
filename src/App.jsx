import { useState } from "react";
import "./App.css";
import UserSearch from "./components/UserSearch";

function App() {
  // const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClear = () => {
    setSearchValue("");
    console.log("clear hoise");
  };

  return (
    <div className="container">
      <h1>User Management Admin Dashboard</h1>

      <UserSearch
        value={searchValue}
        onChange={handleSearch}
        onClear={handleClear}
      />
    </div>
  );
}

export default App;
