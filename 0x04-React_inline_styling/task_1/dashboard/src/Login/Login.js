import React from 'react'
import { StyleSheet, css } from "aphrodite";

const Login = () => {
  return (
    <div className={css(styles["App-body"])}>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email: </label>
      <input type="email" id="email" name="email" />
      <label htmlFor="password">Password: </label>
      <input className={css(styles.input)} type="password" id="password" name="password" />
      <button>OK</button>
    </div>
  )
}

const styles = StyleSheet.create({
  "App-body": {
    fontSize: "1rem",
    padding: "2em",
    height: "45%",
  },

  input: {
    margin: "10px",
  },
});

export default Login