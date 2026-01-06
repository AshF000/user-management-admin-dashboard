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
  const [page, setPage] = useState(1);

  // handle users search
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  // handle #user/page
  const handleSelect = (val) => {
    setOptVal(Number(val));
  };

  // handle user status toggle
  const handleStatus = (id) => {
    setUsers(
      users.map((u) =>
        u.id !== id
          ? u
          : { ...u, gender: u.gender === "male" ? "female" : "male" }
      )
    );
  };

  // handle user delete
  const handleUserDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
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
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [debouncedSearch, optVal, page]);

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
        <UsersList
          handleStatus={handleStatus}
          users={users}
          limit={optVal}
          handleUserDelete={handleUserDelete}
        />
      </div>

      <div className="gap-2 flex justify-center">
        <GoTo handleGoto={handleGoto} />
      </div>
    </div>
  );
}

export default App;
