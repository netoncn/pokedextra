import { render, screen } from "@testing-library/react"
import PokemonDetails from "app/components/PokemonDetails"
import firebase from "services/firebase"

jest.mock("services/firebase", () => {
  return {
    auth: jest.fn(),
  }
})

test("renders search box component", () => {
  const props = {
    captured: false,
    number: 1,
  }
  render(<PokemonDetails {...props} />)
  const baseStats = screen.getByText("Estatísticas base")
  expect(baseStats).toBeInTheDocument()
})
