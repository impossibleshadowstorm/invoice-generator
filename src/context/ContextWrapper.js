import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

const ContextWrapper = (props) => {
  const [company, setCompany] = useState({
    companyName: "",
    yourName: "",
    companyAddress: "",
    companyCityStateZip: "",
    companyCountry: "IN",
    clientCompanyName: "",
    clientCompanyAddress: "",
    clientCompanyCityStateZip: "",
    clientCompanyCountry: "IN",
  });

  const companyInputEvent = (event) => {
    const { value, name } = event.target;

    setCompany((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const date = new Date(Date.now());

  const [invoiceMetaData, setInvoiceMetaData] = useState({
    invoiceNumberTag: "Invoice#",
    invoiceNumber: "",
    invoiceDateTag: "Invoice Date",
    invoiceDate: new Date().getFullYear(),
    invoiceDueDateTag: "Due Date",
    invoiceDueDate: null,
  });

  const invoiceMetaDataInputEvent = (event) => {
    const { value, name } = event.target;

    setInvoiceMetaData((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  // Invoice Data
  const [invoiceHeading, setInvoiceHeading] = useState("Invoice");
  const [billCurrency, setBillCurrency] = useState("INR");

  // Add Lines
  const [itemsRow, setItemsRow] = useState([
    {
      desc: "",
      qty: 0,
      rate: 0.0,
      amt: 0.0,
    },
  ]);

  // Total Part
  const [totalPart, setTotalPart] = useState({
    subTotal: 0.0,
    salesTax: 10.0,
    salesTaxTotal: 0.0,
    total: 0.0,
  });

  return (
    <GlobalContext.Provider
      value={{
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
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
