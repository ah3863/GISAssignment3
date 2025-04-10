mapboxgl.accessToken = 'pk.eyJ1IjoiYWgzODYzIiwiYSI6ImNtOWJud3p3YjBoanQyc29xeHVsbDE4YmEifQ.YNU_qv33YYjYGBtGimY-7w';

const map = new mapboxgl.Map({
    container: 'map', // ID of the div where the map renders
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-73.97657, 40.75869], // Starting position [longitude, latitude]
    zoom: 12 // Starting zoom level
});

const SATCData = [
    {
      "location_name": "Carrie Bradshaw’s apartment (theoretical)",
      "character": "Carrie",
      "episode": "Season: 1. Episode: 1 ",
      "description": "Overflowing with Vogue magazines and piles of clothing...",
      "longitude": [-73.95817, 40.76961]
    },
    {
      "location_name": "Carrie Bradshaw’s apartment (filming location)",
      "character": "Carrie",
      "episode": "Season: 1. Episode: 1 ",
      "description": "The iconic staircase where Carrie was often spotted...",
      "longitude": [-74.00376, 40.73535]
    },
    // Add more locations...
];

// Loop through each SATC location and add a marker with a popup
SATCData.forEach((location) => {
    const popup = new mapboxgl.Popup({ offset: 36 }).setHTML(`
        <h3>${location.location_name}</h3>
        <p><strong>Character:</strong> ${location.character}</p>
        <p><strong>Episode:</strong> ${location.episode}</p>
        <p>${location.description}</p>
    `);

    let markerColor = '#ccc'; // Default marker color

    if (location.character === 'Carrie') markerColor = 'red';
    if (location.character === 'Miranda') markerColor = 'green';
    if (location.character === 'Charlotte') markerColor = 'blue';
    if (location.character === 'Samantha') markerColor = 'yellow';

    new mapboxgl.Marker({ color: markerColor })
        .setLngLat(location.longitude) // Longitude, Latitude
        .setPopup(popup) // Attach popup
        .addTo(map);
});
