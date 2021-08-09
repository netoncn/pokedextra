import { makeStyles } from "@material-ui/styles"
import { color } from "app/ui/Theme/colors"

const getCardBackground = (types) => {
  if (types[1]) {
    return `radial-gradient(${color[types[1]]} 10%, ${color[types[0]]} 60%)`
  } else {
    return color[types[0]]
  }
}

const handleCaptured = (captured) => {
  return captured ? "none" : "brightness(0.3) grayscale(100%)"
}

export default makeStyles({
  cardContainer: {
    position: "relative",
    height: "250px",
    boxShadow: `0 3px 15px ${color.changeBackground}`,
    borderRadius: "20px",
    transition: "transform 1.5s",
    transformStyle: "preserve-3d",
    marginTop: "40px",
  },
  pokeCard: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    border: `4px solid ${color.white}`,
    backfaceVisibility: "hidden",
    background: (props) => getCardBackground(props.types),
    cursor: "pointer",
  },
  captureButton: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  pokeImage: {
    filter: (props) => handleCaptured(props.captured),
  },
  pokeNumber: {
    borderRadius: "20px",
    padding: "3px 10px",
    fontSize: "1.1rem",
    background: color.transparentBlack,
  },
  pokeName: {
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "capitalize",
  },
})
