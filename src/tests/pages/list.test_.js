import { render, screen } from "@testing-library/react"
import { List } from "pages"

// jest.mock("services/firebase", () => {
//   return {
//     auth: jest.fn(),
//   }
// })

// test("renders List page", () => {
//   act(() => {
//     render(<List />)
//   })
//   const searchButton = screen.getByText("Pesquisar")
//   expect(searchButton).toBeInTheDocument()
//   const prevButton = screen.getByText("Anterior")
//   expect(prevButton).toBeInTheDocument()
//   const nextButton = screen.getByText("Próximo")
//   expect(nextButton).toBeInTheDocument()
// })
