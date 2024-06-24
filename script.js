let api_key = "80d9bceecc1e3a121c4ad727d4178d6d";
let difKelvin = 273.15;
let urlBase = "https://api.openweathermap.org/data/2.5/weather";

document.getElementById("botonBusqueda").addEventListener("click", () => {
  const ciudad = document.getElementById("ciudadEntrada").value;
  if (ciudad) {
    fetchDatosClima(ciudad);
  }
});
function fetchDatosClima(ciudad) {
  fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then((data) => data.json())
    .then((data) => mostrarDatosClima(data));
}

function mostrarDatosClima(data) {
  const divDatosClima = document.getElementById("datosClima");
  divDatosClima.innerHTML = "";

  const ciudadNombre = data.name;
  const paisNombre = data.sys.country;
  const temperatura = data.main.temp;
  const humedad = data.main.humidity;
  const descripcion = data.weather[0].description;
  const icono = data.weather[0].icon;

  const ciudadTitulo = document.createElement("h2");
  ciudadTitulo.textContent = `${ciudadNombre} ,${paisNombre}`;

  const temperaturaInfo = document.createElement("p");
  temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura - difKelvin)}°C`;

  const iconInfo = document.createElement("img");
  iconInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`;

  const descripcionInfo = document.createElement("p");
  descripcionInfo.textContent = `La descripcion meteorologica es: ${descripcion}`;

  const humedadInfo = document.createElement("p");
  humedadInfo.textContent = `la humedad es: ${humedad}%`;

  divDatosClima.appendChild(ciudadTitulo);
  divDatosClima.appendChild(temperaturaInfo);
  divDatosClima.appendChild(descripcionInfo);
  divDatosClima.appendChild(iconInfo);
  divDatosClima.appendChild(humedadInfo);
}
