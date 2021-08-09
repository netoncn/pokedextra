import { render, screen } from "@testing-library/react"
import PokeList from "app/components/PokeList"
import firebase from "services/firebase"

jest.mock("services/firebase", () => {
  return {
    auth: jest.fn(),
  }
})

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: "/list",
}))

test("renders pokemon list component", () => {
  const props = {
    list: [
      {
        __typename: "pokemon_v2_pokemondexnumber",
        pokemon_specie: {
          __typename: "pokemon_v2_pokemonspecies",
          name: "bulbasaur",
          number: 1,
          pokemon: [
            {
              __typename: "pokemon_v2_pokemon",
              types: [
                {
                  __typename: "pokemon_v2_pokemontype",
                  type: {
                    __typename: "pokemon_v2_type",
                    name: "grass",
                  },
                },
                {
                  __typename: "pokemon_v2_pokemontype",
                  type: {
                    __typename: "pokemon_v2_type",
                    name: "poison",
                  },
                },
              ],
            },
          ],
        },
      },
      {
        __typename: "pokemon_v2_pokemondexnumber",
        pokemon_specie: {
          __typename: "pokemon_v2_pokemonspecies",
          name: "ivysaur",
          number: 2,
          pokemon: [
            {
              __typename: "pokemon_v2_pokemon",
              types: [
                {
                  __typename: "pokemon_v2_pokemontype",
                  type: {
                    __typename: "pokemon_v2_type",
                    name: "grass",
                  },
                },
                {
                  __typename: "pokemon_v2_pokemontype",
                  type: {
                    __typename: "pokemon_v2_type",
                    name: "poison",
                  },
                },
              ],
            },
          ],
        },
      },
    ],
    limit: 10,
    capturedList: [],
    onClickCard: () => {},
  }
  render(<PokeList {...props} />)
  const pokemonName = screen.getByText("bulbasaur")
  expect(pokemonName).toBeInTheDocument()
})
