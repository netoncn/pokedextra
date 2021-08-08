import { render, screen } from "@testing-library/react"
import PokemonCard from "app/components/PokemonCard"
import firebase from "services/firebase"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

jest.mock("services/firebase", () => {
  return {
    auth: jest.fn(),
  }
})

test("renders pokemon card component", () => {
  const props = {
    captured: false,
    onClick: () => {},
    number: 1,
    thumb:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    name: "bulbasaur",
    types: ["grass", "poison"],
  }
  render(<PokemonCard {...props} />)
  const pokemonName = screen.getByText(props.name)
  expect(pokemonName).toBeInTheDocument()

  const pokemonImage = shallow(<PokemonCard {...props} />)
  expect(pokemonImage.find("img").prop("src")).toEqual(props.thumb)
})
