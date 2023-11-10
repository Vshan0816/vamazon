import csrfFetch from "./csrf";

const SET_CURRENT_USER = 'session/setCurrentUser';
const REMOVE_CURRENT_USER = 'session/removeCurrentUser';

const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user
});

const removeCurrentUser = () => ({
  type: REMOVE_CURRENT_USER
});

const storeCurrentUser = user => {
    if (user) sessionStorage.setItem("currentUser", JSON.stringify(user));
    else sessionStorage.removeItem("currentUser");
}

export const login = ({ email, password }) => async dispatch => {
    const response = await csrfFetch("/api/session", {
      method: "POST",
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(setCurrentUser(data.user));
    return response;
  };

  const initialState = { 
    user: JSON.parse(sessionStorage.getItem("currentUser"))
  };
  
  const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CURRENT_USER:
        return { ...state, user: action.payload };
      case REMOVE_CURRENT_USER:
        return { ...state, user: null };
      default:
        return state;
    }
  };
  
  export default sessionReducer;
  