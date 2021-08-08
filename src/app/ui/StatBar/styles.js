import { makeStyles } from "@material-ui/styles"

export default makeStyles({
  attr: {
    height: "10px",
    width: "100%",
    background: "#FFF",
  },
  attr_value: {
    height: "10px",
    width: (props) => `${props.value / (props.maxValue / 100)}%`,
    background: "#eaa526",
  },
})
