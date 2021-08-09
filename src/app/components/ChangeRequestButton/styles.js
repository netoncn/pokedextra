import { makeStyles } from "@material-ui/styles"
import { color } from "app/ui/Theme/colors"

export default makeStyles({
  changeRequestContainer: {
    position: "fixed",
    height: "150px",
    width: "150px",
    backgroundColor: color.changeBackground,
    left: "-75px",
    top: "-75px",
    transform: "rotate(135deg)",
    cursor: "pointer",
    zIndex: 20,
  },
  changeRequestButton: {
    top: "5px",
    left: "20px",
    color: color.changeText,
    position: "fixed",
    transform: "rotate(180deg)",
  },
})
