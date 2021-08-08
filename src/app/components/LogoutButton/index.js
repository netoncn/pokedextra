import Button from "@material-ui/core/Button"
import { useAuth } from "hooks/useAuth"
import { path } from "navigation/CONSTANTS"
import { useHistory } from "react-router"

import useStyles from "./styles"

const LogoutButton = (props) => {
  const classes = useStyles()
  const history = useHistory()
  const { user, logout } = useAuth()

  const handleLogout = async () => {
    if (user) await logout()
    history.push(path.ROOT)
  }

  return (
    <>
      <Button
        onClick={handleLogout}
        {...props}
        className={classes.logoutButton}
      >
        {props.value ? props.value : "Sair"}
      </Button>
    </>
  )
}

export default LogoutButton
