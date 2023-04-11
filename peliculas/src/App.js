import { useState } from "react";
import { MyRoutes } from "./routes/routes";
import "./App.css";


function App() {
  return (
    <div>
      <header>
        <h1 className="title">🎬Películas</h1>
      </header>
    <MyRoutes/>
    </div>
  );
}

export default App;