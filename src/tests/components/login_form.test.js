import { render, screen } from "@testing-library/react"
import LoginForm from "app/components/LoginForm"
import firebase from "services/firebase"

jest.mock("services/firebase", () => {
  return {
    auth: jest.fn(),
  }
})

test("renders login form component", () => {
  render(<LoginForm />)
  const loginButton = screen.getByText("Entrar")
  expect(loginButton).toBeInTheDocument()
})
