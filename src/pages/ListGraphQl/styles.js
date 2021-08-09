import { makeStyles } from "@material-ui/styles"
import { color } from "app/ui/Theme/colors"

export default makeStyles({
  headerContainer: {
    display: "flex",
    alignItems: "flex-end",
    margin: "0 40px",
  },
  modalInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalPaper: {
    backgroundColor: color.lightgrey,
    border: `2px solid ${color.white}`,
    padding: "30px",
    minWidth: "320px",
    minHeight: "350px",
  },
})
