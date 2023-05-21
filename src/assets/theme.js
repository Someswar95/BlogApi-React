import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#FDFEFE",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#797EF6",
      light: "#4ADEDE",
      dark: "#1E2F97",
    },
    secondary: {
      main: "#AAB7B8",
      light: "#979A9A",
      dark: "#424949",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
