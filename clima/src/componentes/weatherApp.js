import { useEffect, useState } from "react";
import WeatherForm from "./WetherForm";
import WeatherMainInfo from "./WeatherMainInfo";
import styles from "./weatherApp.module.css";
import Loading from "./Loading";
function WeatherApp (){
    const [weather, setWheater] = useState(null);

    useEffect(()=>{
   loadInfo();

    }, []);
     useEffect(()=>{
     document.title = "Weather | " + weather?.location?.name ??"";

     }, [weather])

    async function loadInfo(city="london"){
        console.log(
            `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
          );

        try{ 
           const request= await fetch(
            `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`
           );
           const json= await request.json()
           console.log(json)
           setWheater(json)
           
       
        } catch (error) {
       
        }
       
       }
       
       function handleChangeCity(city){
        setWheater(null);
           loadInfo(city);
       }
       
    return(
        <div className={styles.weatherContainer}>
        <WeatherForm onChangeCity={handleChangeCity} />
        {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
      </div>
    )
}

export default WeatherApp;