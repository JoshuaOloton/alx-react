import React from 'react'
import logo from '../assets/holberton.jpg';
import { StyleSheet, css } from "aphrodite";
import { AppContext } from "../App/AppContext";

const Header = () => {
  const { user, logOut } = useContext(AppContext);

  return (
    <>
      <header className={css(styles["App-header"])}>
        <img src={logo} className={css(styles["App-logo"])} alt="logo" />
        <h1>School dashboard</h1>
      </header>
      {user.isLoggedIn && (
        <section>
          <p>Welcome <b>{user.email}</b> <span onClick={logOut}>(logout)</span></p>
        </section>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  "App-header": {
    fontSize: "1.4rem",
    color: "#e0354b",
    display: "flex",
    alignItems: "center",
    borderBottom: "3px solid #e0354b",
  },

  "App-logo": {
    width: "200px",
    height: "200px",
  },
});

export default Header