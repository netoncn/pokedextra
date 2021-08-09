import { useState, useEffect } from "react"
import StatBar from "app/ui/StatBar"
import ArrowRightIcon from "@material-ui/icons/ArrowRight"
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft"

import useStyles from "./styles"

const PokedexRightSide = (props) => {
  const [search, setSearch] = useState(0)
  const [offsetLimit, setOffsetLimit] = useState(1110)
  const [offset, setOffset] = useState(0)
  const [pokeList, setPokeList] = useState([])
  const [list, setList] = useState([])
  const limit = 10
  const maxBaseStats = 255

  const classes = useStyles()

  useEffect(() => {
    const thisList = search
      ? props.list.filter(
          (el) =>
            el.pokemon_specie.name.indexOf(search) > -1 ||
            String(el.pokemon_specie.number).indexOf(search) > -1
        )
      : props.list
    setOffsetLimit(thisList.length)
    const arrayList = []
    arrayList.push(
      thisList.map((el) => {
        return {
          number: el.pokemon_specie.number,
          name: el.pokemon_specie.name,
          types: el.pokemon_specie.pokemon[0].types.map((el) => el.type.name),
        }
      })
    )
    setList(arrayList[0])
  }, [props])

  useEffect(() => {
    setOffset(0)
  }, [search])

  useEffect(() => {
    const thisLimit = list.length - offset >= limit ? limit + offset : undefined

    setPokeList(list.slice(offset, thisLimit))
  }, [offset, list])

  const prev = () => {
    if (offset <= 0) return
    setOffset((offset) => offset - limit)
  }

  const next = () => {
    if (offset >= offsetLimit) return
    setOffset((offset) => offset + limit)
  }

  const renderStatsBar = () => {
    return props.pokemon?.pokemon_specie?.pokemon[0]?.stats.map((el) => {
      return (
        <div className={classes.StatBlock}>
          {el.stat.name}:{el.base_stat}
          <StatBar
            value={el.base_stat}
            maxValue={maxBaseStats}
            key={`attr_${el.stat.name}`}
          />
        </div>
      )
    })
  }

  const renderList = () => {
    return pokeList.map((el, idx) => {
      return (
        <div
          className={classes.blueGridCell}
          onClick={() => props.selectPokemon(el.number)}
          key={`card${idx}`}
        >
          <img
            key={`img${idx}`}
            className={classes.listImage}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${el.number}.png`}
            alt={el.name}
          />
        </div>
      )
    })
  }

  return (
    <div className={classes.rightContainer}>
      <div className={classes.rightBlock}>
        <div className={classes.rightBlackScreen}>
          {renderStatsBar()}
          <p>
            Altura: {props.pokemon?.pokemon_specie?.pokemon[0]?.height * 10} cm
          </p>
          <p>
            Peso: {props.pokemon?.pokemon_specie?.pokemon[0]?.weight / 10} kg
          </p>
        </div>
        <div className={classes.blueGrid}>{renderList()}</div>
        <div className={classes.navButtons} onClick={prev}>
          <ArrowLeftIcon />
        </div>
        <div className={classes.navButtons} onClick={next}>
          <ArrowRightIcon />
        </div>
      </div>
    </div>
  )
}

export default PokedexRightSide
