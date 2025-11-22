let apikey = "9a78cd993b1a4bfb80195831251611";
let txtCity = document.getElementById("txt_city");

txtCity.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        apiCall(txtCity.value);
    }
});

let apiCall = (city) => {
    
    
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=no`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setWeather(data); // weather data display කරන්න
        })
        .catch(error => console.error('Error:', error));
}

let setWeather = (data) => {
    let windSpeed = document.getElementById("windSpeed"); // document. add කරන්න
    windSpeed.innerText = data.current.wind_kph + " km/h";

    let humidity = document.getElementById("humidity"); // document. add කරන්න
    humidity.innerText = data.current.humidity + "%";

    let cloud = document.getElementById("cloud"); // document. add කරන්න
    cloud.innerText = data.current.cloud + "%";

    let uv = document.getElementById("uv"); // document. add කරන්න
    uv.innerText = data.current.uv ;

    let pressure = document.getElementById("pressure"); // document. add කරන්න
    pressure.innerText = data.current.pressure_in + " hpa";

    let visibility = document.getElementById("visibility"); // document. add කරන්න
    visibility.innerText = data.current.vis_km + " Km";

    let lo = document.getElementById("lo"); // document. add කරන්න
    lo.innerText = data.location.name;

    let temp = document.getElementById("temp"); // document. add කරන්න
    temp.innerText = data.current.temp_c;

    let mp = document.getElementById("mo"); // document. add කරන්න
    mo.innerText = data.current.condition.text;

    let ran = document.getElementById("ran"); // document. add කරන්න
    ran.innerText = data.current.is_day;

    let time = document.getElementById("time"); // document. add කරන්න
    time.innerText = data.location.localtime;

    
    img.src= data.current.condition.icon;
}
