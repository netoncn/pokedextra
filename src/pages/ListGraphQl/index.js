import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Button from "@material-ui/core/Button"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import Fade from "@material-ui/core/Fade"
import Paper from "@material-ui/core/Paper"
import PokemonDetails from "app/components/PokemonDetails"
import PokeList from "app/components/PokeList"
import SearchBox from "app/components/SearchBox"
import LogoutButton from "app/components/LogoutButton"
import Loading from "app/components/Loading"
import ChangeRequestButton from "app/components/ChangeRequestButton"
import ChangeViewModeButton from "app/components/ChangeViewModeButton"
import { useAuth } from "hooks/useAuth"
import { useQuery } from "@apollo/client"
import { GraphGetPokemonList } from "services/pokeapiGraphQl"
import { getAllCaptured } from "services"

import useStyles from "./styles"

export const ListGraphQl = () => {
  const { search } = useParams()
  const { loading, error, data } = useQuery(GraphGetPokemonList())
  const { user } = useAuth()
  const [pokemonInfo, setPokemonInfo] = useState([])
  const [capturedList, setCapturedList] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [captured, setCaptured] = useState(false)
  const limit = 10

  const classes = useStyles()

  useEffect(() => {
    getCapturedList()
  }, [search])

  const getCapturedList = async () => {
    setCapturedList([])
    try {
      const list = await getAllCaptured(user.id)
      setCapturedList(list)
    } catch (err) {
      console.log(err)
    }
  }

  const handleClickCard = (number, captured) => {
    setCaptured(captured)
    setPokemonInfo(number)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    setCaptured(0)
    setPokemonInfo(0)
    getCapturedList()
  }

  return (
    <>
      <ChangeRequestButton />
      <ChangeViewModeButton />
      <div className={classes.headerContainer}>
        <SearchBox path="graphQl" />
        <LogoutButton />
      </div>
      {loading && <Loading />}
      {data && (
        <PokeList
          list={data.pokedex[0].pokedex_numbers}
          search={search}
          limit={limit}
          capturedList={capturedList}
          onClickCard={handleClickCard}
        />
      )}
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
