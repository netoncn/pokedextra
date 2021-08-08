import { useState, useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import CaptureButton from "app/components/CaptureButton"
import Loading from "app/components/Loading"
import StatBar from "app/ui/StatBar"
import {
  getPokemonInfo,
  getPokemonSpecie,
  getPokemonEvolutionChain,
} from "services"

import useStyles from "./styles"

const PokemonDetails = (props) => {
  const [loading, setLoading] = useState(true)
  const [pokemon, setPokemon] = useState()
  const [pokemonEvolution, setPokemonEvolution] = useState()
  const [captured, setCaptured] = useState(false)
  const maxBaseStats = 255
  const classes = useStyles(pokemon)

  useEffect(async () => {
    try {
      const info = await getPokemonInfo(props.number)
      setPokemon(info)
      const specie = await getPokemonSpecie(props.number)
      const evolution = await getPokemonEvolutionChain(
        specie.evolution_chain.url
      )
      setPokemonEvolution(evolution)
      setCaptured(props.captured)

      setLoading(false)
    } catch (err) {
      console.log(err)
    }
  }, [props])

  const handleCapture = () => {
    setCaptured(!captured)
  }

  const showTypes = () => {
    return pokemon.types.map((el) => <span>{el.type.name}</span>)
  }

  const renderStatsBar = () => {
    return pokemon.stats.map((el) => {
      return (
        <div className={classes.StatBlock}>
          <h4 className={classes.StatName}>
            {el.stat.name}:{el.base_stat}
          </h4>
          <StatBar
            value={el.base_stat}
            maxValue={maxBaseStats}
            key={`attr_${el.stat.name}`}
          />
        </div>
      )
    })
  }

  const renderEvolutionChain = () => {
    return pokemonEvolution.map((el, idx) => {
      return (
        <>
          {idx > 0 && (
            <span className={classes.evolutionCodition}>
              {el.min_level && `Lv ${el.min_level}`}{" "}
              {el.min_level && el.item && "/"}
              {el.item && (
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${el.item.name}.png`}
                  alt={el.item.name}
                />
              )}
            </span>
          )}
          <img src={el.thumb} className={classes.evolutionImage} />
        </>
      )
    })
  }

  const renderDetails = () => {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.header}>
          <h2>
            <span># {String(pokemon.id).padStart(3, "0")}</span> -{" "}
            <span className={classes.pokemonName}>{pokemon.name}</span>
          </h2>
          <CaptureButton
            size="large"
            onClick={handleCapture}
            captured={captured}
            number={pokemon.id}
          />
        </Grid>
        <Grid item md={6} sm={12} className={classes.pokemonBlock}>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className={classes.pokemonImage}
          />
          <div className={classes.pokeTypes}>{showTypes()}</div>
          <br />
          <div className={classes.evolutionBlock}>{renderEvolutionChain()}</div>
        </Grid>
        <Grid container md={6} sm={12}>
          <Grid xs={12} item>
            <span className={classes.detailsText}>Estatísticas base</span>
            {renderStatsBar()}
          </Grid>
          <Grid xs={12} container className={classes.additionalInfo}>
            <Grid item xs={6}>
              <span className={classes.detailsText}>
                Altura: {pokemon.height * 10} centimetros
              </span>
            </Grid>
            <Grid item xs={6}>
              <span className={classes.detailsText}>
                Peso: {pokemon.weight / 10} quilos
              </span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }

  return loading ? <Loading /> : renderDetails()
}

export default PokemonDetails
