import { render, screen } from "@testing-library/react"
import { Login } from "pages"
import firebase from "services/firebase"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import logoImg from "assets/logo.png"

Enzyme.configure({ adapter: new Adapter() })

jest.mock("services/firebase", () => {
  return {
    auth: jest.fn(),
  }
})

test("renders login page", () => {
  render(<Login />)
  const loginButton = screen.getByText("Entrar")
  expect(loginButton).toBeInTheDocument()
  const registerButton = screen.getByText("Crie sua conta")
  expect(registerButton).toBeInTheDocument()

  const loginComponent = shallow(<Login />)
  expect(loginComponent.find("img").prop("src")).toEqual(logoImg)
})
