mapboxgl.accessToken = 'pk.eyJ1IjoiYWgzODYzIiwiYSI6ImNtOWJ2ZzJoMDBreHIyanBuYmFvb3lvam0ifQ.Zeg12vyxmHuz86vEocSGdw';

const map = new mapboxgl.Map({
    container: 'map-container', // ID of the div where the map renders
    style: 'mapbox://styles/mapbox/dark-v11',
    center: [-73.97657, 40.75869], // Starting position [longitude, latitude]
    zoom: 12 // Starting zoom level
});

const SATCData = [
    {
      "location_name": "Carrie Bradshaw’s apartment (theoretical)",
      "character": "Carrie",
      "episode": "Season: 1. Episode: 1 ",
      "description": "Overflowing with Vogue magazines and piles of clothing, it’s the place where we watch Carrie contemplate while typing away on her computer, chat with the girls, or wind down after one of her many dates. While her address is technically listed as 245 East 73rd Street, the building and its iconic staircase can actually be found in the West Village (please see Carrie Bradshaw's apartment (filming location)).",
      "coordinates": "[-73.95817, 40.76961]"
    },
    {
      "location_name": "Carrie Bradshaw’s apartment (filming location)",
      "character": "Carrie",
      "episode": "Season: 1. Episode: 1 ",
      "description": "The iconic saircase where Carrie was often spotted smoking a cigarette or losing Aidan's dog:  the first three seasons were filmed at 64 Perry Street, but they eventually moved to 66, right next door.",
      "coordinates": "[-74.00376, 40.73535]"
    },
    {
      "location_name": "Louis K. Meisel Gallery",
      "character": "Charlotte",
      "episode": "Season: 1. Episode: 6",
      "description": "Although Charlotte (Kristin Davis) aspires to embody the role of a traditional wife, in the early seasons of Sex and the City, we see her working in the art world, specifically at the Louis K. Meisel Gallery. Founded in 1973, the gallery quickly earned a reputation for its groundbreaking contributions to the photorealist movement, showcasing works by internationally acclaimed artists like Richard Estes and Audrey Flack.",
      "coordinates": "[-74.00052, 40.72568]"
    },
    {
      "location_name": "The Bus Stop",
      "character": "Carrie",
      "episode": "Season: 1. Episode: 6",
      "description": "In the opening of Sex and the City, Carrie is seen walking the streets of New York in a massive tutu, while a bus passes by adorned with a photo of her striking a rather suggestive pose. In the episode \"The Monogamist,\" it’s revealed that this image was part of a photo shoot meant to promote her column. However, as we all know, the outcome was far from ideal.",
      "coordinates": "[-74.00686, 40.73510]"
    },
    {
      "location_name": "St. Patrick’s Cathedral",
      "character": "Carrie",
      "episode": "Season: 1. Episode: 12",
      "description": "Carrie narrates, \"There he was, wearing Armani on Sunday,\" as she watches Mr. Big and his mother exit St. Patrick’s Cathedral after attending mass. Built in 1878 on Fifth Avenue, the cathedral is a stunning example of neo-Gothic architecture, featuring a striking white marble facade, colorful stained-glass windows, and elegant pointed arches. Known for its religious services, it is open to the public, offering both the opportunity to attend services and to admire its interior. As the principal church of the Archdiocese of New York and a true architectural gem, it’s no surprise that John Preston chooses to attend mass there every Sunday.",
      "coordinates": "[-73.97657, 40.75869]"
    },
    {
      "location_name": "Yankee Stadium",
      "character": "Carrie",
      "episode": "Season: 2. Episode: 1",
      "description": "After her breakup with Big, Carrie is heartbroken, so her friends attempt to lift her spirits by taking her to a baseball game at Yankee Stadium in the Bronx. Not only do they succeed in cheering her up, but the women also manage to convince Carrie to flirt with an attractive player, hoping he’ll help take her mind off her troubles.",
      "coordinates": "[-73.92764, 40.82925]"
    },
    {
      "location_name": "The Plaza Hotel",
      "character": "Carrie",
      "episode": "Season: 2. Episode: 18",
      "description": "The love story between Mr. Big and Carrie appears to be timeless, but everything seems to come to a halt when Carrie spots him near The Plaza Hotel, leaving his engagement party with Natasha (Bridget Moynahan). In a moment reminiscent of the final scene in The Way We Were, Carrie bids farewell to her great love, saying \"until we meet again,\" marking a poignant and triumphant exit from their relationship.",
      "coordinates": "[-73.97388, 40.76445]"
    },
    {
      "location_name": "Staten Island Ferry",
      "character": "Charlotte",
      "episode": "Season: 3. Episode: 1",
      "description": "At the start of the third season, Carrie and her friends take the Staten Island Ferry to attend the FDNY fireman competition, where Carrie is serving as a judge. There, she meets politician Bill Kelley (John Slattery), with whom she will later have a brief romance. Meanwhile, Samantha is busy trying to charm a firefighter. Just another typical night in Sex and the City. Today, the ferry connecting Manhattan and Staten Island is free and operates 24 hours a day, seven days a week. During the journey, passengers can enjoy breathtaking views of the city, including distant lights, a majestic bridge, and the Statue of Liberty.",
      "coordinates": "[-74.01305, 40.70093]"
    },
    {
      "location_name": "Magnolia Bakery",
      "character": "Miranda",
      "episode": "Season: 3. Episode: 5",
      "description": "The brief scene featuring Miranda (Cynthia Nixon) and Carrie enjoying cupcakes from Magnolia Bakery takes place at a small local shop that has since expanded to over 20 locations worldwide. If you want to visit the original bakery and indulge in its famous treats, you'll need to head to Bleecker Street, a central thoroughfare connecting Greenwich Village and the East Village.",
      "coordinates": "[-74.00498, 40.73589]"
    },
    {
      "location_name": "Grace Episcopal Church",
      "character": "Charlotte",
      "episode": "Season: 3. Episode: 12",
      "description": "When Charlotte marries Trey (Kyle MacLachlan) for the first time, believing him to be her Prince Charming, the wedding takes place at Grace Episcopal Church. Situated at the intersection of Broadway and 10th Street, this church is renowned for its Gothic-style architecture, complete with pointed arches and intricate details typical of the era. Thanks to its prime location in the heart of Manhattan, Grace Episcopal Church has also made appearances in other productions, including Spider-Man 3.",
      "coordinates": "[-73.99097, 40.73201]"
    },
    {
      "location_name": "The Central Park Loeb Boathouse",
      "character": "Carrie",
      "episode": "Season: 3 Episode: 18",
      "description": "Whether you’re a fan of Mr. Big (Chris Noth) or not, it’s hard to deny that he provided some of the best moments of the series. One of the funniest happens after one of their many breakups, when they meet for lunch at the Central Park boathouse. As he leans in to kiss her, Carrie backs away, and they both tumble into the lake. If you ever find yourself in the area and prefer to avoid taking a dip fully clothed, you can always rent a boat and enjoy the waters the traditional way. Nearby, you’ll also find the Loeb Boathouse Central Park, a restaurant with a terrace that offers a perfect spot for a meal with a view.",
      "coordinates": "[-73.96879, 40.77534]"
    },
    {
      "location_name": "Soho House New York",
      "character": "Samantha",
      "episode": "Season: 6. Episode 10",
      "description": "Soho House is the one club in New York that manages to resist Samantha’s ability to infiltrate any fashionable circle. Located in the Meatpacking District, the exclusive rooftop pool is famous for its strict membership policy. Undeterred, Samantha manages to sneak in using another client’s pass and invites the rest of the group to enjoy the venue's sophisticated atmosphere. However, their enjoyment is short-lived, as they are eventually kicked out when the ruse is discovered.",
      "coordinates": "[-74.00588, 40.74062]"
    },
    {
      "location_name": "Jefferson Market Garden",
      "character": "Miranda",
      "episode": "Season: 6. Episode: 14",
      "description": "Miranda was determined that the place where she would say \"I do\" to Steve had to meet one essential requirement: \"I just want it to feel like us—not one of those millions of cookie-cutter weddings.\" When she accidentally discovers the Jefferson Market Garden, she immediately knows it’s the right spot. This small park, located next to the West Village Library, which has been voted one of the ten most beautiful buildings in America, is known for its peaceful and intimate atmosphere. Today, the venue is available for weddings and other celebrations, offering those who want a \"Miranda\" touch the perfect setting for their special event.",
      "coordinates": "[-73.99953, 40.73445]"
    },
    {
      "location_name": "New York Public Library",
      "character": "Carrie",
      "episode": "SATC: The Movie",
      "description": "If, like many fans, you'd prefer to hold on to the good memories of the series rather than the disappointments of the films, there's one location you can't overlook in the first 2008 feature film: the magnificent New York Public Library, where Carrie plans to celebrate her wedding—which, as we know, never happens. Much of the film centers around the event, including the Vogue photo shoot where Carrie poses in stunning dresses by Vera Wang, Carolina Herrera, Christian Lacroix, Lanvin, Dior, Oscar de la Renta, and Vivienne Westwood. It’s also where Carrie confronts Big on the street on her big day, bouquet in hand. Despite the plot twists, the library still evokes a longing to visit and breathe in the scent of old books.",
      "coordinates": "[-73.98209, 40.75335]"
    }
]
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
        .setLngLat(location.coordinates) // Longitude, Latitude
        .setPopup(popup) // Attach popup
        .addTo(map);
});
