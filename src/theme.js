import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#612ea1",
    },
    secondary: {
      main: "#9964ff",
    },
    white: {
      main: "#F8F9FA",
    },
    info: {
      main: "#faf8f0",
    },
    info: {
      main: "#2ad833",
      contrastText: "#fff",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
