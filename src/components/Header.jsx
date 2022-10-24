import { AppBar, Box, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <Box component="div">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React | Blockchain
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
