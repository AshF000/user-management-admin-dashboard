import "./showperpage.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

const ShowPerPage = ({ optVal, onChange }) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel
          className="perPageLabel"
          variant="standard"
          htmlFor="uncontrolled-native"
        >
          Show Per Page
        </InputLabel>
        <NativeSelect
          onChange={onChange}
          className="perPageSelet"
          defaultValue={optVal}
          inputProps={{
            name: "value",
            id: "uncontrolled-native",
          }}
        >
          <option className="perPageOpt" value={5}>
            5
          </option>
          <option className="perPageOpt" value={10}>
            10
          </option>
          <option className="perPageOpt" value={20}>
            20
          </option>
          <option className="perPageOpt" value={50}>
            50
          </option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default ShowPerPage;
