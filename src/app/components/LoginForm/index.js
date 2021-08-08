import React from "react"
import { TextField, Button } from "@material-ui/core"
import { path } from "navigation/CONSTANTS"
import { useHistory } from "react-router"
import { useAuth } from "hooks/useAuth"
import useStyles from "./styles"

const LoginForm = () => {
  const [loginUser, setLoginUser] = React.useState({ email: "", password: "" })
  const history = useHistory()
  const { user, signInWithEmail } = useAuth()
  const classes = useStyles()

  const handleLogin = async () => {
    if (loginUser.email.trim() === "" || loginUser.password.trim() === "")
      return

    if (!user) await signInWithEmail(loginUser.email, loginUser.password)
    history.push(path.APP_HOME)
  }

  return (
    <div className={classes.loginBlock}>
      <TextField
        placeholder="e-mail"
        value={loginUser.email}
        onChange={(event) =>
          setLoginUser({ ...loginUser, email: event.target.value })
        }
      />
      <TextField
        type="password"
        placeholder="senha"
        value={loginUser.password}
        onChange={(event) =>
          setLoginUser({ ...loginUser, password: event.target.value })
        }
      />
      <Button
        onClick={handleLogin}
        type="submit"
        color="primary"
        variant="contained"
      >
        Entrar
      </Button>
    </div>
  )
}

export default LoginForm
