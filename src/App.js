import CssBaseline from "@material-ui/core/CssBaseline"
import { BrowserRouter } from "react-router-dom"
import { AuthContextProvider } from "contexts/AuthContext"
import { RouterConfig } from "navigation/RouterConfig"
import { graphQlClient } from "services/apolloClient"
import { ApolloProvider } from "@apollo/client"

const App = () => {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <AuthContextProvider>
          <ApolloProvider client={graphQlClient}>
            <RouterConfig />
          </ApolloProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
