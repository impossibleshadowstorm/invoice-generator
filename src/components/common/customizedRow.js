import React from "react";
import { Grid } from "@mui/material";
import { EditText, EditTextarea } from "react-edit-text";

const cssStyles = {
  EditTextStyle: {
    margin: "2px 0",
    marginRight: "5px",
    fontSize: "14px",
    boxSizing: "border-box",
    border: "none",
    borderBottom: "1px dashed #E1ECFD",
    width: "80%",
    fontSize: "14px",
    padding: "0 10px",
    color: "black",
  },
};

const CustomizedRow = () => {
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
          placeholder="Description"
          style={{
            ...cssStyles.EditTextStyle,
            height: "89px",
            boxSizing: "border-box",
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <EditText
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
