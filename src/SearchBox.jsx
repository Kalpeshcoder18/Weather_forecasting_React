import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; 
import "./SearchBox.css" 
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL="http://api.openweathermap.org/data/2.5/weather"
    const API_KEY="35091698ba325e84e2f00100e2721771"
   
    let getWeatherInfo= async()=>{
  try{
    let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse=await response.json();
    console.log(jsonResponse);
    let result={
        City:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description
    }
     
    console.log(result);
    return result; 
  } catch(error){
    throw error;
  }
    }

    let handleChange=(event)=>{
        setCity(event.target.value);
    }

    let handleSubmit=async(event)=>{
        try{
            event.preventDefault();
        console.log(city);
        setCity("");
        let info=await getWeatherInfo();
        updateInfo(info);
        }catch(error){
            setError(true);
        }
        }

    return (
        <div className='SearchBox'>
       
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined"  required value={city} onChange={handleChange} />
            <br></br>
            <br></br>
            <Button variant="contained" type='submit'>Search</Button>
            {error&&<p style={{color:"red"}}>No such city in our API</p>}
            </form>
        </div>
    )
}