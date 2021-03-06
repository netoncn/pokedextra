import { makeStyles } from "@material-ui/styles"
import { color } from "app/ui/Theme/colors"

export default makeStyles({
  leftContainer: {
    gridColumn: "1/2",
    background: "transparent",
    borderRadius: "5px",
    display: "flex",
    position: "relative",
    zIndex: 2,
  },
  leftBlock: {
    height: "100%",
    width: "30rem",
    borderRadius: "5px 5px 3px 5px",
    background: color.red,
    boxShadow: `inset 4px -4px 0 ${color.darkred}`,
    borderRight: "none",
  },
  leftTopContainer: {
    filter: `drop-shadow(0px 8px 0px ${color.darkred})`,
  },
  leftTopBlock: {
    borderRadius: "5px 5px 0 0",
    height: "10rem",
    width: "33rem",
    background: color.red,
    clipPath:
      "polygon(0 0,100% 0,100% 5rem, 19.5rem 5rem, 13.5rem 100%, 0 100% )",
    zIndex: 5,
    borderRight: `1px solid ${color.darkgrey}`,
    borderTop: `1px solid ${color.darkgrey}`,
    borderLeft: `1px solid ${color.darkgrey}`,
    display: "flex",
    alignItems: "center",
  },
  blueOrb: {
    width: "6rem",
    height: "6rem",
    borderRadius: "50%",
    position: "relative",
    border: `1px solid ${color.darkgrey}`,
    marginLeft: "2rem",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: color.lightblue,
  },
  redOrb: {
    width: "1.2rem",
    height: "1.2rem",
    borderRadius: "50%",
    position: "relative",
    border: `1px solid ${color.darkgrey}`,
    background: color.darkred,
    marginLeft: "2rem",
  },
  yellowOrb: {
    width: "1.2rem",
    height: "1.2rem",
    borderRadius: "50%",
    position: "relative",
    border: `1px solid ${color.darkgrey}`,
    background: color.yellow,
    marginLeft: "2rem",
  },
  greenOrb: {
    width: "1.2rem",
    height: "1.2rem",
    borderRadius: "50%",
    position: "relative",
    border: `1px solid ${color.darkgrey}`,
    background: color.green,
    marginLeft: "2rem",
  },
  leftScreen: {
    height: "21rem",
    padding: "2rem 3.5rem 2rem 3.5rem",
  },
  screenBorder: {
    height: "100%",
    width: "100%",
    background: color.grey,
    borderRadius: "3px",
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 8% 100%, 0 90%)",
    display: "grid",
    gridTemplateRows: "10% 1fr 15%",
    gridTemplateColumns: "1fr",
    padding: "0 3rem",
    justifyItems: "center",
    alignItems: "center",
    gridGap: "0.5rem 0",
  },
  leftBlackScreen: {
    gridRow: "2/3",
    background: color.black,
    borderRadius: "3px",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  pokeTypes: {
    gridRow: "3/3",
    borderRadius: "20px",
    padding: "3px 10px",
    fontSize: "1.1rem",
    width: "200px",
    display: "flex",
    justifyContent: "space-evenly",
    textTransform: "capitalize",
  },
  leftControls: {
    borderRadius: "0 0 3px 5px",
    height: "9rem",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 2.5rem 2rem 2.5rem",
  },
  blackRoundButton: {
    width: "3rem",
    height: "3rem",
    borderRadius: "50%",
    position: "relative",
    background: color.darkgrey,
    border: `1px solid ${color.darkgrey}`,
  },
  centralControls: {
    width: "40%",
    display: "grid",
    gridTemplateRows: "20% 1fr",
    marginLeft: "1.5rem",
  },
  greenScreen: {
    gridColumn: "1/3",
    backgroundColor: color.green,
    width: "100%",
    height: "4rem",
    borderRadius: "3px",
    border: `1px solid ${color.darkgrey}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: color.darkgrey,
  },
  pokemonName: {
    textTransform: "capitalize",
  },
  crossControl: {
    backgroundColor: color.darkgrey,
    width: "6rem",
    height: "6rem",
    clipPath:
      "polygon(2rem 0,4rem 0,4rem 2rem,6rem 2rem,6rem 4rem,4rem 4rem,4rem 6rem,2rem 6rem,2rem 4rem,0 4rem,0 2rem,2rem 2rem,2rem 0)",
    position: "relative",
  },
  cylinder: {
    width: "3rem",
    height: "35rem",
    alignSelf: "flex-end",
    zIndex: 10,
    borderRadius: "0 0px 3px 3px",
    background: `linear-gradient(to right, ${color.red} 34%,${color.lightred} 70%, ${color.red})`,
    border: `1px solid ${color.darkred}`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: `0 2px 3px ${color.darkgrey}`,
  },
  cylinderBlock: {
    height: "28rem",
    borderTop: `2px solid ${color.darkgrey}`,
    borderBottom: `2px solid ${color.darkgrey}`,
  },
})
