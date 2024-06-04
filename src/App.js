import style from "./app.module.css";
import { useContext } from "react";
import { ThemeContext } from "./store/ThemeContext";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login";
import Main from "./components/main";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={style.app} data-theme={theme}>
      <div className={style.wrapper}>
        <BrowserRouter>
          <Routes>
            <Route path="/" index element={<Login />} />
            <Route path="/todo" index element={<Main />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
