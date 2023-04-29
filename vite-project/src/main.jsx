
import React from "react";
import ReactDOM from "react-dom/client" 
import {App} from "./hellowordapp"
import { FirstApp } from "./FirstApp";
import "../src/stylesheet/styles.css"
import { CounterApp } from "./counterApp";
ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
    <App/>
    <FirstApp/>
    <CounterApp value={10}/>
    
</React.StrictMode>

)

