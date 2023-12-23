import { Box, ThemeProvider, createTheme } from "@mui/material";
import { Home } from "./pages/pages";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("dark");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box
          bgcolor={"background.default"}
          color={"text.primary"}
          className="App"
        >
          <Home />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
