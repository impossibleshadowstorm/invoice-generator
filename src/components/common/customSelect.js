import {
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  makeStyles,
} from "@mui/material";
import React from "react";
import { useState } from "react";

const CustomSelect = ({ style, selectOptions }) => {
  const [selected, setSelected] = useState("IN");

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const useStyles = (theme) => ({
    select: {
      "&:before": {
        borderColor: "red",
      },
      "&:after": {
        borderColor: "aqua",
      },
    },
    icon: {
      fill: "orange",
    },
  });
  return (
    <FormControl style={{ width: "100%" }}>
      <Select
        // className={useStyles.select}
        variant="standard"
        style={{
          ...style,
          backgroundColor: "transparent",
          outline: "none",
          color: "#444",
          border: "none",
          height: "30px",
          fontSize: "14px",
        }}
        defaultValue={selected}
        onChange={handleChange}
        value={selected}
      >
        {selectOptions.map((items) => (
          <MenuItem value={items.code}>{items.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
