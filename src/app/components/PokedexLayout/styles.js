import { makeStyles } from "@material-ui/styles"

export default makeStyles({
  pokedexContainer: {
    height: "40rem",
    width: "63rem",
    background: "transparent",
    display: "grid",
    gridTemplateColumns: "33rem 30rem",
    borderRadius: "0.5rem",
    ["@media (max-width:740px)"]: {
      width: "auto",
      gridTemplateColumns: "min-content",
      justifyContent: "center",
      gridTemplateRows: "max-content max-content",
    },
  },
})
