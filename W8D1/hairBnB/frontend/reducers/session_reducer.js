import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const _nullUser = {
  currrentUser: null
};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      console.log("Hi I'm here");
      let nextState = Object.assign({}, state);
      nextState.currentUser = action.currentUser;
      return nextState;
    default:
      return state;
  }
};

export default SessionReducer;
