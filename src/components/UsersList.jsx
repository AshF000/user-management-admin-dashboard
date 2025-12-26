import { Space, Table } from "antd";

const columns = [
  {
    title: "Id",
    width: 100,
    dataIndex: "id",
    key: "id",
    fixed: "start",
  },
  {
    title: "Name",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "start",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: 150,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 150,
  },
  {
    title: "Action",
    key: "action",
    fixed: "end",
    width: 100,
    render: (user) => (
      <>
        <Space>
          <a>Delete</a>
          <a>{user.status === "Active" ? "Deactivate" : "Activate"}</a>
        </Space>
      </>
    ),
  },
];

const UsersList = ({ users, limit }) => {
  const dataSource = (users || []).map((user, i) => ({
    key: user.id || i + 1,
    id: user.id || i + 1,
    name: user.firstName || `User ${i + 1}`,
    email: user.email || "noemail@example.com",
    status: user.gender
      ? user.gender === "female"
        ? "Active"
        : "Inactive"
      : "Unavailable",
  }));

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      scroll={{ x: "max-content", y: 55 * +limit }}
      pagination={false}
      styles={{ bodySortBg: "red" }}
    />
  );
};
export default UsersList;
