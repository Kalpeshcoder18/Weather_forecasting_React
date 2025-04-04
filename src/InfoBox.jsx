import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import {yellow } from '@mui/material/colors';

export default function InfoBox({info}){
    const image_url="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let cold_url="https://images.unsplash.com/photo-1425100599170-85ec4f00a6ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let hot_url="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let rain_url="https://plus.unsplash.com/premium_photo-1671406233410-9727cf249910?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  
    return( 
        <div className="info-box">
           
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?rain_url:info.temp>15?hot_url:cold_url}
        title="Weather app"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.City}{
          info.humidity>80?<ThunderstormIcon  fontSize="small"/>:info.temp>15?<SunnyIcon  fontSize="small" sx={{ color: yellow[800] }  }/>:<AcUnitIcon  fontSize="small"/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature : {info.temp}°C</p>
          <p>Humidity :{info.humidity}</p>
          <p>Min Temp :{info.tempMin}</p>
          <p>Max Temp :{info.tempMax}</p>
          <p>
             The Weather can be described as <i>{info.weather}</i> and
             the feels like temperature is {info.feelslike}°C.
          </p>
        </Typography>
      </CardContent>
     
    </Card>
        </div>
    )
}