import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import "./styles/global.css";

import VillagePage from "./pages/VillagePage";
import reportWebVitals from "./reportWebVitals";
import NavBar from "./components/NavBar";
import store from "./store/store";
import ArmyPage from "./pages/ArmyPage";
import BattlePage from "./pages/BattlePage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<VillagePage />} />
          <Route path="/army" element={<ArmyPage />} />
          <Route path="/battle" element={<BattlePage />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
