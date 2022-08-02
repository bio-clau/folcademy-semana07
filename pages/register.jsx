import React, { useState } from "react";
import style from "../styles/login.module.css";
import { useAuth } from "../src/context/auth";
import { TextField, Button } from "@mui/material";
import Link from "next/link";
import GoogleIcon from "@mui/icons-material/Google";
import { SnackbarAlert } from "../src/components/alert";
import { Snackbar } from "@mui/material";
import { publicPage } from "../src/context/Route";

function Register() {
  const { register, regWithGoogle, currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [errPass, setErrPass] = useState(false);
  const [err, setErr] = useState("");
  const [open, setOpen] = useState(false);
  function handleClose() {
    setOpen(false);
    setErr("");
  }
  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (user.password !== user.passwordConfirm) {
      return setErrPass(true);
    } else {
      setErrPass(false);
    }
    setLoading(true);
    register(user)
      .then(() => console.log("registro listo"))
      .catch(() => {
        setErr("Registro fallido");
        setOpen(true);
        setLoading(false);
      });
  }
  function handleRegWithGoogle() {
    regWithGoogle().then(() => console.log("listoooooo"));
  }
  return (
    <div className={style.container}>
      <h1>REGISTRO</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <TextField
          sx={{ margin: 3 }}
          type="email"
          id="email"
          label="Email"
          name="email"
          variant="outlined"
          required
          onChange={handleChange}
        />
        <TextField
          sx={{ margin: 3 }}
          type="password"
          name="password"
          required
          label="Contraseña"
          variant="outlined"
          id="password"
          onChange={handleChange}
        />
        <TextField
          sx={{ margin: 3 }}
          type="password"
          name="passwordConfirm"
          required
          label="Confirmar Contraseña"
          variant="outlined"
          id="confirmPassword"
          onChange={handleChange}
        />
        {errPass ? "Las contraseñas deben coincidir" : ""}
        <span>
          <Link href="/olvidoPass">¿Olvidaste tu contraseña?</Link>
        </span>
        <Button
          variant="contained"
          sx={{ mt: 3, mb: 2, color: "white" }}
          type="submit"
          disabled={loading}>
          REGISTRARSE
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 3, mb: 2, color: "black" }}
          onClick={handleRegWithGoogle}
          type="submit"
          disabled={loading}>
          <GoogleIcon fontSize="small" />
          &nbsp; Ingresar con Google
        </Button>
      </form>
      <span>
        ¿Ya tienes una cuenta? <Link href="/login">Inicia Sesión</Link>
      </span>
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
    </div>
  );
}

export default publicPage(Register);
