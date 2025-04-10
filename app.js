mapboxgl.accessToken = 'pk.eyJ1IjoiYWgzODYzIiwiYSI6ImNtOWJud3p3YjBoanQyc29xeHVsbDE4YmEifQ.YNU_qv33YYjYGBtGimY-7w'; // Replace with your Mapbox token
var map = new mapboxgl.Map({
  container: 'map', // The ID of the div where the map will render
  style: 'mapbox://styles/mapbox/streets-v11', // Style of the map
  center: [-74.5, 40], // Initial position [longitude, latitude]
  zoom: 9, // Initial zoom level
});

