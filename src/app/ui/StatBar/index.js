import useStyles from "./styles"

const StatBar = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.attr}>
      <div className={classes.attr_value} />
    </div>
  )
}

export default StatBar
