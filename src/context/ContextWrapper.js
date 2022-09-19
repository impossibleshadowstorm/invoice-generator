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

  const [invoiceMetaData, setInvoiceMetaData] = useState({
    invoiceNumberTag: "Invoice#",
    invoiceNumber: "",
    invoiceDateTag: "Invoice Date",
    invoiceDate: "",
    invoiceDueDateTag: "Due Date",
    invoiceDueDate: "",
  });

  const invoiceMetaDataInputEvent = (event) => {
    const { value, name } = event.target;

    console.log(value);
    console.log(name);

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
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
