import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const greyTheme = createTheme({
  palette: {
    primary: {
      main: "#3B434D",
    },
    secondary: {
      main: "#FE5000",
    },
    error: {
      main: red.A400,
    },
  },
});
