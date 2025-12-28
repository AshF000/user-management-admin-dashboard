import "./userslist.css";
const UsersList = ({ users }) => {
  return (
    <>
      <table className="users-table">
        <colgroup>
          <col style={{ width: "20px" }} /> {/* Id */}
          <col style={{ width: "40px" }} /> {/* Name */}
          <col style={{width:"80px"}}/> {/* Email (auto) */}
          <col style={{ width: "20px" }} /> {/* Status */}
          <col style={{ width: "40px" }} /> {/* Action */}
        </colgroup>

        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="5">No users found</td>
            </tr>
          ) : (
            users.map((user) => {
              const isActive = user.gender !== "male";

              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName} {user.lastName}</td>
                  <td>{user.email}</td>
                  <td className="status-cell">
                    <span
                      className={`status-dot ${
                        isActive ? "active" : "inactive"
                      }`}
                      aria-label={isActive ? "Active" : "Inactive"}
                    />
                    {isActive ? "Active" : "Inactive"}
                  </td>

                  <td className="actions">
                    <button className="btn danger">Delete</button>
                    <button className="btn">
                      {isActive ? "Deactivate" : "Activate"}
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </>
  );
};

export default UsersList;
