import * as sessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signup = (user) => dispatch => (
  sessionApiUtil.signup(user)
    .then((user) => dispatch(receiveCurrentUser(user)), (err) => dispatch(receiveErrors(err.responseJSON)))
);

export const login = (user) => dispatch => (
  sessionApiUtil.login(user)
    .then((user) => dispatch(receiveCurrentUser(user)), (err) => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  sessionApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
);




