import { useState } from "react"
import Loading from "app/components/Loading"
import PokedexLayout from "app/components/PokedexLayout"
import ChangeRequestButton from "app/components/ChangeRequestButton"
import ChangeViewModeButton from "app/components/ChangeViewModeButton"
import { useQuery } from "@apollo/client"
import { GraphGetPokedex } from "services/pokeapiGraphQl"

import useStyles from "./styles"

export const Pokedex = () => {
  const { loading, error, data } = useQuery(GraphGetPokedex())

  const classes = useStyles()

  return (
    <div className={classes.pokedexPage}>
      <div className={classes.pokedexContainer}>
        <ChangeRequestButton />
        <ChangeViewModeButton />
        {loading && <Loading />}
        {data && <PokedexLayout list={data} />}
      </div>
    </div>
  )
}
