import { makeStyles } from "@material-ui/styles"

export default makeStyles({
  loginPage: {
    display: "flex",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(0deg, #FFF 54%, #000 55%, red 56%)",
    flexDirection: "column",
  },
  loginTop: {
    display: "flex",
    justifyContent: "center",
    height: "50vh",
  },
  logoImage: {
    alignSelf: "center",
    maxWidth: "700px",
    ["@media (max-width:780px)"]: {
      maxWidth: "100%",
    },
  },
  loginBottom: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    height: "50vh",
    width: "100%",
    maxWidth: "320px",
  },
  separator: {
    fontSize: "14px",
    color: "#BBB",
    margin: "32px 0",
    width: "100%",
    textAlign: "center",
  },
})
