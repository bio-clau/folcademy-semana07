import React from "react";
import { useRouter } from "next/router";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar() {
  const router = useRouter();
  function navegar(path) {
    router.replace(path);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense" color="white">
          <Button
            onClick={() => navegar("/")}
            sx={{ mr: 2 }}
            color="white"
            variant="text">
            Home
          </Button>
          <Button
            onClick={() => navegar("/login")}
            sx={{ mr: 2 }}
            color="inherit"
            variant="text">
            Login
          </Button>
          <Button
            onClick={() => navegar("/register")}
            sx={{ mr: 2 }}
            color="inherit"
            variant="text">
            Registro
          </Button>
          <Button
            onClick={() => navegar("/privatePage")}
            sx={{ mr: 2 }}
            color="inherit"
            variant="text">
            Privado
          </Button>
          <Button
            onClick={() => navegar("/olvidoPass")}
            sx={{ mr: 2 }}
            color="inherit"
            variant="text">
            Olvide contraseña
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
