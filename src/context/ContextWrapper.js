import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

const ContextWrapper = (props) => {
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [companyCityStateZip, setCompanyCityStateZip] = useState("");
  const [companyCountry, setCompanyCountry] = useState("");
  const [yourName, setYourName] = useState("");
  const [invoiceNameTag, setInvoiceNameTag] = useState("Invoice#");
  const [invoiceName, setInvoiceName] = useState("");
  const [invoiceDateTag, setInvoiceDateTag] = useState("Invoice Date");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDateTag, setDueDateTag] = useState("Due Date");
  const [dueDate, setDueDate] = useState("");

  const [clientCompanyName, setClientCompanyName] = useState("");
  const [clientCompanyAddress, setClientCompanyAddress] = useState("");
  const [clientCompanyCityStateZip, setClientCompanyCityStateZip] =
    useState("");
  const [clientCompanyCountry, setClientCompanyCountry] = useState("");

  const [company, setCompany] = useState({
    companyName: "",
    companyAddress: "",
    companyCityStateZip: "",
    companyCountry: "",
    yourName: "",
    clientCompanyName: "",
    clientCompanyAddress: "",
    clientCompanyCityStateZip: "",
    clientCompanyCountry: "",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);

    const { value, name } = event.target;

    setCompany((preValue) => {
      if (name === "companyName") {
        return;
      }
    });
  };

  // Invoice Data
  const [invoiceItem, setInvoiceItem] = useState();

  return (
    <GlobalContext.Provider
      value={{
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
        invoiceName,
        setInvoiceName,
        invoiceNameTag,
        setInvoiceNameTag,
        invoiceDateTag,
        setInvoiceDateTag,
        invoiceDate,
        setInvoiceDate,
        dueDateTag,
        setDueDateTag,
        dueDate,
        setDueDate,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextWrapper;
