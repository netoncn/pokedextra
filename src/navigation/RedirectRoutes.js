import { Redirect, Route } from "react-router-dom"
// import { PageContainer } from "app/ui/PageContainer"
import { path } from "navigation/CONSTANTS"
import { useAuth } from "hooks/useAuth"

export const AuthRoute = ({ component: Component, ...rest }) => {
  const { signed } = useAuth()

  const redirectPath = () => {
    switch (rest.variant) {
      case "private":
        return path.LOGIN
      default:
        return path.LIST
    }
  }

  const renderPage = () => {
    return (
      <>
        {/* <PageContainer signed={signed} variant={signed ? "boxed" : "fullWidth"}> */}
        <Component {...rest} />
        {/* </PageContainer> */}
      </>
    )
  }

  const renderPrivateRoute = () => {
    if (
      (!signed && rest.variant !== "private") ||
      (signed && rest.variant === "private")
    ) {
      return <Route {...rest} render={renderPage} />
    } else {
      return (
        <Redirect
          to={{ pathname: redirectPath(), state: { from: rest.location } }}
        />
      )
    }
  }

  return renderPrivateRoute()
}
