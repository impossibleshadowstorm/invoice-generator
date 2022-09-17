import { Box } from "@mui/material";
import "./App.css";
import InvoiceCard from "./components/invoiceCard";

function App() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#F2F3F5",
        position: "relative",
      }}
    >
      <InvoiceCard />
    </Box>
  );
}

export default App;
