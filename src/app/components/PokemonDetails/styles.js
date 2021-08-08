import { makeStyles } from "@material-ui/styles"
import { color } from "app/ui/Theme/colors"

const getCardBackground = (pokemonTypes) => {
  if (!pokemonTypes) return "#CCC"
  const types = pokemonTypes.map((el) => el.type.name)
  if (types[1]) {
    return `linear-gradient(135deg, ${color[types[0]]} 50%, ${
      color[types[1]]
    } 50%)`
  } else {
    return color[types[0]]
  }
}

export default makeStyles({
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  pokemonBlock: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  pokemonImage: {
    width: "100%",
    maxWidth: "150px",
  },
  pokemonName: {
    textTransform: "capitalize",
  },
  StatBlock: {},
  StatName: {
    fontSize: "14px",
    marginTop: "5px",
    marginBottom: 0,
    textTransform: "capitalize",
  },
  pokeTypes: {
    borderRadius: "20px",
    padding: "3px 10px",
    fontSize: "1.1rem",
    width: "200px",
    display: "flex",
    justifyContent: "space-evenly",
    textTransform: "capitalize",
    background: (pokemon) => getCardBackground(pokemon.types),
  },
  evolutionBlock: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  detailsText: {
    fontSize: "14px",
    fontWeight: "700",
  },
  additionalInfo: {
    marginTop: "30px",
  },
})
