import { makeStyles } from "@material-ui/styles"
import { color } from "app/ui/Theme/colors"

export default makeStyles({
  registerModal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  registerPaper: {
    backgroundColor: color.lightgrey,
    border: `2px solid ${color.white}`,
    padding: "30px",
    minWidth: "320px",
    minHeight: "350px",
  },
  registerForm: {
    display: "flex",
    gap: "2rem",
    flexFlow: "column",
  },
  registerTitle: {
    font: "700 36px sans-serif",
    marginBottom: "24px",
  },
  registerBtn: {
    marginTop: "36px",
  },
})
