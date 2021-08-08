import React from "react"
import { path } from "navigation/CONSTANTS"
import { useHistory } from "react-router"
import { useAuth } from "hooks/useAuth"
import {
  TextField,
  Modal,
  Paper,
  Typography,
  Backdrop,
  Fade,
  Button,
} from "@material-ui/core"
import useStyles from "./styles"

const RegisterButton = () => {
  const [open, setOpen] = React.useState(false)
  const [registerUser, setRegisterUser] = React.useState({
    email: "",
    password: "",
  })
  const history = useHistory()
  const { user, createUserWithEmail } = useAuth()
  const classes = useStyles()

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleRegister = async () => {
    if (registerUser.email.trim() === "" || registerUser.password.trim() === "")
      return

    if (!user)
      await createUserWithEmail(registerUser.email, registerUser.password)
    history.push(path.APP_HOME)
  }

  return (
    <>
      <Button onClick={handleOpen} color="secondary" variant="contained">
        Crie sua conta
      </Button>
      <Modal
        className={classes.registerModal}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper className={classes.registerPaper}>
            <Typography variant="h4" className={classes.registerTitle}>
              Registrar
            </Typography>
            <form className={classes.registerForm}>
              <TextField
                placeholder="e-mail"
                value={registerUser.email}
                onChange={(event) =>
                  setRegisterUser({
                    ...registerUser,
                    email: event.target.value,
                  })
                }
              />
              <TextField
                type="password"
                placeholder="senha"
                value={registerUser.password}
                onChange={(event) =>
                  setRegisterUser({
                    ...registerUser,
                    password: event.target.value,
                  })
                }
              />
              <Button
                className={classes.registerBtn}
                onClick={handleRegister}
                color="secondary"
                variant="contained"
              >
                Registrar
              </Button>
            </form>
          </Paper>
        </Fade>
      </Modal>
    </>
  )
}

export default RegisterButton
