import { useState } from "react";
import WeatherForm from "./WetherForm";
function WeatherApp (){
    const [weather, setWheater] = useState(null)
    async function loadInfo(city="london"){
        try{ 
           const request= await fetch(
               `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
           );
           const json= request.json()
           console.log(json)
       
        } catch (erorr) {
       
        }
       
       }
       
       function handleChangeCity(city){
        setWheater(null);
           loadInfo(city);
       }
       
    return(
        <div>
           <WeatherForm onChangeCity={handleChangeCity}/>
           <div>Info</div>
        </div>
    )
}

export default WeatherApp;