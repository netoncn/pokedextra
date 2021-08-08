import { useState, useEffect } from "react"
import pokeball from "assets/pokeball.png"
import { capturePokemon } from "services"
import { useAuth } from "hooks/useAuth"

import useStyles from "./styles"

const CaptureButton = (props) => {
  const { user } = useAuth()
  const [captured, setCaptured] = useState(false)
  const classes = useStyles(props)

  useEffect(() => {
    setCaptured(props.captured)
  }, [props])

  const handleCapture = (e) => {
    const newCaptured = !captured
    setCaptured(newCaptured)
    capturePokemon(user.id, props.number, newCaptured)
    props.onClick()
    e.stopPropagation()
  }

  return (
    <img
      src={pokeball}
      alt="capture"
      className={classes.captureButton}
      onClick={(e) => handleCapture(e)}
    />
  )
}

export default CaptureButton
