import style from "./app.module.css";
import { useContext } from "react";
import { ThemeContext } from "./store/ThemeContext";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./components/main";
import Login from "./components/Login/login";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div data-theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Login />} />
          <Route path="/todo" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
