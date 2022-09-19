import { Box, Container, Typography } from "@mui/material";
import "./App.css";
import InvoiceCard from "./components/invoiceCard";
// import TopMenuBar from "./components/topMenuBar";
import FeatherIcon from "feather-icons-react";

function App() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#F2F3F5",
        position: "relative",
      }}
    >
      <Box sx={{ height: "100px", width: "100%" }}></Box>
      {/* TopMenuBar */}
      <Container
        sx={{
          width: "70vw",
          height: "50px",
          display: "flex",
          alignItems: "center",
          boxSizing: "border-box",
          justifyContent: "space-between",
        }}
      >
        <Box display="flex">
          {/* Send */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "7px 10px",
              borderRadius: "5px",
              backgroundColor: "white",
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "#FDF4DB",
              },
            }}
          >
            <FeatherIcon icon="mail" width="20px" height="20px" color="black" />
            <Typography
              sx={{
                height: " 100%",
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
                color: "black",
              }}
            >
              Send
            </Typography>
          </Box>
          {/* Get PDF */}
          <Box
            sx={{
              marginLeft: "20px",
              display: "flex",
              alignItems: "center",
              padding: "7px 10px",
              borderRadius: "5px",
              backgroundColor: "white",
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "#FDF4DB",
              },
            }}
            //   onClick={<GetDocument child={children} />}
          >
            <FeatherIcon
              icon="file-text"
              width="20px"
              height="20px"
              color="black"
            />
            <Typography
              sx={{
                height: " 100%",
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
                color: "black",
              }}
            >
              Get PDF
            </Typography>
          </Box>
          {/* Printer */}
          <Box
            sx={{
              marginLeft: "20px",
              display: "flex",
              alignItems: "center",
              padding: "7px 10px",
              borderRadius: "5px",
              backgroundColor: "white",
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "#FDF4DB",
              },
            }}
          >
            <FeatherIcon
              icon="printer"
              width="20px"
              height="20px"
              color="black"
            />
          </Box>
        </Box>
        <Box>
          {/* Save */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "7px 10px",
              borderRadius: "5px",
              backgroundColor: "#F46E3E",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <FeatherIcon icon="save" width="20px" height="20px" color="white" />
            <Typography
              sx={{
                height: " 100%",
                display: "flex",
                alignItems: "center",
                marginLeft: "10px",
                color: "white",
              }}
            >
              Save
            </Typography>
          </Box>
        </Box>
      </Container>
      <Box sx={{ height: "20px", width: "100%" }}></Box>
      <InvoiceCard />
      <Box sx={{ height: "100px", width: "100%" }}></Box>
    </Box>
  );
}

export default App;
