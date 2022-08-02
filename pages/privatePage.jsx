import React, { useState } from "react";
import style from "../styles/login.module.css";
import { useAuth } from "../src/context/auth";
import { Button } from "@mui/material";
import { privateRoute } from "../src/context/Route";

function PrivatePage() {
  const { logout } = useAuth();
  const [loading, setLoading] = useState();
  function handleLogout() {
    logout()
      .then(() => console.log("listopo"))
      .catch(() => "ooopppsss");
  }
  return (
    <div className={style.container}>
      <h1>Este contenido es privado</h1>
      <h2>Si ud. no ha iniciado sesión, no debería esta acá.</h2>
      <Button
        onClick={handleLogout}
        variant="contained"
        sx={{ mt: 3, mb: 2, color: "white" }}
        type="submit"
        disabled={loading}>
        Logout
      </Button>
    </div>
  );
}

export default privateRoute(PrivatePage);
