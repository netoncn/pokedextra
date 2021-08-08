import { database } from "services/firebase"

export const capturePokemon = async (userId, pokemonId, captured) => {
  database.ref(`pokemon/${userId}/${pokemonId}`).set({ captured: captured })
}

export const checkCaptured = async (userId, pokemonId) => {
  const pokemon = await database.ref(`pokemon/${userId}/${pokemonId}`).get()

  return pokemon.exists() ? !!pokemon.val().captured : false
}

export const getAllCaptured = async (userId) => {
  const pokemon = await database.ref(`pokemon/${userId}`).get()
  const list = []
  if (pokemon.exists()) {
    const pokeList = pokemon.val()
    Object.keys(pokeList).forEach(function (key, index) {
      list.push({ number: key, captured: pokeList[key].captured })
    })
  }

  return list
}
