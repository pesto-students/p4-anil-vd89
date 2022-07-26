import './App.css';
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handleDarkMode } from "./store/actions/darkModeAction";

function App() {
  const dispatch = useDispatch();

  const mode = useSelector((state) => state.darkMode);

  const {  isDarkMode } = mode;

  const switchDarkMode = () => {
    isDarkMode
      ? dispatch(handleDarkMode(false))
      : dispatch(handleDarkMode(true));
  };

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#292c35" : "#fff";
  }, [isDarkMode]);
  return (
    <div id='darkmode'>
       <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          onChange={switchDarkMode}
          checked={isDarkMode}
        />
        <label htmlFor="checkbox" className="label">
          <BsMoonStarsFill color="white" />
          <BsFillSunFill color="yellow" />
          <div className="ball"></div>
        </label>
    </div>
  );
}

export default App;
