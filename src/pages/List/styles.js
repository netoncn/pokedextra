import { makeStyles } from "@material-ui/styles"

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
    backgroundColor: "#DEDEDE",
    border: "2px solid #FFF",
    padding: "30px",
    minWidth: "320px",
    minHeight: "350px",
  },
})
