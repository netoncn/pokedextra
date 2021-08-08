import React, { useState } from "react"
import { path } from "navigation/CONSTANTS"
import { useHistory } from "react-router"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import InputAdornment from "@material-ui/core/InputAdornment"
import SearchIcon from "@material-ui/icons/Search"
import Box from "@material-ui/core/Box"

import useStyles from "./styles"

const SearchBox = (props) => {
  const [search, setSearch] = useState("")
  const history = useHistory()
  const classes = useStyles()

  const keyPress = (e) => {
    if (e.keyCode == 13) {
      handleSearch()
    }
  }

  const handleSearch = () => {
    if (search.trim() === "")
      return props.path === "graphQl"
        ? history.push(path.LISTGRAPHQL)
        : history.push(path.LIST)
    if (props.path === "graphQl")
      return history.push(`${path.LISTGRAPHQL}/${search}`)
    history.push(`${path.LIST}/${search}`)
  }

  const searchIconBtn = () => {
    return (
      <InputAdornment position="start">
        <Button onClick={handleSearch}>
          <SearchIcon />
        </Button>
      </InputAdornment>
    )
  }

  return (
    <Box className={classes.searchContainer}>
      <TextField
        id="outlined-basic"
        className={classes.searchTextField}
        label="Pesquisar"
        variant="outlined"
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => keyPress(e)}
        InputProps={{
          endAdornment: searchIconBtn(),
        }}
        value={search}
      />
    </Box>
  )
}

export default SearchBox
