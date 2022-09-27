import React from "react";
import { Grid } from "@mui/material";
import { EditText, EditTextarea } from "react-edit-text";
import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

const cssStyles = {
  EditTextStyle: {
    margin: "2px 0",
    marginRight: "5px",
    fontSize: "14px",
    boxSizing: "border-box",
    border: "none",
    borderBottom: "1px dashed #E1ECFD",
    width: "80%",
    padding: "0px 0px",
    color: "black",
  },
};

const CustomizedRow = ({ index }) => {
  const { itemsRow, setItemsRow } = useContext(GlobalContext);

  const handleChangeInputs = (onSaveProps) => {
    const values = [...itemsRow];
    values[index][onSaveProps.name] = onSaveProps.value;
    setItemsRow(values);
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;

    const list = [...itemsRow];
    list[index][name] = value;
    setItemsRow(list);
  };

  return (
    <Grid
      container
      sx={{
        marginTop: "10px",
        backgroundColor: "#F2F3F5",
        borderBottom: "2px solid black",
        height: "110px",
        boxSizing: "border-box",
        padding: "10px 10px",
      }}
    >
      <Grid item xs={6} sx={{ height: "90%" }}>
        <EditTextarea
          name="desc"
          value={itemsRow[index]["desc"]}
          onChange={(e) => handleTextChange(e)}
          placeholder="Description"
          onSave={(onSaveProps) => handleChangeInputs(onSaveProps)}
          style={{
            ...cssStyles.EditTextStyle,
            height: "89px",
            boxSizing: "border-box",
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <EditText
          value={itemsRow[index]["qty"]}
          onChange={(e) => handleTextChange(e)}
          name="qty"
          onSave={(onSaveProps) => handleChangeInputs(onSaveProps)}
          placeholder="qty"
          style={{
            ...cssStyles.EditTextStyle,
            display: "flex",
            alignItems: "center",
            float: "right",
            textAlign: "right",
            justifyContent: "flex-end",
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <EditText
          name="rate"
          onSave={(onSaveProps) => handleChangeInputs(onSaveProps)}
          placeholder="rate"
          style={{
            ...cssStyles.EditTextStyle,
            display: "flex",
            alignItems: "center",
            float: "right",
            textAlign: "right",
            justifyContent: "flex-end",
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <EditText
          name="amt"
          onSave={(onSaveProps) => handleChangeInputs(onSaveProps)}
          placeholder="amount"
          style={{
            ...cssStyles.EditTextStyle,
            display: "flex",
            alignItems: "center",
            float: "right",
            textAlign: "right",
            justifyContent: "flex-end",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default CustomizedRow;
