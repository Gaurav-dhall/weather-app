const apikey= "5d48bc2c6fc50a863749158270606e36";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

document.querySelector(".container").style.display="none";

const searchbar=document.getElementById("searchbar");

const searchbtn=document.getElementById("search-btn");
searchbtn.addEventListener("click",()=>{
    getWeatherData(searchbar.value);
});

function convertUnixToTime(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000); // Convert to milliseconds
  const hours = date.getHours();
  const minutes = date.getMinutes();
  
  // Format hours and minutes with AM/PM
  const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${hours >= 12 ? 'PM' : 'AM'}`;
  return formattedTime;
}


// api key and api url 

async function getWeatherData(city){
    // fetching data from open weather api 
    
        const response=await fetch(apiurl+city+`&appid=${apikey}`);
        // fetching api 
        var data=await response.json();
        console.log(data);

        document.querySelector(".container").style.display="flex";
     
        document.querySelector(".welcomemsg").style.display="none";

        document.querySelector(".cityname").innerHTML=data.name;
        // updating city name 

        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        // updating temp 


        document.querySelector(".humidity").lastElementChild.innerHTML=data.main.humidity+"%";
        // updating humidity


        document.querySelector(".windspeed").lastElementChild.innerHTML=data.wind.speed+"m/s";
        // updating humidity

        document.querySelector(".feelslike").innerHTML="Feels like:"+data.main.feels_like+"°C";
        
        document.querySelector(".maxtemp").innerHTML="Max:"+data.main.temp_max+"°C";

        document.querySelector(".mintemp").innerHTML="Min:"+data.main.temp_min+"°C";
        document.querySelector(".weathercondition").innerHTML=data.weather[0].main;

document.querySelector(".visibility").innerHTML="Visibility:"+data.visibility/1000+"km"
    document.querySelector(".longitude").innerHTML="Longitude:"+data.coord.lon;
    document.querySelector(".latitude").innerHTML="Latitude:"+data.coord.lat;

    switch (data.weather[0].main) {
        case "Mist":
            document.querySelector(".weather-icon").attributes[0].value="assets/mist.png";

            document.querySelector(".video-background").firstElementChild.src="assets/vecteezy_mist-moving-between-the-trees-ariel-view-rainy-weather-in_49318339.mp4"

            document.querySelector(".video-background").load();
            document.querySelector(".video-background").play();
            break;
        case "Smoke":
            document.querySelector(".weather-icon").attributes[0].value="assets/mist.png";

            document.querySelector(".video-background").firstElementChild.src="assets/vecteezy_mist-moving-between-the-trees-ariel-view-rainy-weather-in_49318339.mp4"

            document.querySelector(".video-background").load();
            document.querySelector(".video-background").play();
            break;

        case "Clouds":
            document.querySelector(".weather-icon").attributes[0].value="assets/clouds.png";

            document.querySelector(".video-background").firstElementChild.src="assets/clody.mp4"

            document.querySelector(".video-background").load();
            document.querySelector(".video-background").play();
            break;      
        case "Fog":
            document.querySelector(".weather-icon").attributes[0].value="assets/clouds.png";

            document.querySelector(".video-background").firstElementChild.src="assets/foggy.mp4"

            document.querySelector(".video-background").load();
            document.querySelector(".video-background").play();
            break; 
            
        case "Haze":
            document.querySelector(".weather-icon").attributes[0].value="assets/clouds.png";

              document.querySelector(".video-background").firstElementChild.src="assets/haze.mp4"

              document.querySelector(".video-background").load();
            document.querySelector(".video-background").play();
            break;

        case "Rain":
            document.querySelector(".weather-icon").attributes[0].value="assets/rain.png";

              document.querySelector(".video-background").firstElementChild.src="assets/rainy.mp4"

              document.querySelector(".video-background").load();
            document.querySelector(".video-background").play();
            break;
        case "Thunderstorm":
            document.querySelector(".weather-icon").attributes[0].value="assets/rain.png";

              document.querySelector(".video-background").firstElementChild.src="assets/thunderstorm.mp4"

              document.querySelector(".video-background").load();
            document.querySelector(".video-background").play();
            break;

        case "Clear":
            document.querySelector(".weather-icon").attributes[0].value="assets/clear.png";

              document.querySelector(".video-background").firstElementChild.src="assets/clear sky.mp4"

              document.querySelector(".video-background").load();
            document.querySelector(".video-background").play();
            break;

        case "Snow":
            document.querySelector(".weather-icon").attributes[0].value="assets/snow.png";

              document.querySelector(".video-background").firstElementChild.src="assets/snow.mp4"

              document.querySelector(".video-background").load();
            document.querySelector(".video-background").play();
            break;

            case "Drizzle":
            document.querySelector(".weather-icon").attributes[0].value="assets/drizzle.png";

              document.querySelector(".video-background").firstElementChild.src="assets/drizzleved.mp4"

              document.querySelector(".video-background").load();
            document.querySelector(".video-background").play();
            break;
    
        default:
            document.querySelector(".weather-icon").hidden=true;
              document.querySelector(".video-background").firstElementChild.src="assets/clody.mp4"
              
              document.querySelector(".video-background").load();
            document.querySelector(".video-background").play();
            break;
    }

    document.querySelector(".cloudiness").lastElementChild.innerHTML=data.clouds.all+"%";
    document.querySelector(".sealevel").lastElementChild.innerHTML=parseFloat(((data.main.sea_level)* 0.000986923).toFixed(3)) +"atm";
    document.querySelector(".pressure").lastElementChild.innerHTML=parseFloat(((data.main.pressure)* 0.000986923).toFixed(3)) +"atm";
    document.querySelector(".sunrise").lastElementChild.innerHTML=convertUnixToTime(data.sys.sunrise);
    document.querySelector(".sunset").lastElementChild.innerHTML=convertUnixToTime(data.sys.sunset);
    document.querySelector(".winddirection").lastElementChild.innerHTML=data.wind.deg+"° to the North";



}
// getWeatherData("delhi");