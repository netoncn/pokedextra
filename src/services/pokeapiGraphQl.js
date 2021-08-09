import { gql } from "@apollo/client"

export const GraphGetPokemonList = () => gql`
  query GetPokemonSearchquery {
    pokedex: pokemon_v2_pokedex(where: { id: { _eq: 1 } }) {
      pokedex_numbers: pokemon_v2_pokemondexnumbers {
        pokemon_specie: pokemon_v2_pokemonspecy {
          name
          number: id
          pokemon: pokemon_v2_pokemons {
            types: pokemon_v2_pokemontypes {
              type: pokemon_v2_type {
                name
              }
            }
          }
        }
      }
    }
  }
`

export const GraphGetPokedex = () => gql`
  query GetPokedexquery {
    pokedex: pokemon_v2_pokedex(where: { id: { _eq: 1 } }) {
      pokedex_numbers: pokemon_v2_pokemondexnumbers {
        pokemon_specie: pokemon_v2_pokemonspecy {
          name
          number: id
          pokemon: pokemon_v2_pokemons {
            height
            weight
            types: pokemon_v2_pokemontypes {
              type: pokemon_v2_type {
                name
              }
            }
            stats: pokemon_v2_pokemonstats {
              base_stat
              stat: pokemon_v2_stat {
                name
              }
            }
          }
        }
      }
    }
  }
`
