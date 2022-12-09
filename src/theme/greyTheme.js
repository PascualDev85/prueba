import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const greyTheme = createTheme({
  palette: {
    primary: {
      main: "#3B434D",
      contrastText: "#fff",
      light: "#FE5000",
    },
    secondary: {
      main: "#FE5000",
    },
    error: {
      main: red.A400,
    },
  },
});
