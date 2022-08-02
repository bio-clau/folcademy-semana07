import React, { useState } from "react";
import Link from "next/link";
import style from "../styles/login.module.css";
import { Container, Button, TextField } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useAuth } from "../src/context/auth";
import { publicPage } from "../src/context/Route";
import { SnackbarAlert } from "../src/components/alert";
import { Snackbar } from "@mui/material";

function Login() {
  const [err, setErr] = useState("");
  const [open, setOpen] = useState(false);
  const { login, regWithGoogle } = useAuth();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  function handleClose() {
    setOpen(false);
    setErr("");
  }
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    login(user)
      .then(() => setLoading(false))
      .catch(() => {
        setErr("Usuario y/o contraseña incorrectos");
        setOpen(true);
        setLoading(false);
      });
  }
  function handleRegWithGoogle() {
    regWithGoogle().then(() => console.log("listoooooo"));
  }

  return (
    <React.Fragment>
      <Container className={style.container} maxWidth="md">
        <h1>LOGIN</h1>
        <form className={style.form} onSubmit={handleSubmit}>
          <TextField
            sx={{ margin: 3 }}
            type="email"
            id="email"
            label="Email"
            name="email"
            required
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            sx={{ margin: 3 }}
            type="password"
            name="password"
            required
            label="Contraseña"
            id="password"
            variant="outlined"
            onChange={handleChange}
          />
          <span>
            <Link href="/olvidoPass">¿Olvidaste tu contraseña?</Link>
          </span>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              color: "white",
              backgroundColor: "primary.main",
            }}
            type="submit"
            disabled={loading}>
            Iniciar Sesión
          </Button>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              color: "white",
              backgroundColor: "primary.main",
            }}
            onClick={handleRegWithGoogle}
            type="submit"
            disabled={loading}>
            <GoogleIcon fontSize="small" />
            &nbsp; Ingresar con Google
          </Button>
        </form>
        <span>
          ¿Aún no te has registrado? <Link href="/register">Regístrate</Link>
        </span>
      </Container>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}>
        <SnackbarAlert
          onClose={handleClose}
          color="error"
          variant="filled"
          severity="error">
          {err}
        </SnackbarAlert>
      </Snackbar>
    </React.Fragment>
  );
}

export default publicPage(Login);
