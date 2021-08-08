import { render, screen } from "@testing-library/react"
import CaptureButton from "app/components/CaptureButton"
import pokeball from "assets/pokeball.png"
import firebase from "services/firebase"
import Enzyme, { shallow } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

jest.mock("services/firebase", () => {
  return {
    auth: jest.fn(),
  }
})

test("renders capture button component", () => {
  const props = {
    captured: false,
    onClick: () => {},
    number: 1,
  }

  const captureComponent = shallow(<CaptureButton {...props} />)
  expect(captureComponent.find("img").prop("src")).toEqual(pokeball)
})
