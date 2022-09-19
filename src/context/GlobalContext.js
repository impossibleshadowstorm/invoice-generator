import React from "react";

const GlobalContext = React.createContext({
  company: {},
  companyInputEvent: () => {},
  invoiceHeading: "",
  setInvoiceHeading: () => {},
  invoiceMetaData: "",
  invoiceMetaDataInputEvent: () => {},
  billCurrency: "",
  setBillCurrency: ()=>{}
});

export default GlobalContext;
