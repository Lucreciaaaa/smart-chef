import "./App.css";
import { Container, Paper, Box, Typography, Button } from "@mui/material";

function App() {
  const serviceList = ["Service 1", "Service 2", "Service 3"];

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Overview
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          justifyContent: "space-between",
        }}
      >
        {serviceList.map((service: string) => (
          <Paper elevation={3} sx={{ width: { xs: 1, md: 320 } }}>
            <Box margin={3}>
              <Typography variant="h3">{service}</Typography>
              <Typography marginTop={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
              <Button variant="contained" color="secondary">
                Learn more
              </Button>
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
}

export default App;
