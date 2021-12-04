import Typography from '@mui/material/Typography';

function Instructions({ message }) {

  return (
    <>
      <div role="paragraph">
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          {message}
        </Typography>
      </div>
    </>
  )
}
export default Instructions
