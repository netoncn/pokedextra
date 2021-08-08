import { Typography } from "@material-ui/core"
import CircularProgress from "@material-ui/core/CircularProgress"

const Loading = () => {
  return (
    <div>
      <div>
        <CircularProgress />
        <Typography variant="h5">Carregando...</Typography>
      </div>
    </div>
  )
}

export default Loading
