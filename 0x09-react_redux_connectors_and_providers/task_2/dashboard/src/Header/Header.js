import React from 'react'
import logo from '../assets/holberton.jpg';
import { StyleSheet, css } from "aphrodite";
import { AppContext } from "../App/AppContext";
import { logout } from "../actions/uiActionCreators";

const Header = (props) => {
  const { user, logOut } = props;

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

Header.contextType = AppContext;

Header.defaultProps = {
  user: null,
  logout: () => {},
};

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    user: state.get("user"),
  };
};

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);