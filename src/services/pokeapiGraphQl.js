import { gql } from "@apollo/client"

// export const GraphGetPokemonList = () => gql`
//   query GetPokemonListquery {
//     pokemon: pokemon_v2_pokemon {
//       name
//       number: id
//       types: pokemon_v2_pokemontypes {
//         type: pokemon_v2_type {
//           name
//         }
//       }
//     }
//   }
// `

// export const GraphGetPokemonSearch = (search) => gql`
//   query GetPokemonSearchquery {
//     pokemon: pokemon_v2_pokemon(where: { name: { _ilike: "%${search}%" } }) {
//       name
//       number: id
//       types: pokemon_v2_pokemontypes {
//         type: pokemon_v2_type {
//           name
//         }
//       }
//     }
//   }
// `

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

// full information

// query samplePokeAPIquery {
//   pokemon_v2_pokedex {
//     pokemon_v2_pokemondexnumbers {
//       pokemon_v2_pokemonspecy {
//         name
//         id
//         pokemon_v2_evolutionchain {
//           pokemon_v2_pokemonspecies {
//             name
//             id
//           }
//         }
//         pokemon_v2_pokemons {
//           height
//           weight
//           pokemon_v2_pokemontypes {
//             pokemon_v2_type {
//               name
//             }
//           }
//           pokemon_v2_pokemonstats {
//             base_stat
//             pokemon_v2_stat {
//               name
//             }
//           }
//         }
//       }
//     }
//   }
// }
