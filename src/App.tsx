import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import UseEffectPage from "./pages/UseEffect";
import UseMemoPage from "./pages/UseMemo";
import MemoPage from "./pages/Memo";
import UseRefPage from "./pages/UseRef";
import ZustandPage from "./pages/Zustand";

function App() {
  const noPaddingMargin = {
    listStyle: "none",
    fontSize: "24px",
    padding: 0,
    margin: 0,
  };
  return (
    <div style={noPaddingMargin}>
      <ul style={noPaddingMargin}>
        <li>
          <NavLink to={"/useEffect"}>UseEffect</NavLink>
        </li>
        <li>
          <NavLink to={"/useMemo"}>UseMemo</NavLink>
        </li>
        <li>
          <NavLink to={"/memo"}>Memo</NavLink>
        </li>
        <li>
          <NavLink to={"/useRef"}>UseRef</NavLink>
        </li>
        <li>
          <NavLink to={"/zustand"}>Zustand</NavLink>
        </li>
      </ul>
      <Routes>
        <Route
          path="/"
          element={
            <div style={noPaddingMargin}>
              Choose the Link you want to learn...
            </div>
          }
        />
        <Route path="/useEffect" element={<UseEffectPage />} />
        <Route path="/useMemo" element={<UseMemoPage />} />
        <Route path="/memo" element={<MemoPage />} />
        <Route path="/useRef" element={<UseRefPage />} />
        <Route path="/zustand" element={<ZustandPage />} />
      </Routes>
    </div>
  );
}

export default App;
