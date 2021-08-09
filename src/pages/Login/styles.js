import { makeStyles } from "@material-ui/styles"
import { color } from "app/ui/Theme/colors"

export default makeStyles({
  loginPage: {
    display: "flex",
    alignItems: "center",
    height: "100vh",
    background: `linear-gradient(0deg, ${color.white} 54%, ${color.black} 55%, ${color.red} 56%)`,
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
    color: color.grey,
    margin: "32px 0",
    width: "100%",
    textAlign: "center",
  },
})
