const apiURL =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=apparent_temperature";

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    let soil = data.current.apparent_temperature;

    document.querySelector("#soiltp").textContent = soil + "°C";

    if (soil <0){
      document.querySelector("#soiltp").style.color = "#1e00ff";
      document.body.className = "cold";
      document.querySelector(".soil-image").src = "images/frosted.webp";
      
    }

    else if (soil >= 0 && soil < 5) {
      document.querySelector("#soiltp").style.color = "#06a4c8";
      document.body.className = "chill";
      document.querySelector(".soil-image").src = "images/chill.jpg";
    }
    
    else if (soil >= 5 && soil < 10) {
      document.querySelector("#soiltp").style.color = "#ffee01";
      document.body.className = "moderate";
      document.querySelector(".soil-image").src = "images/moderate.jpeg";
    }

    else if (soil >= 10 && soil < 15) {
      document.querySelector("#soiltp").style.color = "#ff8504";
      document.body.className = "warm";
      document.querySelector(".soil-image").src = "images/warm.webp";
    }

    else if (soil >= 15) {
      document.querySelector("#soiltp").style.color = "#d30000d6";
      document.body.className = "hot"; 
      document.querySelector(".soil-image").src = "images/hot.jpeg";
    }

  });
