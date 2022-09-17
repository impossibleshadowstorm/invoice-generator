import React, { useContext } from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import { EditText } from "react-edit-text";
import style from "./invoiceCard.module.css";
import CustomSelect from "./common/customSelect";
import data from "./data/country";
import GlobalContext from "../context/GlobalContext";
import CustomizedRow from "./common/customizedRow";
import FeatherIcon from "feather-icons-react";

const cssStyles = {
  EditTextStyle: {
    width: "350px",
    height: "30px",
    color: "#777984",
    margin: "2px 0",
    marginRight: "5px",
    fontSize: "14px",
    padding: "2px 12px 2px 0",
    boxSizing: "border-box",
    border: "none",
    borderBottom: "1px dashed #E1ECFD",
  },
  EditTextInvoiceStyle: {
    paddingRight: "0",
    textAlign: "right",
    color: "black",
    fontSize: "45px",
    width: "300px",
    borderBottom: "1px dashed #E1ECFD",
    float: "right",
    height: "75px",
  },
};

const placeholders = {
  supplierCompany: {
    yourCompany: "Your Company",
    yourName: "Your Name",
    companyAddress: "Company's Address",
    cityStateZip: "City, State, Zip",
  },
  billToCompany: {
    clientCompany: "Your Client's Company",
    clientAddress: "Client's Address",
    cityStateZip: "City, State, Zip",
  },
  invoiceTag: {
    invoiceNameTag: "Invoice #",
    invoiceDateTag: "Invoice Date",
    dueDateTag: "Due Date",
  },
  invoice: {
    invoiceName: "INV-12 #",
    invoiceDate: "Sep 17, 2022",
  },
};

const invoiceTableHeading = {
  desc: "Item Descriptions",
  qty: "Quantity",
  rate: "Rate",
  amount: "Amount",
};



