import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export function SelectCategory({ handleSelectChange, category }) {
  // const [category, setCategory] = useState(null);

  // const handleSelectChange = (event) => {
  //   setCategory(event.target.value);
  // };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="category-select">Category</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={category}
          label="Category"
          onChange={handleSelectChange}
        >
          <MenuItem value={"restaurant"}>Restaurants</MenuItem>
          <MenuItem value={"cafe"}>Cafe</MenuItem>
          <MenuItem value={"pub"}>Pubs</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
