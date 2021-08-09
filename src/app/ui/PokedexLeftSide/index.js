import { useState, useEffect } from "react"

import useStyles from "./styles"

const PokedexLeftSide = (props) => {
  const [types, setTypes] = useState([])

  const classes = useStyles(props)

  const showTypes = () => {
    return props?.pokemon?.pokemon_specie?.pokemon[0]?.types.map((el) => (
      <span>{el.type.name}</span>
    ))
  }

  return (
    <div className={classes.leftContainer}>
      <div className={classes.leftBlock}>
        <div className={classes.leftTopContainer}>
          <div className={classes.leftTopBlock}>
            <div className={classes.blueOrb}></div>
            <div className={classes.redOrb}></div>
            <div className={classes.yellowOrb}></div>
            <div className={classes.greenOrb}></div>
          </div>
        </div>

        <div className={classes.leftScreen}>
          <div className={classes.screenBorder}>
            <div className={classes.leftBlackScreen}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon?.pokemon_specie?.number}.png`}
                alt={props.pokemon?.pokemon_specie?.name}
              />
            </div>
            <div className={classes.pokeTypes}>{showTypes()}</div>
          </div>
        </div>

        <div className={classes.leftControls}>
          <div className={classes.blackRoundButton}></div>
          <div className={classes.centralControls}>
            <div className={classes.greenScreen}>
              <h4 className={classes.pokemonName}>
                #
                {String(props.pokemon?.pokemon_specie?.number).padStart(3, "0")}{" "}
                - {props.pokemon?.pokemon_specie?.name}
              </h4>
            </div>
          </div>
          <div className={classes.crossControl}></div>
        </div>
      </div>

      <div className={classes.cylinder}>
        <div className={classes.cylinderBlock}></div>
      </div>
    </div>
  )
}

export default PokedexLeftSide
