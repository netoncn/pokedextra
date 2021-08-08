import { makeStyles } from "@material-ui/styles"

export default makeStyles({
  searchContainer: {
    padding: "40px",
    paddingBottom: 0,
    width: "100%",
  },
  searchTextField: {
    width: "100%",
    "& fieldset": {
      borderRadius: "50px",
    },
  },
})
