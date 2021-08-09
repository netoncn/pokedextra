import { useState, useEffect } from "react"
import PokedexLeftSide from "app/ui/PokedexLeftSide"
import PokedexRightSide from "app/ui/PokedexRightSide"

import useStyles from "./styles"

const PokedexLayout = (props) => {
  const [list, setList] = useState([])
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState([])
  const limit = 10

  const classes = useStyles()

  useEffect(() => {
    setList(props.list.pokedex[0].pokedex_numbers)
  }, [props])

  useEffect(() => {
    handleSetPokemon(1)
  }, [list])

  const handleSetPokemon = (pokemonNumber) => {
    setPokemon(list.find((el) => el.pokemon_specie.number === pokemonNumber))
  }

  return (
    <div className={classes.pokedexContainer}>
      <PokedexLeftSide pokemon={pokemon} />
      <PokedexRightSide
        list={list}
        selectPokemon={handleSetPokemon}
        pokemon={pokemon}
      />
    </div>
  )
}

export default PokedexLayout
