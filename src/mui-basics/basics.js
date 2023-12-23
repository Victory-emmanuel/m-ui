import { Button, ThemeProvider, Typography, styled } from "@mui/material";
import { DeleteOutline, Downloading } from "@mui/icons-material";
import { theme } from "./themes/themes";
function Basics() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button variant="text">Text</Button>
        <Button
          color="filler"
          startIcon={<DeleteOutline />}
          variant="contained"
        >
          Contained
        </Button>
        <Button
          color="filprimaryler"
          startIcon={<DeleteOutline />}
          variant="contained"
        >
          Contained
        </Button>
        <Button variant="outlined" disabled endIcon={<Downloading />}>
          Outlined
        </Button>
        <Typography variant="h1">h1. Heading</Typography>
        <MyButton disabled>My button</MyButton>
        <MyButton>My button</MyButton>
      </div>
    </ThemeProvider>
  );
}
//custom styling
const MyButton = styled(Button)({
  color: "#252525",
  margin: 5,
  backgroundColor: "pink",
  "&:hover": { color: "purple", transition: "0.5s " },
  "&:disabled": {
    padding: "1rem",
    background: "#252525",
    color: "#fff",
  },
});

export default Basics;
