import { Container, Grow, Grid, Avatar, AppBar } from "@mui/material";
import Products from "./components/products/Products";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg" classname={classes.container}>
        <AppBar position="static" classname={classes.appBar}>
          <Avatar classname={classes.avatar} />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Products />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
};

export default App;
