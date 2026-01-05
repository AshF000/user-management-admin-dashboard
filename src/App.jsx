import "./App.css";
import { useEffect, useState } from "react";

import useDebounce from "./hooks/useDebounce";
import { getUsers } from "./api/usersApi";

import UserSearch from "./components/UserSearch";
import ShowPerPage from "./components/ShowPerPage";
import UsersList from "./components/UsersList";
import ToggleDark from "./components/ToggleDark";
import GoTo from "./components/GoTo";

function App() {
  const [searchValue, setSearchValue] = useState("");
  // ShowPerPage.jsx
  const [optVal, setOptVal] = useState(5);

  const [users, setUsers] = useState([]);
  const [skip, setSkip] = useState(0);
  const [page, setPage] = useState(1);

  const handleSearch = (e) => {
    setSkip(0);
    setSearchValue(e.target.value);
  };

  const handleSelect = (val) => {
    setSkip(0);
    setOptVal(Number(val));
  };

  const debouncedSearch = useDebounce(searchValue, 500);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let data = await getUsers(optVal, skip, debouncedSearch);

        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [debouncedSearch, optVal, skip]);

  const onSearch = () => {
    console.log(page);
  };

  return (
    <div className="container">
      <div className="flex justify-center gap-10 items-center mt-10">
        <h1 className="text-4xl font-bold mt-0!">
          User Management Admin Dashboard
        </h1>
        <ToggleDark />
      </div>
      <div className="flex-center" style={{ marginTop: "2rem" }}>
        <UserSearch
          value={searchValue}
          setValue={setSearchValue}
          onChange={handleSearch}
        />

        <ShowPerPage optVal={optVal} onChange={handleSelect} />
      </div>

      <div style={{ marginTop: "2rem" }}>
        <UsersList users={users} limit={optVal} />
      </div>

      <div className="gap-2 flex justify-center">
        <GoTo value={page} setValue={setPage} onSearch={onSearch} />
      </div>
    </div>
  );
}

export default App;
