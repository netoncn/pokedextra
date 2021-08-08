import { render, screen } from "@testing-library/react"
import LogoutButton from "app/components/LogoutButton"
import firebase from "services/firebase"

jest.mock("services/firebase", () => {
  return {
    auth: jest.fn(),
  }
})

test("renders logout button component", () => {
  render(<LogoutButton />)
  const logoutButton = screen.getByText("Sair")
  expect(logoutButton).toBeInTheDocument()
})
