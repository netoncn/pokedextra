import { useState, useEffect } from "react"
import CaptureButton from "app/components/CaptureButton"

import useStyles from "./styles"

const PokemonCard = (props) => {
  const [captured, setCaptured] = useState(false)
  const classes = useStyles({ ...props, captured })
  useEffect(() => {
    setCaptured(props.captured)
  }, [props])

  const handleCapture = () => {
    setCaptured(!captured)
  }

  return (
    <div className={classes.cardContainer} onClick={props.onClick}>
      <div className={classes.pokeCard}>
        <div className={classes.captureButton}>
          <CaptureButton
            onClick={handleCapture}
            captured={captured}
            number={props.number}
          />
        </div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.number}.png`}
          className={classes.pokeImage}
          alt={props.name}
        />
        <h3 className={classes.pokeNumber}>
          # {String(props.number).padStart(3, "0")}
        </h3>
        <h3 className={classes.pokeName}>{props.name}</h3>
      </div>
    </div>
  )
}

export default PokemonCard
