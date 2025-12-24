import "./showperpage.css";
import { Select, Space } from "antd";

const ShowPerPage = ({ optVal, onChange }) => {
  return (
    <Space wrap>
      <label>Show per page</label>
      <Select
      className="perPageSelet"
        defaultValue={optVal}
        style={{ width: 120 }}
        onChange={onChange}
        options={[
          { value: 5, label: "5" },
          { value: 10, label: "10" },
          { value: 20, label: "20" },
          { value: 50, label: "50" },
        ]}
      />
    </Space>
  );
};

export default ShowPerPage;
