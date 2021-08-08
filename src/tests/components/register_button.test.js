import { render, screen } from "@testing-library/react"
import RegisterButton from "app/components/RegisterButton"
import firebase from "services/firebase"

jest.mock("services/firebase", () => {
  return {
    auth: jest.fn(),
  }
})

test("renders register form component", () => {
  render(<RegisterButton />)
  const registerButton = screen.getByText("Crie sua conta")
  expect(registerButton).toBeInTheDocument()
})
