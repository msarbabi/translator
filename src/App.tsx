import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/app.scss";
import Header from "./components/Header/Header";
import Input from "./components/input/Input";
import History from "./components/History/History";

function App() {
  return (
    <div className="app">
      <Header />
      <Input />
      <History />
    </div>
  );
}

export default App;
