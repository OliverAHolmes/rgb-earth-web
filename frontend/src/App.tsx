import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DataTable from "./DataTable";

export default function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          RGB Earth Users
        </Typography>
        <DataTable />
      </Box>
    </Container>
  );
}
