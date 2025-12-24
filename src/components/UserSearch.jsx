import "./usersearch.css";
import { Input } from "antd";

const UserSearch = ({ className, onChange, value }) => {
  return (
    <>
      <div className="input-wrapper">
        <Input
          className={`searchInp ${className || ""}`}
          placeholder="Search User"
          allowClear
          onChange={onChange}
          value={value}
        />
      </div>
    </>
  );
};

export default UserSearch;
