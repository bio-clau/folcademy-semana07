import React, { useState } from "react";
import Link from "next/link";
import style from "../styles/login.module.css";
import { Container, Button, TextField } from "@mui/material";
import { useAuth } from "../src/context/auth";
import { publicPage } from "../src/context/Route";
//snackbar
import { Snackbar } from "@mui/material";
import { SnackbarAlert } from "../src/components/alert";

function OlvidoPass() {
  const { resetPassword } = useAuth();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState({ msg: "", error: false });
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  function handleChange(e) {
    setEmail(e.target.value);
  }
  function handleClose() {
    setOpen(false);
    setMsg({ msg: "", error: false });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (email == "") {
      setMsg({ msg: "Debe ingresar una mail", error: true });
    }
    try {
      setMsg({ msg: "", error: false });
      setLoading(true);
      await resetPassword(email);
      setMsg({ msg: "Mail enviado", error: false });
      setOpen(true);
    } catch (err) {
      setMsg({ msg: "Error al enviar el mail.", error: true });
      setOpen(true);
      setLoading(false);
    }
  }
  return (
    <Container className={style.container} maxWidth="md">
      <span>
        Si olvidaste tu contraseña, coloca tu email y te enviaremos el link de
        restauracion de contraseña.
      </span>
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
          Enviar Mail
        </Button>
      </form>
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
          color={msg.error ? "error" : "primary"}
          variant="filled"
          severity={msg.error ? "error" : "success"}>
          {msg.msg}
        </SnackbarAlert>
      </Snackbar>
    </Container>
  );
}

export default publicPage(OlvidoPass);
