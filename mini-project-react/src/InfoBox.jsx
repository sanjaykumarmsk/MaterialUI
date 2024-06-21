import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1673191898498-9bac443b2407?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

  const HOT_URL =
    "https://media.istockphoto.com/id/1243760572/photo/heat-wave-concrept.webp?b=1&s=170667a&w=0&k=20&c=DirvRYfFTjOjsPDxPDPGLPS8FfUsIHW2PtMbCSGMGtM=";
  const COLD_URL =
    "https://media.istockphoto.com/id/929654528/photo/wintery-scene-of-a-man-with-furry-and-full-beard-shivering-in-a-snow-storm.jpg?s=612x612&w=is&k=20&c=u_GEhcmH1_dwpDOMyQNGaqYxMQ5Npac0os84JejqzH4=";
  const RAIN_URL =
    "https://media.istockphoto.com/id/1011777484/photo/cloud-storm-sky-with-thunderbolt-over-rural-landscape.webp?b=1&s=170667a&w=0&k=20&c=l0d0zJf6nFkOVE0LpowLNGFXxwTii8GYFd7PkQI1NSo=";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="Weather representation"
            height="140"
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}%</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
