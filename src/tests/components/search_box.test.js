import { render, screen } from "@testing-library/react"
import SearchBox from "app/components/SearchBox"

test("renders search box component", () => {
  render(<SearchBox />)
  const searchBox = screen.getAllByText("Pesquisar")
  expect(searchBox[0]).toBeInTheDocument()
})
