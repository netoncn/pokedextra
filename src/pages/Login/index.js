import React from "react"
import RegisterButton from "app/components/RegisterButton"
import LoginForm from "app/components/LoginForm"

import logoImg from "assets/logo.png"
import useStyles from "./styles"

export const Login = () => {
  const classes = useStyles()

  return (
    <div className={classes.loginPage}>
      <div className={classes.loginTop}>
        <img className={classes.logoImage} src={logoImg} alt="PokeDextra" />
      </div>
      <div className={classes.loginBottom}>
        <LoginForm className={classes.loginForm} />
        <p className={classes.separator}>ou</p>
        <RegisterButton />
      </div>
    </div>
  )
}
