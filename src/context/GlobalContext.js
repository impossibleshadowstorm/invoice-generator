import React from "react";

const GlobalContext = React.createContext({
  company: {},
  companyInputEvent: () => {},
  invoiceHeading: "",
  setInvoiceHeading: () => {},
  invoiceMetaData: "",
  invoiceMetaDataInputEvent: () => {},
  billCurrency: "",
  setBillCurrency: () => {},
  itemsRow: [],
  setItemsRow: () => {},
  totalPart: {},
  setTotalPart: () => {},
});

export default GlobalContext;
