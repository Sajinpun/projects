/* -------------------------------------------------------------------------------------

    THE OPEN WEATHER API - JAVASCRIPT CODE FOR THE DEMO


------------------------------------------------------------------------------------- */



//alert("hello");

var myAPPIKEY = "eba07d12bcbbd7b34dbaf549c8471dbd";


var theButton = document.getElementById("myButton");

theButton.addEventListener("click", getWeather, false);


function getWeather() {
    
    
    var userCity = document.getElementById("theCity").value;
    
    var theAPICall = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+ userCity +"&units=metric&APPID="+ myAPPIKEY +"&cnt=3"
    
}