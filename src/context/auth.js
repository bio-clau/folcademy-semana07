import { useContext, useState, useEffect, createContext } from "react";
import { auth } from "../../config/firebase";
import firebase from "firebase/compat/app";

//Creo un contexto
const AuthContext = createContext();

//creo un hook para usar el contexto
export function useAuth() {
  return useContext(AuthContext);
}

//Creo el provider, que va a proveer de contexto a toda mi aplicacion
//el children que recibe por argumento va a ser los componentes de mi app
export function AuthProvider({ children }) {
  //creo un estado para el usuario y un loading
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //con un useEffect escucho los cambios que hay en el usuario
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  //comienzo con las rutas de autenticacion
  //Registro con mail y contraseña, esto retorna una promesa!
  function register(user) {
    return auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  //Registro con Google, esto esta hecho con async-await
  async function regWithGoogle() {
    try {
      const userCred = await auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
      setCurrentUser(userCred.user);
    } catch (err) {
      console.log(err);
    }
  }

  //login con usuario y contraseña
  function login(user) {
    return auth.signInWithEmailAndPassword(user.email, user.password);
  }

  //funcion para resetear password en caso de olvido de contraseña
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  //funcion para el logout
  function logout() {
    return auth.signOut();
  }

  //seteo los valores que paso al provider
  const value = {
    currentUser,
    register,
    regWithGoogle,
    login,
    resetPassword,
    logout,
  };

  //Proveo el contexto
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
