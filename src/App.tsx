import React from "react";
import { renderRoutes } from "react-router-config";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  return <Router>{renderRoutes(routes)}</Router>;
}

export default App;
