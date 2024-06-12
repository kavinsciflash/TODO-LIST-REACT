import style from "./styles.module.css";
import { ThemeContext } from "../../store/ThemeContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const ThemeSwitcher = () => {
  const navigate = useNavigate()
  const { changeTheme, theme } = useContext(ThemeContext);
  return (
    <>

      <div className={`${style.switch} ${theme === "dark" && style.switchNeon}`}>
        <div
          className={`${style.circle} ${theme === "dark" ? style.moveLeft : style.moveRight
            }`}
        >
          {theme === "dark" ? (
            <img
              src="./images/moon.svg"
              onClick={() => changeTheme("light")}
              alt="moon icon"
            />
          ) : (
            <img
              src="./images/sun.svg"
              onClick={() => changeTheme("dark")}
              alt="sun icon"
            />
          )}
        </div>
        <span style={{  marginLeft: '30px'}}><i class="fa fa-sign-out" aria-hidden="true" onClick={() => navigate('/')}></i></span>
      </div>

    </>
  );
};

export default ThemeSwitcher;
