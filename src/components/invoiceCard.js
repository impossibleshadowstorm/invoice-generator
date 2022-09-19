import React, { useContext, useState } from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  MenuItem,
  Select,
} from "@mui/material";
import { EditText, EditTextarea } from "react-edit-text";
import style from "./invoiceCard.module.css";
import data from "./data/country";
import GlobalContext from "../context/GlobalContext";
import CustomizedRow from "./common/customizedRow";
import FeatherIcon from "feather-icons-react";
import {Document, Page} from "react-pdf";

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
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  EditTextInvoiceStyle: {
    paddingRight: "0",
    textAlign: "right",
    color: "black",
    fontSize: "45px",
    width: "90%",
    textTransform: "uppercase",
    borderBottom: "1px dashed #E1ECFD",
    float: "right",
    height: "75px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  EditTextareaStyle: {
    margin: "2px 0",
    marginRight: "5px",
    fontSize: "14px",
    boxSizing: "border-box",
    border: "none",
    borderBottom: "1px dashed #E1ECFD",
    width: "80%",
    color: "black",
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
    company,
    companyInputEvent,
    invoiceHeading,
    setInvoiceHeading,
    invoiceMetaData,
    invoiceMetaDataInputEvent,
    billCurrency,
    setBillCurrency,
  } = useContext(GlobalContext);

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <Container
      sx={{
        backgroundColor: "white",
        width: "70vw",
        boxShadow: " 0 0 17px 0 rgb(16 40 73 / 9%)",
        padding: "40px",
      }}
    >
      {/* Supplier Company Details */}
      <Box sx={{ height: "162px", width: "100%", display: "flex" }}>
        <Box
          sx={{
            boxSizing: "border-box",
            width: "50%",
            padding: "0 15px",
          }}
        >
          <EditText
            onChange={companyInputEvent}
            name="companyName"
            value={company.companyName}
            placeholder={placeholders.supplierCompany.yourCompany}
            style={cssStyles.EditTextStyle}
          />
          <EditText
            onChange={companyInputEvent}
            name="yourName"
            value={company.yourName}
            placeholder={placeholders.supplierCompany.yourName}
            style={cssStyles.EditTextStyle}
          />
          <EditText
            onChange={companyInputEvent}
            name="companyAddress"
            value={company.companyAddress}
            placeholder={placeholders.supplierCompany.companyAddress}
            style={cssStyles.EditTextStyle}
          />
          <EditText
            onChange={companyInputEvent}
            name="companyCityStateZip"
            value={company.companyCityStateZip}
            placeholder={placeholders.supplierCompany.cityStateZip}
            style={cssStyles.EditTextStyle}
          />
          <Select
            sx={{ width: "350px" }}
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
            defaultValue={company.companyCountry}
            name="companyCountry"
            onChange={companyInputEvent}
            value={company.companyCountry}
          >
            {data.Country.map((items) => (
              <MenuItem value={items.code}>{items.name}</MenuItem>
            ))}
          </Select>
        </Box>
        <Box sx={{ width: "50%" }}>
          <Box sx={{ height: "20px" }}></Box>
          <EditText
            onChange={(e) => setInvoiceHeading(e.target.value.toLowerCase())}
            value={invoiceHeading}
            defaultValue={invoiceHeading}
            placeholder="INVOICE"
            style={{
              ...cssStyles.EditTextStyle,
              ...cssStyles.EditTextInvoiceStyle,
            }}
          />
        </Box>
      </Box>
      <Box sx={{ height: "80px" }}></Box>
      {/* Customer Company Details */}
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
            onChange={companyInputEvent}
            name="clientCompanyName"
            value={company.clientCompanyName}
            placeholder={placeholders.billToCompany.clientCompany}
            style={cssStyles.EditTextStyle}
          />
          <EditText
            onChange={companyInputEvent}
            name="clientCompanyAddress"
            value={company.clientCompanyAddress}
            placeholder={placeholders.billToCompany.clientAddress}
            style={cssStyles.EditTextStyle}
          />
          <EditText
            onChange={companyInputEvent}
            name="clientCompanyCityStateZip"
            value={company.clientCompanyCityStateZip}
            placeholder={placeholders.billToCompany.cityStateZip}
            style={cssStyles.EditTextStyle}
          />
          <Select
            sx={{ width: "350px" }}
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
            defaultValue={company.clientCompanyCountry}
            name="clientCompanyCountry"
            onChange={companyInputEvent}
            value={company.clientCompanyCountry}
          >
            {data.Country.map((items) => (
              <MenuItem value={items.code}>{items.name}</MenuItem>
            ))}
          </Select>
        </Box>
        <Box sx={{ width: "30%", display: "flex" }}>
          <Box sx={{ width: "40%" }}>
            <EditText
              onChange={invoiceMetaDataInputEvent}
              name="invoiceNumberTag"
              value={invoiceMetaData.invoiceNumberTag}
              placeholder={placeholders.invoiceTag.invoiceNameTag}
              style={{ ...cssStyles.EditTextStyle, width: "80%" }}
            />
            <EditText
              onChange={invoiceMetaDataInputEvent}
              name="invoiceDateTag"
              value={invoiceMetaData.invoiceDateTag}
              placeholder={placeholders.invoiceTag.invoiceDateTag}
              style={{ ...cssStyles.EditTextStyle, width: "80%" }}
            />
            <EditText
              onChange={invoiceMetaDataInputEvent}
              name="invoiceDueDateTag"
              value={invoiceMetaData.invoiceDueDateTag}
              placeholder={placeholders.invoiceTag.dueDateTag}
              style={{ ...cssStyles.EditTextStyle, width: "80%" }}
            />
          </Box>
          <Box sx={{ width: "60%" }}>
            <EditText
              onChange={invoiceMetaDataInputEvent}
              name="invoiceNumber"
              value={invoiceMetaData.invoiceNumber}
              placeholder={placeholders.invoice.invoiceName}
              style={{ ...cssStyles.EditTextStyle, width: "80%" }}
            />
            <EditText
              onChange={invoiceMetaDataInputEvent}
              name="invoiceDate"
              value={invoiceMetaData.invoiceDate}
              placeholder={placeholders.invoice.invoiceDate}
              style={{ ...cssStyles.EditTextStyle, width: "80%" }}
            />
            <EditText
              onChange={invoiceMetaDataInputEvent}
              name="invoiceDueDate"
              value={invoiceMetaData.invoiceDueDate}
              placeholder={placeholders.invoice.invoiceDate}
              style={{ ...cssStyles.EditTextStyle, width: "80%" }}
            />
          </Box>
        </Box>
      </Box>
      {/* Table Grid */}
      <Box sx={{ height: "100%", width: "100%", marginTop: "30px" }}>
        <Box
          sx={{
            width: "100%",
            padding: "0 15px",
            boxSizing: "border-box",
          }}
        >
          {/* Heading */}
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
                  opacity: "1",
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

      {/* Total */}
      <Box
        sx={{
          height: "140px",
          display: "flex",
          padding: "4px 15px",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        <Box sx={{ width: "48.5%" }}></Box>
        <Box
          sx={{
            width: "48.5%",
            height: "100%",
          }}
        >
          <Box sx={{ display: "flex", height: "30%" }}>
            <Box
              sx={{
                width: "35%",
                padding: "10px",
                boxSizing: "border-box",
              }}
            >
              <Typography sx={{ textAlign: "right", color: "#5A5A5A" }}>
                Sub Total
              </Typography>
            </Box>
            <Box
              sx={{
                width: "65%",
                padding: "10px",
                boxSizing: "border-box",
              }}
            >
              <Typography
                sx={{ textAlign: "right", color: "black", fontWeight: "bold" }}
              >
                0
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", height: "30%" }}>
            <Box
              sx={{
                width: "35%",
                padding: "10px",
                boxSizing: "border-box",
              }}
            >
              <Typography sx={{ textAlign: "right", color: "#5A5A5A" }}>
                Sales Taxes (10%)
              </Typography>
            </Box>
            <Box
              sx={{
                width: "65%",
                padding: "10px",
                boxSizing: "border-box",
              }}
            >
              <Typography
                sx={{ textAlign: "right", color: "black", fontWeight: "bold" }}
              >
                0
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              height: "40%",
              alignItems: "center",
              backgroundColor: "#E3E3E3",
              borderTop: "2px solid #C7C7C7",
            }}
          >
            <Box
              sx={{
                width: "35%",
                padding: "10px",
                boxSizing: "border-box",
              }}
            >
              <Typography
                sx={{
                  textAlign: "right",
                  textTransform: "uppercase",
                  color: "#5A5A5A",
                }}
              >
                Total
              </Typography>
            </Box>
            <Box
              sx={{
                width: "65%",
                padding: "10px",
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              {/* Currency Selector */}
              <Select
                sx={{ width: "10%px" }}
                variant="standard"
                style={{
                  backgroundColor: "transparent",
                  outline: "none",
                  color: "#444",
                  border: "none",
                  fontSize: "14px",
                }}
                defaultValue={billCurrency}
                onChange={(e) => {
                  setBillCurrency(e.target.value);
                  console.log(billCurrency);
                }}
                value={billCurrency}
              >
                {data.Currency.map((items) => (
                  <MenuItem value={items.currency}>{items.country}</MenuItem>
                ))}
              </Select>
              <Typography
                sx={{
                  textAlign: "right",
                  color: "black",
                  fontWeight: "bold",
                  width: "50%",
                }}
              >
                0
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Note */}
      <Box
        sx={{
          marginTop: "5px",
          padding: "0 15px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <EditText
          placeholder={"Notes"}
          style={{
            ...cssStyles.EditTextStyle,
            width: "100%",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        />
        <EditTextarea
          placeholder="Description"
          style={{
            ...cssStyles.EditTextareaStyle,
            height: "89px",
            width: "100%",
            boxSizing: "border-box",
            padding: "5px ",
          }}
        />
      </Box>

      {/* T & C's */}
      <Box
        sx={{
          padding: "0 15px",
          width: "100%",
          boxSizing: "border-box",
          marginTop: "20px",
        }}
      >
        <EditText
          placeholder={"Terms And Conditions"}
          style={{
            ...cssStyles.EditTextStyle,
            width: "100%",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        />
        <EditTextarea
          placeholder="Description"
          style={{
            ...cssStyles.EditTextareaStyle,
            height: "89px",
            width: "100%",
            boxSizing: "border-box",
            padding: "5px ",
          }}
        />
      </Box>
    </Container>
  );
};

export default InvoiceCard;
