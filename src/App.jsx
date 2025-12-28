import "./App.css";
import { useEffect, useState } from "react";

import useDebounce from "./hooks/useDebounce";
import { getUsers } from "./api/usersApi";

import UserSearch from "./components/UserSearch";
import ShowPerPage from "./components/ShowPerPage";
import UsersList from "./components/UsersList";
import Search from "antd/es/input/Search";

function App() {
  const [searchValue, setSearchValue] = useState("");
  // ShowPerPage.jsx
  const [optVal, setOptVal] = useState(5);

  const [users, setUsers] = useState([]);
  const [skip, setSkip] = useState(0);

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

  const onSearch = (e) => {
    console.log(e);
  };

  return (
    <div className="container">
      <h1>User Management Admin Dashboard</h1>
      <div className="flex-center" style={{ marginTop: "2rem" }}>
        <UserSearch value={searchValue} onChange={handleSearch} />

        <ShowPerPage optVal={optVal} onChange={handleSelect} />
      </div>

      <div style={{ marginTop: "2rem" }}>
        <UsersList users={users} limit={optVal} />
      </div>

      <Search
      styles={{width:"200px"}}
        placeholder="input search text"
        onSearch={onSearch}
        onPressEnter={onSearch}
        allowClear
        enterButton
      />
    </div>
  );
}

export default App;


