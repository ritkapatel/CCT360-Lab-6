const apiURL =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=snowfall";

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    let index = data.current.snowfall;

    document.querySelector("#index").textContent = index + " cm";
  });
