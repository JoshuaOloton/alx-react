import React from "react";
import './App.css';
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import PropTypes from 'prop-types';

function App({ isLoggedIn }) {
  console.log('APP');
  return (
    <React.Fragment>
      <div className="Header">
        <Notifications />
        <Header />
      </div>
      <div className="App">
        { isLoggedIn ? <CourseList /> : <Login /> }
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
