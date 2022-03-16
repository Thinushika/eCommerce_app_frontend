import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  container: {
    width: "1440px",
    height: "1024px",
    position: "relative",
    background: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
  },
  appBar: {
    borderRadius: 15,
    margin: "3px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: "58px",
    height: "58px",
    left: "179px",
  },
}));
