import Homepage from "./containers/Home";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: { color: "#ffff" },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: { backgroundColor: "#0000" },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
