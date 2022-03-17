import Layout from "./components/layout/Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "./actions/products";
import { Container, CssBaseline } from "@mui/material";

const theme = createTheme();

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container
          component="main"
          sx={{
            m: 0,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Layout />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
