import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Button from "@material-ui/core/Button"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import Paper from "@material-ui/core/Paper"
import PokemonCard from "app/components/PokemonCard"
import PokemonDetails from "app/components/PokemonDetails"
import SearchBox from "app/components/SearchBox"
import { useAuth } from "hooks/useAuth"
import { getSearchList, getPokemonListInfo, getAllCaptured } from "services"

import useStyles from "./styles"

export const Search = () => {
  const { search } = useParams()
  const { user } = useAuth()
  const [searchList, setSearchList] = useState([])
  const [pokeList, setPokeList] = useState([])
  const [capturedList, setCapturedList] = useState([])
  const [pokemonInfo, setPokemonInfo] = useState()
  const [offset, setOffset] = useState(0)
  const [offsetLimit, setOffsetLimit] = useState(10)
  const [openModal, setOpenModal] = useState(false)
  const [captured, setCaptured] = useState(false)
  const limit = 10

  const classes = useStyles()

  useEffect(async () => {
    refreshPage()
  }, [offset, search])

  useEffect(async () => {
    setOffset(0)
  }, [search])

  const refreshPage = async () => {
    await getCapturedList()
    getList()
    showList()
  }

  const getPokeInfo = async (name) => {
    const info = await getPokemonListInfo(name)
    setPokeList((pokeList) =>
      [...pokeList, info].sort((a, b) => a.number - b.number)
    )
  }

  const getCapturedList = async () => {
    setCapturedList([])
    const list = await getAllCaptured(user.id)
    setCapturedList(list)
  }

  const getList = async () => {
    setPokeList([])
    const poke = await getSearchList(search)
    setSearchList(poke)
    setOffsetLimit(poke.length)
    console.log(poke)
  }

  const showList = () => {
    const thisLimit =
      searchList.length - offset >= limit ? limit + offset : undefined
    searchList.slice(offset, thisLimit).forEach((el) => {
      getPokeInfo(el.pokemon_species.name)
    })
  }

  const prev = () => {
    setOffset((offset) => offset - limit)
  }

  const next = () => {
    setOffset((offset) => offset + limit)
  }

  const handleClickCard = (number, captured) => {
    setCaptured(captured)
    setPokemonInfo(number)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    refreshPage()
  }

  const renderList = () => {
    return pokeList.map((el, idx) => {
      const isCaptured = !!capturedList.find(
        (listEl) => listEl.number == el.number
      )?.captured
      return (
        <PokemonCard
          key={`card${idx}`}
          {...el}
          onClick={() => handleClickCard(el.number, isCaptured)}
          captured={isCaptured}
        />
      )
    })
  }

  return (
    <>
      <SearchBox />
      <div className={classes.cardsContainer}>{renderList()}</div>
      <nav className={classes.navigationButtons}>
        <Button
          variant="contained"
          color="primary"
          onClick={prev}
          disabled={offset === 0}
        >
          PREV
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={next}
          disabled={offset + 10 >= offsetLimit}
        >
          NEXT
        </Button>
      </nav>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modalInfo}
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Paper className={classes.modalPaper}>
            <PokemonDetails number={pokemonInfo} captured={captured} />
          </Paper>
        </Fade>
      </Modal>
    </>
  )
}
