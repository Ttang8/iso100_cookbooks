import {RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/session_actions';


const nullErrors = [];

const ErrorReducer = (state= nullErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return errors;
    case CLEAR_ERRORS:
      return nullErrors;
    default:
      return state;
  }
};

export default ErrorReducer;
