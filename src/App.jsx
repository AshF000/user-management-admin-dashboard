import "./App.css";
import { useEffect, useState } from "react";

import useDebounce from "./hooks/useDebounce";
import { getUsers } from "./api/usersApi";

import MyPagination from "./components/MyPagination";
import ShowPerPage from "./components/ShowPerPage";
import ToggleDark from "./components/ToggleDark";
import UserSearch from "./components/UserSearch";
import UsersList from "./components/UsersList";
import Header from "./components/Header";
import GoTo from "./components/GoTo";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [totalUsers, setTotalUsers] = useState(0);
  const [optVal, setOptVal] = useState(5);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  
  const debouncedSearch = useDebounce(searchValue, 500);
  // handle goto page
  const handleGoto = (val) => setPage(+val);
  // handle users search
  const handleSearch = (e) => setSearchValue(e.target.value);
  // handle #user/page
  const handleSelect = (val) => {
    setOptVal(Number(val));
    setPage(1);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);

      const skip = (page - 1) * optVal;

      try {
        let data = await getUsers(optVal, skip, debouncedSearch);
        setUsers(data.users);
        setTotalUsers(data.total);
      } catch (error) {
        searchValue("");
        console.error("Error fetching users:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [debouncedSearch, optVal, page]);

  return (
    <div className="container">
      <Header text={"User Management Admin Dashboard"} />

      <div className="flex justify-between gap-10 items-center mt-10 mb-6">
        <UserSearch
          value={searchValue}
          setValue={setSearchValue}
          onChange={handleSearch}
        />
        <GoTo handleGoto={handleGoto} />
        <ToggleDark />
        <ShowPerPage optVal={optVal} onChange={handleSelect} />
      </div>

      <UsersList
        isLoading={isLoading}
        users={users}
        setUsers={setUsers}
        limit={optVal}
      />

      <MyPagination
        page={page}
        setPage={setPage}
        total={totalUsers}
        show={optVal}
        handleGoto={handleGoto}
      />
    </div>
  );
};

export default App;
