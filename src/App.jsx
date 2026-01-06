import "./App.css";
import { useEffect, useState } from "react";

import useDebounce from "./hooks/useDebounce";
import { getUsers } from "./api/usersApi";

import MyPagination from "./components/MyPagination";
import ShowPerPage from "./components/ShowPerPage";
import ToggleDark from "./components/ToggleDark";
import UserSearch from "./components/UserSearch";
import UsersList from "./components/UsersList";
import GoTo from "./components/GoTo";

function App() {
  const [searchValue, setSearchValue] = useState("");
  // ShowPerPage.jsx
  const [optVal, setOptVal] = useState(5);
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [page, setPage] = useState(1);

  // handle users search
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  // handle #user/page
  const handleSelect = (val) => {
    setOptVal(Number(val));
    setPage(1);
  };

  // handle goto page
  const handleGoto = (val) => {
    setPage(+val);
  };

  const debouncedSearch = useDebounce(searchValue, 500);

  useEffect(() => {
    const fetchUsers = async () => {
      const skip = (page - 1) * optVal;
      try {
        let data = await getUsers(optVal, skip, debouncedSearch);

        setUsers(data.users);
        setTotalUsers(data.total);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [debouncedSearch, optVal, page]);

  return (
    <div className="container">
      <h1 className="text-4xl font-bold">User Management Admin Dashboard</h1>

      <div className="flex justify-between gap-10 items-center mt-10">
        <UserSearch
          value={searchValue}
          setValue={setSearchValue}
          onChange={handleSearch}
        />
        <GoTo handleGoto={handleGoto} />
        <ToggleDark />
        <ShowPerPage optVal={optVal} onChange={handleSelect} />
      </div>

      <UsersList users={users} setUsers={setUsers} limit={optVal} />

      <MyPagination
        page={page}
        setPage={setPage}
        total={totalUsers}
        show={optVal}
        handleGoto={handleGoto}
      />
    </div>
  );
}

export default App;
