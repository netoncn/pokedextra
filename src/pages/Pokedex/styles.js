import { makeStyles } from "@material-ui/styles"
import { color } from "app/ui/Theme/colors"

export default makeStyles({
  pokedexPage: {
    width: "100vw",
    height: "100vh",
    backgroundColor: color.pokedexBackground,
  },
  pokedexContainer: {
    width: "fit-content",
    paddingTop: "40px",
    margin: "0 auto",
  },
})
