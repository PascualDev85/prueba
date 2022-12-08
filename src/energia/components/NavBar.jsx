import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";

export const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <img
            src="https://enerclic.es/wp-content/uploads/2021/11/enerclic-color.svg"
            alt="enerclic-logo"
            style={{ width: 180 }}
          />
          <Grid sx={{ display: "flex" }} alignItems="center">
            <Typography sx={{ mr: 2 }} variant="h6" noWrap component="div">
              David
            </Typography>
            <IconButton sx={{ color: "#FE5000" }}>
              <LogoutOutlined />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
