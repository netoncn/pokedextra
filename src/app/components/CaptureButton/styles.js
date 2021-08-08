import { makeStyles } from "@material-ui/styles"

export default makeStyles({
  captureButton: {
    width: (props) => (props.size === "large" ? "60px" : "40px"),
    padding: "5px",
    height: "fit-content",
    transform: (props) => (props.captured ? "rotate(45deg)" : "none"),
  },
})
