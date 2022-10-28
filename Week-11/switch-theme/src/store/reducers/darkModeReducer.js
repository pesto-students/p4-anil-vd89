import { DARK_MODE } from "../types";

// initial state
const initialState = {
  isDarkMode: !!JSON.parse(localStorage.getItem("darkMode")),
};

const darkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK_MODE:
      return {
        ...state,
        isDarkMode: action.payload,
      };
    default:
      return state;
  }
};

export default darkModeReducer;
