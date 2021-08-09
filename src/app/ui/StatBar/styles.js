import { makeStyles } from "@material-ui/styles"
import { color } from "app/ui/Theme/colors"

export default makeStyles({
  attr: {
    height: "10px",
    width: "100%",
    background: color.white,
  },
  attr_value: {
    height: "10px",
    width: (props) => `${props.value / (props.maxValue / 100)}%`,
    background: color.mostard,
  },
})
