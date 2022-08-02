import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "./auth";

//esta funcion evita que un usuario logueado ingrese a la
//página de login y/o de registro. lo redirije al home
export function publicPage(Component) {
  return function PublicPage(props) {
    const auth = useAuth();
    const router = useRouter();
    if (auth.currentUser) {
      router.replace("/");
      return <h1>Loading...</h1>;
    }
    return <Component {...props} />;
  };
}

//esta funcion evita que un usuario no autenticado ingrese
//a las paginas que son privadas
export function privateRoute(Component) {
  return function PrivateRoute(props) {
    const auth = useAuth();
    const router = useRouter();
    if (!auth.currentUser) {
      router.replace("/login");
      return <h1>Loading...</h1>;
    }
    return <Component {...props} />;
  };
}
