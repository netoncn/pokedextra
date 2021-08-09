import { makeStyles } from "@material-ui/styles"

export default makeStyles({
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(5, auto)",
    gridColumnGap: "2%",
    padding: "0 2%",
    ["@media (max-width:740px)"]: {
      gridTemplateColumns: "repeat(2, auto)",
    },
  },
  navigationButtons: {
    margin: "40px 0",
    display: "flex",
    alignItens: "center",
    justifyContent: "space-evenly",
  },
})
