import React from "react";

const GlobalContext = React.createContext({
  invoiceName: "",
  setInvoiceName: () => {},
  invoiceDate: "",
  setInvoiceDate: () => {},
  dueDate: "",
  setDueDate: () => {},
  invoiceNameTag: "",
  setInvoiceNameTag: () => {},
  invoiceDateTag: "",
  setInvoiceDateTag: () => {},
  dueDateTag: "",
  setDueDateTag: () => {},
  companyInputEvent: () => {},
  company: {},
  setCompany: () => {},
});

export default GlobalContext;
