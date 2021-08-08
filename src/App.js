import CssBaseline from "@material-ui/core/CssBaseline"
import { BrowserRouter } from "react-router-dom"
import { AuthContextProvider } from "contexts/AuthContext"
import { RouterConfig } from "navigation/RouterConfig"

const App = () => {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <AuthContextProvider>
          <RouterConfig />
        </AuthContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
