import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import "./styles/global.css";

import HomePage from "./pages/HomePage";
import reportWebVitals from "./reportWebVitals";
import NavBar from "./components/NavBar";
import store from "./store";
import { loadResources } from "./store/resourceSlice";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

store.dispatch(loadResources());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
