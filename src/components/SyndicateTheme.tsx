import { createTheme } from "@mui/material/styles";

const SyndicateTheme = createTheme({
  palette: {
    primary: {
      main: "#5B1CD4",
    },
    secondary: {
      main: "#D0D0D0",
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& input::placeholder": {
            color: "#D0D0D0",
            padding: "0.2rem",
            fontSize: "0.75rem",
            fontWeight: 400,
            opacity: 1,
          },
          "&.Mui-focused input::placeholder": {
            color: "#5B1CD4",
          },
          "&:hover input::placeholder": {
            color: "#5B1CD4",
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          color: "#D0D0D0", // Customize the color as needed
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& input::placeholder": {
            color: "#D0D0D0",
            padding: "0.2rem",
            fontSize: "0.75rem",
            fontWeight: 400,
            opacity: 1,
          },
          "&.Mui-focused input::placeholder": {
            color: "#5B1CD4",
          },
          "&:hover input::placeholder": {
            color: "#5B1CD4",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#D6C3F8 !important",
          },
        },
      },
    },
    // Add more component overrides as needed
  },
});

export default SyndicateTheme;
