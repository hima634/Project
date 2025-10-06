const api="a5a13e106767a276cf6e99f0b6d7699d";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


let btn=document.querySelector('.search button');
let searchBox=document.querySelector('.search input');
let weatherIcon=document.querySelector('.weather_icon')

  async function getWeather(city){
      const URL=`${apiUrl}${city}&appId=${api}`;
      let response= await fetch(URL);
      let data= await response.json();
      console.log(data);

      if(data.cod==404){
         document.querySelector('#invalid_city').style.display="block";
         document.querySelector('.weather').style.display="none";
      }else{
        document.querySelector('.weather .city').innerText=city;
        document.querySelector('.weather h1').innerText=data.main.temp + "°c";
        document.querySelector('.cols .humidity ').innerText=data.main.humidity+ "%";
        document.querySelector('.cols .wind ').innerText=data.wind.speed +" km/h";
  
        //weather icon
        let weather=data.weather[0].main;
        console.log(weather);
        if(weather=="Clear"){
           weatherIcon.src="images/clear.png";
        }else if(weather=="Mist"){
          weatherIcon.src="images/mist.png";
       }else if(weather=="Clouds"){
          weatherIcon.src="images/clouds.png";
       }else if(weather=="Rain"){
          weatherIcon.src="images/rain.png";
       }else if(weather=="Drizzle"){
          weatherIcon.src="images/drizzle.png";
       }else if(weather=="Snow"){
          weatherIcon.src="images/snow.png";
       }

       document.querySelector('#invalid_city').style.display="none";
       document.querySelector('.weather').style.display="block";

      }
  
 }

btn.addEventListener('click',(eve)=>{
     getWeather(searchBox.value);
});