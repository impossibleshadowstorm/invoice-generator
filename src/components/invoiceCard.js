import React, { useContext, useEffect } from "react";
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
  SmallEditTextStyle: {
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
    itemsRow,
    setItemsRow,
    totalPart,
    setTotalPart,
  } = useContext(GlobalContext);

  const handleAddListItem = () => {
    setItemsRow([
      ...itemsRow,
      {
        desc: "",
        qty: 0,
        rate: 0.0,
        amt: 0.0,
      },
    ]);
  };
  const handleRemoveListItem = (idx) => {
    const list = [...itemsRow];
    list.splice(idx, 1);
    setItemsRow(list);
  };

  const handleRowItemChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...itemsRow];
    list[index][name] = value;

    if (name === "rate" || name === "qty") {
      var amount = 0.0;
      var qt = parseFloat(list[index].qty);
      var rt = parseFloat(list[index].rate);
      amount = qt * rt;
      list[index]["amt"] = amount;
    }

    setItemsRow(list);
  };

  const handleSalesTaxChange = (e) => {
    const { name, value } = e.target;

    const list = { ...totalPart };
    list[name] = value;

    setTotalPart(list);
  };

  const calculateSubTotal = () => {
    const list = [...itemsRow];

    let total = 0;

    list.map((item, index) => {
      total += parseFloat(item["amt"]);
    });

    return total;
  };

  useEffect(() => {
    const updateSubTotal = { ...totalPart, subTotal: calculateSubTotal() };

    const subtotal = updateSubTotal["subTotal"];
    const salesTax = updateSubTotal["salesTax"];
    let salesTaxTotal = (subtotal * salesTax) / 100;

    const updateSalesTaxTotal = {
      ...updateSubTotal,
      salesTaxTotal: salesTaxTotal,
    };

    let total =
      updateSalesTaxTotal["subTotal"] + updateSalesTaxTotal["salesTaxTotal"];

    const updateTotal = {
      ...updateSalesTaxTotal,
      total: total,
    };

    setTotalPart(updateTotal);
  }, [itemsRow, totalPart["subTotal"], totalPart["salesTax"]]);

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
        {/* Bill To:: */}
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
        {/* Invoice Section */}
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
              type="date"
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
          {/* <Box sx={{ width: "97%", display: "flex" }}>
            <CustomizedRow />
          </Box> */}
          {/* Items List */}
          {itemsRow.map((item, idx) => (
            <Box sx={{ width: "100%", display: "flex" }}>
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
                {/* Description */}
                <Grid item xs={6} sx={{ height: "90%" }}>
                  <EditTextarea
                    name="desc"
                    value={item["desc"]}
                    onChange={(e) => handleRowItemChange(e, idx)}
                    placeholder="Description"
                    style={{
                      ...cssStyles.SmallEditTextStyle,
                      height: "89px",
                      boxSizing: "border-box",
                    }}
                  />
                </Grid>
                {/* Quantity */}
                <Grid item xs={2}>
                  <EditText
                    type="number"
                    name="qty"
                    value={item["qty"].toString()}
                    onChange={(e) => handleRowItemChange(e, idx)}
                    placeholder="0"
                    style={{
                      ...cssStyles.SmallEditTextStyle,
                      display: "flex",
                      alignItems: "center",
                      float: "right",
                      textAlign: "right",
                      justifyContent: "flex-end",
                    }}
                  />
                </Grid>
                {/* Rate */}
                <Grid item xs={2}>
                  <EditText
                    type="number"
                    name="rate"
                    value={item["rate"].toString()}
                    onChange={(e) => handleRowItemChange(e, idx)}
                    placeholder="0.00"
                    style={{
                      ...cssStyles.SmallEditTextStyle,
                      display: "flex",
                      alignItems: "center",
                      float: "right",
                      textAlign: "right",
                      justifyContent: "flex-end",
                    }}
                  />
                </Grid>
                {/* Amount */}
                <Grid item xs={2}>
                  <EditText
                    readonly={true}
                    type="number"
                    name="amt"
                    value={item["amt"].toString()}
                    onChange={(e) => handleRowItemChange(e, idx)}
                    placeholder="0.00"
                    style={{
                      ...cssStyles.SmallEditTextStyle,
                      display: "flex",
                      alignItems: "center",
                      float: "right",
                      textAlign: "right",
                      justifyContent: "flex-end",
                    }}
                  />
                </Grid>
              </Grid>
              <Box
                onClick={() => handleRemoveListItem(idx)}
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
                    "&:hover": { visibility: "visible", cursor: "pointer" },
                  }}
                />
              </Box>
            </Box>
          ))}
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
        {/* Add Button */}
        <Box sx={{ width: "48.5%", justifyContent: "center" }}>
          <Box
            onClick={handleAddListItem}
            sx={{
              padding: "5px",
              borderRadius: "5px",
              boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
              boxSizing: "border-box",
              backgroundColor: "green",
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "10px 20px",
              "&:hover": {
                backgroundColor: "red",
                cursor: "pointer",
              },
            }}
          >
            {/* Plus Icon Box */}
            <Box
              sx={{
                height: "20px",
                width: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
              }}
            >
              <FeatherIcon
                icon="plus"
                color="white"
                height="15px"
                width="15px"
              />
            </Box>
            <Typography
              sx={{ color: "white", fontSize: "15px", marginLeft: "5px" }}
            >
              Add Line Item
            </Typography>
          </Box>
        </Box>
        {/* Total Side */}
        <Box
          sx={{
            width: "48.5%",
            height: "100%",
          }}
        >
          {/* Sub Total */}
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
                {totalPart["subTotal"]}
              </Typography>
            </Box>
          </Box>
          {/* Sales Tax */}
          <Box sx={{ display: "flex", height: "30%", alignItems: "center" }}>
            <Box
              sx={{
                width: "35%",
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Typography
                style={{
                  ...cssStyles.EditTextStyle,
                  borderBottomColor: "transparent",
                  width: "100px",
                  textAlign: "right",
                  color: "#5A5A5A",
                  fontSize: "16px",
                }}
              >
                Sales Tax
              </Typography>
              <EditText
                type="number"
                placeholder="10"
                name="salesTax"
                value={totalPart["salesTax"].toString()}
                onChange={(e) => handleSalesTaxChange(e)}
                style={{
                  ...cssStyles.EditTextStyle,
                  width: "40px",
                  textAlign: "right",
                  color: "#5A5A5A",
                  fontSize: "16px",
                }}
              />
              <Typography
                style={{
                  ...cssStyles.EditTextStyle,
                  borderBottomColor: "transparent",
                  width: "15px",
                  textAlign: "right",
                  color: "#5A5A5A",
                  fontSize: "16px",
                }}
              >
                %
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
                {totalPart["salesTaxTotal"]}
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
                {totalPart["total"]}
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
