import { makeStyles } from "@material-ui/styles"

export default makeStyles({
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    /*Both these lines are only useful for the loader*/
    height: "100%",
    alignItems: "center",
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
