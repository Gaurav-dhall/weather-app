const apikey= "5d48bc2c6fc50a863749158270606e36";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchbar=document.getElementById("searchbar");

const searchbtn=document.getElementById("search-btn");
searchbtn.addEventListener("click",()=>{
    getWeatherData(searchbar.value);
});

// api key and api url 

async function getWeatherData(city){
    // fetching data from open weather api 
    
        const response=await fetch(apiurl+city+`&appid=${apikey}`);
        // fetching api 
        var data=await response.json();
        console.log(data);

        document.querySelector(".cityname").innerHTML=data.name;
        // updating city name 

        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        // updating temp 


        document.querySelector(".humidity").lastElementChild.innerHTML=data.main.humidity+"%";
        // updating humidity


        document.querySelector(".windspeed").lastElementChild.innerHTML=data.wind.speed+"km/h";
        // updating humidity

        
    
}

// getWeatherData();