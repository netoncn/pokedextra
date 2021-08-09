import { makeStyles } from "@material-ui/styles"
import { color } from "app/ui/Theme/colors"

export default makeStyles({
  headerContainer: {
    display: "flex",
    alignItems: "flex-end",
    margin: "0 40px",
  },
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(5, auto)",
    gridColumnGap: "2%",
    padding: "0 2%",
    ["@media (max-width:780px)"]: {
      gridTemplateColumns: "repeat(2, auto)",
    },
  },
  navigationButtons: {
    margin: "40px 0",
    display: "flex",
    alignItens: "center",
    justifyContent: "space-evenly",
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
