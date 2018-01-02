import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _nullErrors = {
  session: []
};

const ErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      let nextState = Object.assign({}, state);
      nextState.session.push(action.errors);
      return nextState;
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    default:
      return state;
  }
};

export default ErrorsReducer;
