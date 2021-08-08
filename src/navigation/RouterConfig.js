import { Switch } from "react-router-dom"
import { AuthRoute } from "./RedirectRoutes"
import { path } from "navigation/CONSTANTS"

import { Login, List, ListGraphQl, Pokedex } from "pages"

export const RouterConfig = () => {
  return (
    <Switch>
      <AuthRoute path={path.ROOT} exact component={Login} />
      <AuthRoute path={path.LOGIN} component={Login} />
      <AuthRoute
        variant="private"
        path={`${path.LIST}/:search?`}
        component={List}
      />
      <AuthRoute
        variant="private"
        path={`${path.LISTGRAPHQL}/:search?`}
        component={ListGraphQl}
      />
    </Switch>
  )
}
