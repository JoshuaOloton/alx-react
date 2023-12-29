import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password },
  };
}

export const logout = () => ({ type: LOGOUT });

export const loginSuccess = () => ({ type: LOGIN_SUCCESS });

export const loginFailure = () => ({ type: LOGIN_FAILURE });

export const loginRequest = (email, password) => {
  return (dispatch) => {
    dispatch(login(email, password));
    return fetch(`http://localhost:3000/login-success.json`)
      .then((res) => res.json())
      .then((data) => dispatch(loginSuccess()))
      .catch((err) => dispatch(loginFailure()))
  };
}

export const boundHideNotificationDrawer = () =>
  dispatch(hideNotificationDrawer());

export const boundDisplayNotificationDrawer = () =>
  dispatch(displayNotificationDrawer());

export const boundLogout = () => dispatch(logout());

export const boundLogin = (email, password) => dispatch(login(email, password));
