import Typography from '@mui/material/Typography'

function Header(props) {
  return (

    <Typography
      component="h1"
      variant="h2"
      align="center"
      color="text.primary"
      gutterBottom
    >
      {props.title}
    </Typography>
  )
}
export default Header;
