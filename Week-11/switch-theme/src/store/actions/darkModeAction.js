import { DARK_MODE } from "../types";

export const handleDarkMode = (e) => async (dispatch) => {
  localStorage.setItem("darkMode", e);

  dispatch({
    type: DARK_MODE,
    payload: e,
  });
};
