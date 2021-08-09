import { useLocation, useHistory } from "react-router-dom"
import { path } from "navigation/CONSTANTS"

import useStyles from "./styles"

const ChangeViewModeButton = () => {
  const location = useLocation()
  const history = useHistory()
  const classes = useStyles()

  const handleChangeViewMode = () => {
    location.pathname === path.POKEDEX
      ? history.push(path.LISTGRAPHQL)
      : history.push(path.POKEDEX)
  }

  return (
    <>
      <div
        className={classes.changeViewModeContainer}
        onClick={handleChangeViewMode}
      >
        <span className={classes.changeViewModeButton}>View Mode</span>
      </div>
    </>
  )
}

export default ChangeViewModeButton
