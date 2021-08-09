import { makeStyles } from "@material-ui/styles"
import { color } from "app/ui/Theme/colors"

export default makeStyles({
  changeViewModeContainer: {
    position: "fixed",
    height: "150px",
    width: "150px",
    backgroundColor: color.changeBackground,
    right: "-75px",
    top: "-75px",
    transform: "rotate(135deg)",
    cursor: "pointer",
    zIndex: 20,
  },
  changeViewModeButton: {
    top: "65px",
    right: "-20px",
    color: color.changeText,
    position: "fixed",
    transform: "rotate(270deg)",
  },
})
