import React from "react";
import ReactDOM  from "react-dom";
import Card from "./components/Card"
import "bootstrap/dist/css/bootstrap.css"
const conteiner = document.getElementById('root')

ReactDOM.render(<Card
     title="Technique Guide"
     description="Lear amazing things"
     img="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise."
    leftColor="#A74CF2"
    rightColor="#617BFB"

/>,conteiner)