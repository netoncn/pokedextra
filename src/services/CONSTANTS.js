const api_base_url = "https://pokeapi.co/api/v2"

export const GET_CHARACTERISTICS = (id) =>
  `${api_base_url}/characteristic/${id}`

export const GET_POKEMON = (id) => `${api_base_url}/pokemon/${id}`

export const GET_POKEMON_LIST = (offset, limit) =>
  `${api_base_url}/pokemon/?offset=${offset}&limit=${limit}`

export const GET_POKEMON_SPECIE = (id) =>
  `${api_base_url}/pokemon-species/${id}`

export const GET_POKEMON_EVOLUTION_CHAIN = (chainId) =>
  `${api_base_url}/evolution-chain/${chainId}`

export const GET_POKEDEX_LIST = (id) => `${api_base_url}/pokedex/${id}`
