import { useState, useEffect } from "react"
import Button from "@material-ui/core/Button"
import PokemonCard from "app/components/PokemonCard"

import useStyles from "./styles"

const PokeList = (props) => {
  const [offsetLimit, setOffsetLimit] = useState(1110)
  const [offset, setOffset] = useState(0)
  const [pokeList, setPokeList] = useState([])
  const [list, setList] = useState([])

  const classes = useStyles()

  useEffect(() => {
    const thisList = props.search
      ? props.list.filter(
          (el) =>
            el.pokemon_specie.name.indexOf(props.search) > -1 ||
            String(el.pokemon_specie.number).indexOf(props.search) > -1
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
  }, [props.search])

  useEffect(() => {
    const thisLimit =
      list.length - offset >= props.limit ? props.limit + offset : undefined

    setPokeList(list.slice(offset, thisLimit))
  }, [offset, list])

  const prev = () => {
    setOffset((offset) => offset - props.limit)
  }

  const next = () => {
    setOffset((offset) => offset + props.limit)
  }

  const renderList = () => {
    return pokeList.map((el, idx) => {
      const isCaptured = !!props.capturedList.find(
        (listEl) => listEl.number == el.number
      )?.captured
      return (
        <PokemonCard
          key={`card${idx}`}
          {...el}
          onClick={() => props.onClickCard(el.number, isCaptured)}
          captured={isCaptured}
        />
      )
    })
  }

  return (
    <>
      <div className={classes.cardsContainer}>{renderList()}</div>
      <nav className={classes.navigationButtons}>
        <Button
          variant="contained"
          color="primary"
          onClick={prev}
          disabled={offset === 0}
        >
          Anterior
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={next}
          disabled={offset + 10 >= offsetLimit}
        >
          Próximo
        </Button>
      </nav>
    </>
  )
}

export default PokeList
