const seaBtn = document.querySelector("#searchBtn");
// const icon = document.querySelector("#icon");

seaBtn.addEventListener("click", function () {
  const inputDat = document.querySelector("#inputData").value;
  const apiKey = "0eb9fc1b8aad427580954902261206";
  const Url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputDat}&aqi=yes`;

  fetch(Url)
    .then((Response) => Response.json())
    .then((data) => {
      updateUI(data);
    })
    .catch((error) => {
      alert("city is not found");
      return;
    });
});

function updateUI(data) {
  document.querySelector("#city").innerText = data.location.name;
  const date = new Date(data.location.localtime);

  document.querySelector("#time").innerText = date.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  document.querySelector("#temp").innerText = data.current.temp_c + "°C";
  document.querySelector("#condition").innerText = data.current.condition.text;
  document.querySelector("#Humidity").innerText = data.current.humidity + "%";
  document.querySelector("#wind").innerText = data.current.wind_kph + "km/h";
  document.querySelector("#Pressure").innerText =
    data.current.pressure_mb + "km/h";
  document.querySelector("#feelsLike").innerText = data.current.feelslike_c;
  const condition = data.current.condition.text;
  const weatherIcon = document.querySelector("#icon");
  console.log(condition);
  console.log(icon);

  document.createElement;
  if (condition.includes("Sunny") || condition.includes("clear")) {
    icon.src = "Assests/sunny.png";
  } else if (
    condition.includes(" cloud") ||
    condition.includes("Overcast") ||
    condition.includes("Mist") ||
    condition.includes("Fog")
  ) {
    icon.src = "Assests/cloudy.png";
  } else if (
    condition.includes("Rain") ||
    condition.includes("Drizzle") ||
    condition.includes("shower")
  ) {
    icon.src = "Assests/rainy.png";
  } else if (condition.includes("Thunder")) {
    icon.src = "Assests/thunder.png";
  } else {
    icon.src = "Assests/thunder.png";
  }
}
