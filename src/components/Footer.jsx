import {Container, Typography} from "@mui/material";

function Footer() {
  return <Container disableGutters maxWidth={false} sx={{position: 'fixed', bottom: '0px', left: '15px'}}>
  <Typography variant='p' component='p'>React | Blockchain</Typography>
</Container>;
}

export default Footer;
