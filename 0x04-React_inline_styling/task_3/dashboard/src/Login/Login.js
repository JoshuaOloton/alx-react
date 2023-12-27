import React from 'react'
import { StyleSheet, css } from "aphrodite";

const Login = () => {
  return (
    <div className={css(styles["App-body"])}>
      <p>Login to access the full dashboard</p>
      <div className={css(styles.inputGroup)}>
        <label htmlFor="email">Email: </label>
        <input className={css(styles.input)} type="email" id="email" name="email" />
      </div>
      <div className={css(styles.inputGroup)}>
        <label htmlFor="password">Password: </label>
        <input className={css(styles.input)} type="password" id="password" name="password" />
      </div>
      <button>OK</button>
    </div>
  )
}

const styles = StyleSheet.create({
  "App-body": {
    fontSize: "1rem",
    padding: "2em",
    height: "45%",
    '@media(max-width: 900px)': {
      display: 'flex',
      flexDirection : 'column',
    }
  },

  inputGroup: {
    '@media(max-width: 900px)': {
      display: 'flex',
      flexDirection : 'row',
      alignItems: 'center',
    }
  },

  input: {
    margin: "10px",
  },
});

export default Login