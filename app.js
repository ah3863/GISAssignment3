mapboxgl.accessToken = 'pk.eyJ1IjoiYWgzODYzIiwiYSI6ImNtOWJ2ZzJoMDBreHIyanBuYmFvb3lvam0ifQ.Zeg12vyxmHuz86vEocSGdw'; // Replace with your Mapbox token
var map = new mapboxgl.Map({
  container: 'map-container', // The ID of the div where the map will render
  style: 'mapbox://styles/mapbox/streets-v11', // Style of the map
  center: [-74.5, 40], // Initial position [longitude, latitude]
  zoom: 9, // Initial zoom level
});

const mapOptions = {
    container: 'map-container', // container ID
    center: [-73.99432, 40.71103], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 10.92, // starting zoom
    bearing: 29,
    style: 'mapbox://styles/mapbox/streets-v11'
    // hash: true
}

const coolMap = new mapboxgl.Map(mapOptions);


const markerOptions = {
    color: '#57068C',
}


create the popup
const popup = new mapboxgl.Popup({
     offset: 36,
 }).setText(
     'These are iconic landmarks in NYC from Sex and the City!'
 );

Carrie Bradshaw’s apartment (theoretical)
 const marker1 = new mapboxgl.Marker(markerOptions)
    .setLngLat([-73.95817, 40.76961])
    .setPopup(popup)
    .addTo(coolMap);

Carrie Bradshaw’s apartment (filming location)
 const marker2 = new mapboxgl.Marker(markerOptions)
     .setLngLat([-74.00376, 40.73535])
     .addTo(coolMap);

Louis K. Meisel Gallery
 const marker3 = new mapboxgl.Marker(markerOptions)
     .setLngLat([-74.00052, 40.72568])
     .addTo(coolMap);

The Bus Stop
 const marker4 = new mapboxgl.Marker(markerOptions)
     .setLngLat([-74.00686, 40.73510])
     .addTo(coolMap);

St. Patrick’s Cathedral
 const marker5 = new mapboxgl.Marker(markerOptions)
     .setLngLat([-73.97657, 40.75869])
     .addTo(coolMap);

Yankee Stadium
 const marker6 = new mapboxgl.Marker(markerOptions)
     .setLngLat([-73.92764, 40.82925])
     .addTo(coolMap);

The Plaza Hotel
 const marker7 = new mapboxgl.Marker(markerOptions)
     .setLngLat([-73.97388, 40.76445])
     .addTo(coolMap);

Staten Island Ferry
 const marker8 = new mapboxgl.Marker(markerOptions)
     .setLngLat([-74.01305, 40.70093])
     .addTo(coolMap);

Magnolia Bakery
const marker9 = new mapboxgl.Marker(markerOptions)
     .setLngLat([-74.00498, 40.73589])
     .addTo(coolMap);

Grace Episcopal Church
const marker10 = new mapboxgl.Marker(markerOptions)
     .setLngLat([-73.99097, 40.73201])
     .addTo(coolMap);

The Central Park Loeb Boathouse
const marker11 = new mapboxgl.Marker(markerOptions)
     .setLngLat([-73.96879, 40.77534])
     .addTo(coolMap);

Soho House New York
const marker12 = new mapboxgl.Marker(markerOptions)
     .setLngLat([-74.00588, 40.74062])
     .addTo(coolMap);

Jefferson Market Garden
const marker13 = new mapboxgl.Marker(markerOptions)
     .setLngLat([-73.99953, 40.73445])
     .addTo(coolMap);

New York Public Library
const marker14 = new mapboxgl.Marker(markerOptions)
     .setLngLat([-73.98209, 40.75335])
     .addTo(coolMap);

// now let's make a markers for our favorite SATC places

SATCData.forEach((record) => {
    const popup = new mapboxgl.Popup({
        offset: 36,
    }).setText(
        ${description}.
    );

    let chartacterColor = '#ccc';

    if (record.character === 'Miranda') {
        chartacterColor = 'green'
    }

    if (record.character === 'Carrie') {
        chartacterColor = 'red'
    }

    if (record.character === 'Charlotte') {
        chartacterColor = 'blue'
    }

    if (record.character === 'Samantha') {
        chartacterColor = 'yellow'
    }


    new mapboxgl.Marker({
        scale: 0.8,
        color: chartacterColor
    })
        .setLngLat([record.longitude, record.latitude])
        .setPopup(popup)
        .addTo(coolMap)
})