const InvoiceCard = () => {
  const {
    companyName,
    setCompanyName,
    companyAddress,
    setCompanyAddress,
    companyCityStateZip,
    setCompanyCityStateZip,
    companyCountry,
    setCompanyCountry,
    yourName,
    setYourName,
    clientCompanyName,
    setClientCompanyName,
    clientCompanyAddress,
    setClientCompanyAddress,
    clientCompanyCityStateZip,
    setClientCompanyCityStateZip,
    clientCompanyCountry,
    setClientCompanyCountry,
    invoiceNameTag,
    setInvoiceNameTag,
    invoiceName,
    setInvoiceName,
    invoiceDateTag,
    setInvoiceDateTag,
    invoiceDate,
    setInvoiceDate,
    dueDateTag,
    setDueDateTag,
    dueDate,
    setDueDate,
  } = useContext(GlobalContext);
  

  return (
    <Container
      sx={{
        backgroundColor: "white",
        width: "70vw",
        boxShadow: " 0 0 17px 0 rgb(16 40 73 / 9%)",
        padding: "40px",
      }}
    >
      <Box sx={{ height: "162px", width: "100%", display: "flex" }}>
        <Box
          sx={{
            boxSizing: "border-box",
            width: "50%",
            padding: "0 15px",
          }}
        >
          <EditText
            onChange={(e) => setCompanyName(e.target.value)}
            value={companyName}
            placeholder={placeholders.supplierCompany.yourCompany}
            style={cssStyles.EditTextStyle}
          />
          <EditText
            onChange={(e) => setYourName(e.target.value)}
            value={yourName}
            placeholder={placeholders.supplierCompany.yourName}
            style={cssStyles.EditTextStyle}
          />
          <EditText
            onChange={(e) => setCompanyAddress(e.target.value)}
            value={companyAddress}
            placeholder={placeholders.supplierCompany.companyAddress}
            style={cssStyles.EditTextStyle}
          />
          <EditText
            onChange={(e) => setCompanyCityStateZip(e.target.value)}
            value={companyCityStateZip}
            placeholder={placeholders.supplierCompany.cityStateZip}
            style={cssStyles.EditTextStyle}
          />
          <CustomSelect
            style={{ width: "350px", height: "40px", color: "black" }}
            selectOptions={data.Country}
          />
        </Box>
        <Box sx={{ width: "50%" }}>
          <Box sx={{ height: "20px" }}></Box>
          <EditText
            onChange={(e) => setInvoiceName(e.target.value)}
            value={invoiceName}
            defaultValue="INVOICE"
            placeholder="INVOICE"
            style={{
              ...cssStyles.EditTextStyle,
              ...cssStyles.EditTextInvoiceStyle,
            }}
          />
        </Box>
      </Box>
      <Box sx={{ height: "80px" }}></Box>
      <Box sx={{ width: "100%", height: "145px", display: "flex" }}>
        <Box
          sx={{
            boxSizing: "border-box",
            width: "70%",
            padding: "0 15px",
          }}
        >
          <Typography
            style={{ color: "black", height: "30px", fontWeight: "bold" }}
          >
            Bill To :
          </Typography>
          <EditText
            onChange={(e) => setClientCompanyName(e.target.value)}
            value={clientCompanyName}
            placeholder={placeholders.billToCompany.clientCompany}
            style={cssStyles.EditTextStyle}
          />
          <EditText
            onChange={(e) => setClientCompanyAddress(e.target.value)}
            value={clientCompanyAddress}
            placeholder={placeholders.billToCompany.clientAddress}
            style={cssStyles.EditTextStyle}
          />
          <EditText
            onChange={(e) => setClientCompanyCityStateZip(e.target.value)}
            value={clientCompanyCityStateZip}
            placeholder={placeholders.billToCompany.cityStateZip}
            style={cssStyles.EditTextStyle}
          />
          <CustomSelect
            style={{ width: "350px", height: "40px", color: "black" }}
            selectOptions={data.Country}
          />
        </Box>
        <Box sx={{ width: "30%", display: "flex" }}>
          <Box sx={{ width: "40%" }}>
            <EditText
              onChange={(e) => setInvoiceNameTag(e.target.value)}
              value={invoiceNameTag}
              placeholder={placeholders.invoiceTag.invoiceNameTag}
              style={{ ...cssStyles.EditTextStyle, width: "80%" }}
            />
            <EditText
              onChange={(e) => setInvoiceDateTag(e.target.value)}
              value={invoiceDateTag}
              placeholder={placeholders.invoiceTag.invoiceDateTag}
              style={{ ...cssStyles.EditTextStyle, width: "80%" }}
            />
            <EditText
              onChange={(e) => setDueDateTag(e.target.value)}
              value={dueDateTag}
              placeholder={placeholders.invoiceTag.dueDateTag}
              style={{ ...cssStyles.EditTextStyle, width: "80%" }}
            />
          </Box>
          <Box sx={{ width: "60%" }}>
            <EditText
              onChange={(e) => setInvoiceName(e.target.value)}
              value={invoiceName}
              placeholder={placeholders.invoice.invoiceName}
              style={{ ...cssStyles.EditTextStyle, width: "80%" }}
            />
            <EditText
              onChange={(e) => setInvoiceDate(e.target.value)}
              value={invoiceDate}
              placeholder={placeholders.invoice.invoiceDate}
              style={{ ...cssStyles.EditTextStyle, width: "80%" }}
            />
            <EditText
              onChange={(e) => setDueDate(e.target.value)}
              value={dueDate}
              placeholder={placeholders.invoice.invoiceDate}
              style={{ ...cssStyles.EditTextStyle, width: "80%" }}
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ height: "100%", width: "100%", marginTop: "30px" }}>
        <Box
          sx={{
            width: "100%",
            padding: "0 15px",
            boxSizing: "border-box",
          }}
        >
          <Grid
            container
            sx={{ backgroundColor: "#666666", height: "40px", width: "97%" }}
          >
            <Grid item xs={6} sx={{ height: "100%" }}>
              <Typography
                sx={{
                  color: "white",
                  display: "flex",
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "0 10px",
                  height: "100%",
                  alignItems: "center",
                }}
              >
                {invoiceTableHeading.desc}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                sx={{
                  color: "white",
                  display: "flex",
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "0 10px",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                {invoiceTableHeading.qty}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                sx={{
                  color: "white",
                  display: "flex",
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "0 10px",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                {invoiceTableHeading.rate}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                sx={{
                  color: "white",
                  display: "flex",
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "0 10px",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                {invoiceTableHeading.amount}
              </Typography>
            </Grid>
          </Grid>
          {/* Row */}
          <Box sx={{ width: "97%", display: "flex" }}>
            <CustomizedRow />
            
          </Box>
          <Box sx={{ width: "100%", display: "flex" }}>
            <CustomizedRow />
            <Box
              sx={{
                width: "3%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: "0",
                opacity: "0",
                "&:hover": {
                  cursor: "pointer",
                  zIndex: "1",
                  opacity: "1"
                },
              }}
            >
              <FeatherIcon
                icon="trash"
                width="20px"
                height="20px"
                color="black"
                style={{
                  // visibility: "hidden",
                  "&:hover": { visibility: "visible", cursor: "pointer" },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default InvoiceCard;
