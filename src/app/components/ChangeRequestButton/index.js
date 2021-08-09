import { useLocation, useHistory } from "react-router-dom"
import { path } from "navigation/CONSTANTS"

import useStyles from "./styles"

const ChangeRequestButton = () => {
  const location = useLocation()
  const history = useHistory()
  const classes = useStyles()

  const handleChangeRequest = () => {
    location.pathname === path.LISTGRAPHQL
      ? history.push(path.LIST)
      : history.push(path.LISTGRAPHQL)
  }

  return (
    <>
      <div
        className={classes.changeRequestContainer}
        onClick={handleChangeRequest}
      >
        <span className={classes.changeRequestButton}>Change Request</span>
      </div>
    </>
  )
}

export default ChangeRequestButton
