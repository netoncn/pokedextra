import axios from "axios"
import {
  GET_POKEMON,
  GET_POKEMON_LIST,
  GET_POKEMON_SPECIE,
  GET_POKEDEX_LIST,
} from "./CONSTANTS"

export const getPokemonInfo = async (pokemonId) => {
  const pokeInfo = await axios.get(GET_POKEMON(pokemonId))
  return pokeInfo.data
}

export const getPokemonSpecie = async (pokemonId) => {
  const pokeSpecie = await axios.get(GET_POKEMON_SPECIE(pokemonId))
  return pokeSpecie.data
}

export const getPokemonEvolutionChain = async (evolutionUrl) => {
  const pokeEvolution = await axios.get(evolutionUrl)
  var evoChain = []
  var evoData = pokeEvolution.data.chain

  do {
    var evoDetails = evoData["evolution_details"][0]
    const pokeInfo = await axios.get(GET_POKEMON(evoData.species.name))

    evoChain.push({
      species_name: evoData.species.name,
      min_level: !evoDetails ? 1 : evoDetails.min_level,
      trigger_name: !evoDetails ? null : evoDetails.trigger.name,
      item: !evoDetails ? null : evoDetails.item,
      thumb: pokeInfo.data.sprites.front_default,
    })

    evoData = evoData["evolves_to"][0]
  } while (!!evoData && evoData.hasOwnProperty("evolves_to"))
  return evoChain
}

export const getPokemonListInfo = async (name) => {
  try {
    const pokeInfo = await axios.get(GET_POKEMON(name))
    return {
      number: pokeInfo.data.id,
      name: pokeInfo.data.name,
      thumb: pokeInfo.data.sprites.front_default,
      types: pokeInfo.data.types.map((el) => el.type.name),
    }
  } catch (err) {
    console.log(err)
  }
}

export const getPokemonList = async (offset, limit) => {
  try {
    const pokeLista = await axios.get(GET_POKEMON_LIST(offset, limit))
    return pokeLista.data.results
  } catch (err) {
    console.log(err)
  }
}

export const getPokemonThumb = async (id) => {
  try {
    const pokeLista = await axios.get(GET_POKEMON(id))
    return pokeLista.data.sprites.front_default
  } catch (err) {
    console.log(err)
  }
}

export const getSearchList = async (search) => {
  try {
    const pokeLista = await axios.get(GET_POKEDEX_LIST(1))
    const searchList = pokeLista.data.pokemon_entries.filter(
      (el) =>
        el.pokemon_species.name.indexOf(search) > -1 ||
        String(el.entry_number).indexOf(search) > -1
    )
    return searchList
  } catch (err) {
    console.log(err)
  }
}
