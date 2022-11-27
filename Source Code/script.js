// making map and tiles
const myMap = L.map('issMap').setView([51.505, -0.09], 2);
const attribution =  '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const tile = L.tileLayer(tileUrl, {attribution});
tile.addTo(myMap)

const myIcon = L.icon({
    iconUrl: '320iss.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16],
    popupAnchor: [-3, -76],
});

const marker = L.marker([0, 0], {icon: myIcon}).addTo(myMap);
//taking current position of ISS through API
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
async function getISS() {
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data);
  const { latitude, longitude } = data;
  marker.setLatLng([latitude,longitude])
  myMap.setView([latitude,longitude], 4)
  document.getElementById('lat').textContent = latitude.toFixed(2);
  document.getElementById('long').textContent = longitude.toFixed(2);
  console.log(latitude);
  console.log(longitude);
}
getISS();

//set the interval every 1 second so the website can refresh automaticly
setInterval(getISS, 1000);
