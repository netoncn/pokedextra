import { render, screen } from "@testing-library/react"
import Loading from "app/components/Loading"

test("renders loading component", () => {
  render(<Loading />)
  const loadingText = screen.getByText("Carregando...")
  expect(loadingText).toBeInTheDocument()
})
