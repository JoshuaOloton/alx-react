import React from "react";
import './App.css';
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
  ];

  handleKeyPress(e) {
    if (e.key === 'h' && e.ctrlKey) {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="Header">
          <Notifications listNotifications={this.listNotifications} />
          <Header />
        </div>
        <div className="App">
          { this.props.isLoggedIn ? <CourseList listCourses={this.listCourses} /> : <Login /> }
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {
    return;
  },
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};


export default App;
