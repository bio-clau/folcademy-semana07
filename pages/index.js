import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Folcademy</title>
        <meta name="description" content="Authorization with Firebase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>¡Bienvenidos a Folcademy, semana 07!</h1>
        <h2>Autenticacion y autorizacion con Firebase!</h2>

        <p className={styles.description}>Temas:</p>
        <h2>Autenticacion</h2>
        <h2>Autorizacion</h2>
        <h2>Firebase</h2>
        <h2>Aplicacion en NextJS</h2>
      </main>
    </div>
  );
}
