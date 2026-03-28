const continentOrder = [
  "North America",
  "South America",
  "Europe",
  "Middle East",
  "Africa",
  "Asia",
  "Oceania",
];

const zoneWheel = ["North", "NE", "East", "SE", "South", "SW", "West", "NW"];
const horseshoeWheel = ["West", "SW", "South", "SE", "East", "NE"];
const cardinalZones = ["North", "East", "South", "West"];

const rawVenues = [
  {
    id: "sofi-stadium",
    name: "SoFi Stadium",
    emoji: "🏈",
    continent: "North America",
    country: "United States",
    countryCode: "US",
    region: "California",
    city: "Inglewood",
    neighborhood: "Hollywood Park",
    lat: 33.9535,
    lng: -118.3392,
    type: "rectangle",
    capacity: 70000,
    opened: 2020,
    roofType: "Fixed",
    primaryUse: "NFL, Concerts",
    surfaceDimensions: "120yd x 53.3yd field",
    concourseNotes:
      "Open-air canopy edges and broad wraparound concourses make circulation feel less compressed than most NFL bowls.",
    accessibilityNotes:
      "Step-free entries at every major gate with elevators serving suites, clubs, and upper levels.",
    generalTips: [
      "Use the south entries for the fastest path from rideshare zones.",
      "The east sideline gets the cleanest full-field angle for football.",
      "Upper west stays visually balanced for end-stage concerts.",
    ],
    heroNote: "A giant indoor-outdoor bowl with crisp sightlines and big-stage concert flexibility.",
    sectionStyle: "Section",
    featured: true,
  },
  {
    id: "madison-square-garden",
    name: "Madison Square Garden",
    emoji: "🏀",
    continent: "North America",
    country: "United States",
    countryCode: "US",
    region: "New York",
    city: "New York",
    neighborhood: "Midtown Manhattan",
    lat: 40.7505,
    lng: -73.9934,
    type: "arena",
    capacity: 19812,
    opened: 1968,
    roofType: "Fixed",
    primaryUse: "NBA, NHL, Concerts",
    surfaceDimensions: "200ft x 85ft arena floor",
    concourseNotes:
      "Compact stacked concourses with premium clubs concentrated on the lower bowl and west side.",
    accessibilityNotes:
      "Elevator banks connect all public levels and companion positions are distributed around the arena.",
    generalTips: [
      "Chase Bridge seats win on tactics if you value the full-court picture.",
      "Floor access queues spike late, so arrive earlier for concerts.",
      "Penn Station exits on the lower concourse are the quickest post-show route.",
    ],
    heroNote: "Dense, vertical, and iconic. The room is built for atmosphere before comfort.",
    sectionStyle: "Section",
    featured: true,
  },
  {
    id: "red-rocks-amphitheatre",
    name: "Red Rocks Amphitheatre",
    emoji: "🎵",
    continent: "North America",
    country: "United States",
    countryCode: "US",
    region: "Colorado",
    city: "Morrison",
    neighborhood: "Red Rocks Park",
    lat: 39.6654,
    lng: -105.2057,
    type: "amphitheater",
    capacity: 9525,
    opened: 1941,
    roofType: "Open",
    primaryUse: "Concerts",
    surfaceDimensions: "Natural amphitheatre stage",
    concourseNotes:
      "Split-level paths connect the upper trading post, lower plaza, and terraces carved into the rock.",
    accessibilityNotes:
      "Accessible seating exists at multiple elevations, though grade changes make route choice important.",
    generalTips: [
      "Rows 25-40 balance sound, skyline, and comfort best.",
      "Upper north parking cuts the steepest stairs out of the arrival.",
      "Wind picks up fast after sunset, especially on the higher terraces.",
    ],
    heroNote: "A natural bowl where the best seats are about sound and skyline, not just proximity.",
    sectionStyle: "Terrace",
    featured: true,
  },
  {
    id: "estadio-azteca",
    name: "Estadio Azteca",
    emoji: "⚽",
    continent: "North America",
    country: "Mexico",
    countryCode: "MX",
    region: "Mexico City",
    city: "Mexico City",
    neighborhood: "Coyoacan",
    lat: 19.3029,
    lng: -99.1505,
    type: "horseshoe",
    capacity: 83000,
    opened: 1966,
    roofType: "Open",
    primaryUse: "Football, Concerts",
    surfaceDimensions: "105m x 68m pitch",
    concourseNotes:
      "A huge layered bowl with strong north-south flow and long internal walks between entries and seats.",
    accessibilityNotes:
      "Accessible bays are available, though upper-rim navigation is slower on busy derby days.",
    generalTips: [
      "Mid-height sideline sections give the classic panoramic World Cup angle.",
      "Plan extra time for entry queues at the south gates.",
      "Upper rows trade intimacy for airflow in warmer matches.",
    ],
    heroNote: "One of football's great amphitheatres, monumental in scale and sound.",
    sectionStyle: "Section",
  },
  {
    id: "bmo-stadium",
    name: "BMO Stadium",
    emoji: "⚽",
    continent: "North America",
    country: "United States",
    countryCode: "US",
    region: "California",
    city: "Los Angeles",
    neighborhood: "Exposition Park",
    lat: 34.0138,
    lng: -118.287,
    type: "rectangle",
    capacity: 22000,
    opened: 2018,
    roofType: "Open",
    primaryUse: "MLS, Concerts",
    surfaceDimensions: "105m x 68m pitch",
    concourseNotes:
      "Tight football-first concourses with quick field access and strong supporter-end circulation.",
    accessibilityNotes:
      "Ground-level entries and integrated ADA platforms keep transitions short.",
    generalTips: [
      "West sideline holds the cleanest tactical sightline.",
      "Supporters' end is unmatched for atmosphere but not for seat comfort.",
      "Golden hour can hit the east side directly at early kickoffs.",
    ],
    heroNote: "Compact, loud, and purpose-built for a steep football bowl.",
    sectionStyle: "Section",
  },
  {
    id: "allegiant-stadium",
    name: "Allegiant Stadium",
    emoji: "🏈",
    continent: "North America",
    country: "United States",
    countryCode: "US",
    region: "Nevada",
    city: "Las Vegas",
    neighborhood: "Paradise",
    lat: 36.0908,
    lng: -115.1836,
    type: "rectangle",
    capacity: 65000,
    opened: 2020,
    roofType: "Fixed",
    primaryUse: "NFL, Concerts, Soccer",
    surfaceDimensions: "120yd x 53.3yd field",
    concourseNotes:
      "Broad black-glass concourses and wide vertical circulation cores keep large event flows moving well by modern NFL standards.",
    accessibilityNotes:
      "Step-free entry, elevator access across all public levels, and distributed companion seating make the building straightforward to navigate.",
    generalTips: [
      "West sideline sections give the cleanest football read.",
      "Concert end-stage setups usually reward a little elevation over pure floor proximity.",
      "Use the north side if you want the quickest walk from the main pedestrian bridge.",
    ],
    heroNote: "A sleek indoor Las Vegas bowl built for broadcast scale and premium event flow.",
    sectionStyle: "Section",
    featured: true,
  },
  {
    id: "mercedes-benz-stadium",
    name: "Mercedes-Benz Stadium",
    emoji: "🏈",
    continent: "North America",
    country: "United States",
    countryCode: "US",
    region: "Georgia",
    city: "Atlanta",
    neighborhood: "Downtown",
    lat: 33.7554,
    lng: -84.4009,
    type: "rectangle",
    capacity: 75000,
    opened: 2017,
    roofType: "Retractable",
    primaryUse: "NFL, MLS, Concerts",
    surfaceDimensions: "120yd x 53.3yd field",
    concourseNotes:
      "A ring-based layout with strong vertical circulation and major club spaces concentrated around the lower and middle bowl.",
    accessibilityNotes:
      "Modern accessible seating distribution, large elevators, and broad concourses reduce pinch points on full houses.",
    generalTips: [
      "Mid-tier lateral sections are the safest all-round buy for football and soccer.",
      "Upper corners stay strong because of the steep rake and clear roofline.",
      "If the roof is closed, upper rows become much more forgiving acoustically for concerts.",
    ],
    heroNote: "A steep modern megabowl where roof position and sideline elevation matter more than raw closeness.",
    sectionStyle: "Section",
  },
  {
    id: "dodger-stadium",
    name: "Dodger Stadium",
    emoji: "⚾",
    continent: "North America",
    country: "United States",
    countryCode: "US",
    region: "California",
    city: "Los Angeles",
    neighborhood: "Elysian Park",
    lat: 34.0739,
    lng: -118.24,
    type: "oval",
    capacity: 56000,
    opened: 1962,
    roofType: "Open",
    primaryUse: "Baseball, Concerts",
    surfaceDimensions: "330ft x 395ft x 330ft baseball field",
    concourseNotes:
      "Terraced entry levels aligned with parking grades make access simpler than many older ballparks despite the building's scale.",
    accessibilityNotes:
      "Accessible seating is available throughout the seating bowl, with elevators connecting the major public decks.",
    generalTips: [
      "Loge and reserve behind home plate are the best tactical baseball buy.",
      "Pavilion ends are great for atmosphere but not for reading the full field.",
      "Arrive early if you are driving; internal vehicle circulation is part of the Dodger Stadium experience.",
    ],
    heroNote: "An enormous hillside ballpark where deck choice matters more than sheer proximity to the field.",
    sectionStyle: "Section",
  },
  {
    id: "lambeau-field",
    name: "Lambeau Field",
    emoji: "🏈",
    continent: "North America",
    country: "United States",
    countryCode: "US",
    region: "Wisconsin",
    city: "Green Bay",
    neighborhood: "Ashwaubenon",
    lat: 44.5013,
    lng: -88.0622,
    type: "rectangle",
    capacity: 72515,
    opened: 1957,
    roofType: "Open",
    primaryUse: "NFL, College Football, Concerts",
    surfaceDimensions: "120yd x 53.3yd field",
    concourseNotes:
      "Historic exterior character wraps around more modern internal circulation, especially on the atrium side of the stadium.",
    accessibilityNotes:
      "Accessible seating and elevators are strongest in the redeveloped club and atrium-connected areas.",
    generalTips: [
      "Mid-height sideline sections remain the classic Lambeau buy.",
      "The bowl is open to the weather, so upper rows need extra planning in winter.",
      "Atrium-side entries are the easiest for pregame amenities and museum access.",
    ],
    heroNote: "Historic NFL theatre with modernized concourses and a classic open-air bowl feel.",
    sectionStyle: "Section",
  },
  {
    id: "beaver-stadium",
    name: "Beaver Stadium",
    emoji: "🏈",
    continent: "North America",
    country: "United States",
    countryCode: "US",
    region: "Pennsylvania",
    city: "University Park",
    neighborhood: "Penn State Campus",
    lat: 40.8122,
    lng: -77.8562,
    type: "oval",
    capacity: 106572,
    opened: 1960,
    roofType: "Open",
    primaryUse: "College Football",
    surfaceDimensions: "120yd x 53.3yd field",
    concourseNotes:
      "An enormous college bowl with long walks, older circulation zones, and huge crowd surges on marquee nights.",
    accessibilityNotes:
      "Accessible seating is available, though the stadium's scale makes gate selection and route planning especially important.",
    generalTips: [
      "Mid-level sideline seats are the safest high-volume purchase in the building.",
      "Upper end sections are about atmosphere first, tactical angle second.",
      "White Out nights reward elevation because the full bowl spectacle is part of the value.",
    ],
    heroNote: "Massive college-football scale where the atmosphere of the whole bowl is part of the seat value.",
    sectionStyle: "Section",
  },
  {
    id: "att-stadium",
    name: "AT&T Stadium",
    emoji: "🏈",
    continent: "North America",
    country: "United States",
    countryCode: "US",
    region: "Texas",
    city: "Arlington",
    neighborhood: "Entertainment District",
    lat: 32.7473,
    lng: -97.0945,
    type: "rectangle",
    capacity: 80000,
    opened: 2009,
    roofType: "Fixed",
    primaryUse: "NFL, Concerts, Boxing",
    surfaceDimensions: "120yd x 53.3yd field",
    concourseNotes:
      "Monumental interior circulation, wide clubs, and major end-zone approaches make it feel more like an event campus than a standard bowl.",
    accessibilityNotes:
      "Large elevators, distributed accessible platforms, and broad concourses keep movement manageable despite the building's size.",
    generalTips: [
      "Mid-level sideline sections balance the screen, field, and room scale best.",
      "The building is huge, so allow extra time for internal walks after security.",
      "Concerts usually play better with some elevation than pure floor proximity because of the venue's depth.",
    ],
    heroNote: "A giant Texas event machine where scale, screens, and elevation define the seat experience.",
    sectionStyle: "Section",
  },
  {
    id: "lumen-field",
    name: "Lumen Field",
    emoji: "⚽",
    continent: "North America",
    country: "United States",
    countryCode: "US",
    region: "Washington",
    city: "Seattle",
    neighborhood: "Pioneer Square",
    lat: 47.5952,
    lng: -122.3316,
    type: "rectangle",
    capacity: 68000,
    opened: 2002,
    roofType: "Partially Covered",
    primaryUse: "NFL, MLS, Concerts",
    surfaceDimensions: "120yd x 53.3yd field",
    concourseNotes:
      "Strong vertical circulation and open concourse edges help the stadium handle big football and soccer crowds efficiently.",
    accessibilityNotes:
      "The venue includes substantial accessible seating distribution and wide route options across the bowl.",
    generalTips: [
      "Lower and middle sideline sections are the cleanest tactical football and soccer purchase.",
      "The roofline traps crowd noise, so upper rows still feel very live.",
      "If rain is around, covered rows are worth prioritising because Seattle weather can drift in sideways.",
    ],
    heroNote: "A loud Seattle rectangle where the roofline and rake make even higher rows feel connected.",
    sectionStyle: "Section",
  },
  {
    id: "wrigley-field",
    name: "Wrigley Field",
    emoji: "⚾",
    continent: "North America",
    country: "United States",
    countryCode: "US",
    region: "Illinois",
    city: "Chicago",
    neighborhood: "Wrigleyville",
    lat: 41.9484,
    lng: -87.6553,
    type: "oval",
    capacity: 41649,
    opened: 1914,
    roofType: "Open",
    primaryUse: "Baseball, Concerts",
    surfaceDimensions: "355ft x 400ft x 353ft baseball field",
    concourseNotes:
      "A dense historic ballpark with tighter horizontal circulation than newer stadiums, but strong wayfinding once you settle into your deck.",
    accessibilityNotes:
      "Accessible seating exists throughout the park, though the age of the building means route planning matters more than at newer parks.",
    generalTips: [
      "Infield seats with a little height are the safest all-round baseball buy.",
      "Bleachers are atmosphere-first and angle-second.",
      "Historic charm comes with tighter legroom and busier concourses than modern parks.",
    ],
    heroNote: "Historic baseball character at full volume, where section choice is a tradeoff between charm, angle, and comfort.",
    sectionStyle: "Section",
  },
  {
    id: "fenway-park",
    name: "Fenway Park",
    emoji: "⚾",
    continent: "North America",
    country: "United States",
    countryCode: "US",
    region: "Massachusetts",
    city: "Boston",
    neighborhood: "Fenway",
    lat: 42.3467,
    lng: -71.0972,
    type: "oval",
    capacity: 37755,
    opened: 1912,
    roofType: "Open",
    primaryUse: "Baseball, Concerts, Hockey",
    surfaceDimensions: "310ft x 420ft x 302ft baseball field",
    concourseNotes:
      "An iconic compact park with layered seating decks and older concourses that reward arriving early and knowing your route.",
    accessibilityNotes:
      "Fenway provides accessible seating and guest services support, but the historic bowl still requires more deliberate planning than newer parks.",
    generalTips: [
      "A little height behind home plate or on the first-base side is the safest view buy.",
      "Grandstand and heritage seats can have tighter comfort and occasional support-view tradeoffs.",
      "The atmosphere is strongest when you lean into the old-park quirks instead of fighting them.",
    ],
    heroNote: "Historic intimacy, asymmetry, and quirks: Fenway rewards buyers who choose for angle, not just icon status.",
    sectionStyle: "Section",
  },
  {
    id: "capital-one-arena",
    name: "Capital One Arena",
    emoji: "🏒",
    continent: "North America",
    country: "United States",
    countryCode: "US",
    region: "District of Columbia",
    city: "Washington",
    neighborhood: "Penn Quarter",
    lat: 38.8981,
    lng: -77.0209,
    type: "arena",
    capacity: 20000,
    opened: 1997,
    roofType: "Fixed",
    primaryUse: "NBA, NHL, Concerts",
    surfaceDimensions: "200ft x 85ft arena floor",
    concourseNotes:
      "A busy downtown arena with straightforward bowl circulation and direct transit-oriented access from every side of the district.",
    accessibilityNotes:
      "Elevators, companion seating, and central city access make this one of the easier urban arenas to manage.",
    generalTips: [
      "Lower center is the cleanest all-purpose buy for basketball, hockey, and concerts.",
      "Mid and upper sideline sections still read the game well because the room is compact.",
      "Use Metro if you want the simplest arrival and exit flow.",
    ],
    heroNote: "A compact D.C. arena where downtown access and clean lower-bowl geometry do most of the work.",
    sectionStyle: "Section",
    sourceRefs: [
      "https://monumentalsports.com/venues/capital-one-arena/",
      "https://washington.org/find-dc-listings/capital-one-arena",
    ],
  },
  {
    id: "caesars-superdome",
    name: "Caesars Superdome",
    emoji: "🏈",
    continent: "North America",
    country: "United States",
    countryCode: "US",
    region: "Louisiana",
    city: "New Orleans",
    neighborhood: "Central Business District",
    lat: 29.9511,
    lng: -90.0812,
    type: "oval",
    capacity: 74295,
    opened: 1975,
    roofType: "Fixed",
    primaryUse: "NFL, College Football, Concerts",
    surfaceDimensions: "120yd x 53.3yd field",
    concourseNotes:
      "Massive circular concourses and broad plaza entries help the building absorb large football and concert crowds despite its age.",
    accessibilityNotes:
      "ADA services, elevators, and guest-relations support are well established, but the sheer scale of the bowl still makes gate planning valuable.",
    generalTips: [
      "Lower and middle lateral sections are the best all-round football purchase.",
      "The building's dome acoustics reward a little elevation for concerts.",
      "Because the venue is huge, entry gate choice saves more time than seat-level choice.",
    ],
    heroNote: "An iconic domed bowl where event scale, acoustics, and internal walking distance shape the seat experience.",
    sectionStyle: "Section",
    sourceRefs: [
      "https://www.caesarssuperdome.com/assets/doc/CaesarsSuperdome-FacilitiesGuide-ba2603ef46.pdf",
      "https://www.caesarssuperdome.com/assets/doc/Dome-SalesKit-750cf9dede.pdf",
    ],
  },
  {
    id: "united-center",
    name: "United Center",
    emoji: "🏀",
    continent: "North America",
    country: "United States",
    countryCode: "US",
    region: "Illinois",
    city: "Chicago",
    neighborhood: "Near West Side",
    lat: 41.8807,
    lng: -87.6742,
    type: "arena",
    capacity: 20917,
    opened: 1994,
    roofType: "Fixed",
    primaryUse: "NBA, NHL, Concerts",
    surfaceDimensions: "200ft x 85ft arena floor",
    concourseNotes:
      "A very large arena footprint with spacious internal circulation and the atrium acting as a major arrival anchor on event nights.",
    accessibilityNotes:
      "The building has extensive guest-services infrastructure and established accessible seating options, with easier movement than older urban arenas.",
    generalTips: [
      "Club and lower sideline seats are the cleanest buy for Bulls and Blackhawks games.",
      "Upper sidelines still read the room well because the bowl is broad rather than unusually steep.",
      "Use the atrium side if you want the easiest pregame orientation and entry flow.",
    ],
    heroNote: "A big-room Chicago arena where sideline position and deck choice matter more than pure row number.",
    sectionStyle: "Section",
    sourceRefs: [
      "https://www.unitedcenter.com/venue/introduction-history/",
      "https://www.unitedcenter.com/2024-25-Season-Preview/",
    ],
  },
  {
    id: "maracana",
    name: "Maracana",
    emoji: "⚽",
    continent: "South America",
    country: "Brazil",
    countryCode: "BR",
    region: "Rio de Janeiro",
    city: "Rio de Janeiro",
    neighborhood: "Maracana",
    lat: -22.9122,
    lng: -43.2302,
    type: "oval",
    capacity: 78838,
    opened: 1950,
    roofType: "Partially Covered",
    primaryUse: "Football, Concerts",
    surfaceDimensions: "105m x 68m pitch",
    concourseNotes:
      "A sweeping bowl with ring concourses and major circulation nodes concentrated behind the long sides.",
    accessibilityNotes:
      "Wheelchair access is strongest on the lower ring with lift connections to upper levels.",
    generalTips: [
      "Mid-tier east and west sections give the fullest stadium read.",
      "Aim for covered rows during wet-season fixtures.",
      "Gate allocation matters; check your section before arriving.",
    ],
    heroNote: "A vast modernized classic where perspective matters as much as proximity.",
    sectionStyle: "Setor",
    featured: true,
  },
  {
    id: "estadio-monumental",
    name: "Estadio Monumental",
    emoji: "⚽",
    continent: "South America",
    country: "Argentina",
    countryCode: "AR",
    region: "Buenos Aires",
    city: "Buenos Aires",
    neighborhood: "Nunez",
    lat: -34.5453,
    lng: -58.4497,
    type: "oval",
    capacity: 84567,
    opened: 1938,
    roofType: "Open",
    primaryUse: "Football, Concerts",
    surfaceDimensions: "105m x 70m pitch",
    concourseNotes:
      "Reworked lower circulation and hospitality zones sit beneath a massive steep upper bowl.",
    accessibilityNotes:
      "Accessible seating clusters near modernized lower entries and lift cores.",
    generalTips: [
      "High midfield sectors capture the full geometry of the renovated bowl.",
      "Lower end sections are all energy and very little personal space.",
      "Entry flows smooth out fastest through the west perimeter.",
    ],
    heroNote: "Immense football scale with a newly sharpened lower-bowl experience.",
    sectionStyle: "Platea",
  },
  {
    id: "wembley-stadium",
    name: "Wembley Stadium",
    emoji: "🏟️",
    continent: "Europe",
    country: "United Kingdom",
    countryCode: "GB",
    region: "England",
    city: "London",
    neighborhood: "Wembley Park",
    lat: 51.556,
    lng: -0.2796,
    type: "rectangle",
    capacity: 90000,
    opened: 2007,
    roofType: "Retractable",
    primaryUse: "Football, Concerts, NFL",
    surfaceDimensions: "105m x 68m pitch",
    concourseNotes:
      "Three-tier circulation with broad upper concourses and efficient vertical cores at each quadrant.",
    accessibilityNotes:
      "Excellent accessible provision with lifts, sensory spaces, and distributed wheelchair positions.",
    generalTips: [
      "Middle-tier sideline seats are the safest all-round buy.",
      "Upper west is underrated for concert sound and sightlines.",
      "Leave through Olympic Way only if you do not mind the slow exit.",
    ],
    heroNote: "A giant multi-event bowl that rewards mid-tier sideline positioning.",
    sectionStyle: "Block",
    featured: true,
  },
  {
    id: "santiago-bernabeu",
    name: "Santiago Bernabeu",
    emoji: "⚽",
    continent: "Europe",
    country: "Spain",
    countryCode: "ES",
    region: "Community of Madrid",
    city: "Madrid",
    neighborhood: "Chamartin",
    lat: 40.4531,
    lng: -3.6883,
    type: "rectangle",
    capacity: 81044,
    opened: 1947,
    roofType: "Retractable",
    primaryUse: "Football, Concerts",
    surfaceDimensions: "105m x 68m pitch",
    concourseNotes:
      "Vertical circulation is intense because of the bowl height, but new hospitality zones calm the lower and middle tiers.",
    accessibilityNotes:
      "Lift-served premium and accessible positions are strongest on the east and west sides.",
    generalTips: [
      "Middle-ring sideline seats are the sweet spot for football.",
      "High upper corners feel very steep but visually dramatic.",
      "Covered rows eliminate nearly all weather risk.",
    ],
    heroNote: "Steep, vertical, and polished after renovation, with elite central sightlines.",
    sectionStyle: "Section",
  },
  {
    id: "allianz-arena",
    name: "Allianz Arena",
    emoji: "⚽",
    continent: "Europe",
    country: "Germany",
    countryCode: "DE",
    region: "Bavaria",
    city: "Munich",
    neighborhood: "Frottmaning",
    lat: 48.2188,
    lng: 11.6247,
    type: "rectangle",
    capacity: 75024,
    opened: 2005,
    roofType: "Fixed",
    primaryUse: "Football, Concerts",
    surfaceDimensions: "105m x 68m pitch",
    concourseNotes:
      "Clear radial circulation and broad vomitories make wayfinding easier than most major football grounds.",
    accessibilityNotes:
      "Step-free access is strong, especially through the west-side entries and premium cores.",
    generalTips: [
      "West lower sections are premium for football sightlines.",
      "Upper north and south stay loud but more exposed to movement.",
      "Transit arrival through Frottmaning beats driving on big matchdays.",
    ],
    heroNote: "One of the cleanest modern football bowls for sightlines and circulation.",
    sectionStyle: "Block",
  },
  {
    id: "san-siro",
    name: "San Siro",
    emoji: "⚽",
    continent: "Europe",
    country: "Italy",
    countryCode: "IT",
    region: "Lombardy",
    city: "Milan",
    neighborhood: "San Siro",
    lat: 45.4781,
    lng: 9.124,
    type: "rectangle",
    capacity: 75817,
    opened: 1926,
    roofType: "Partially Covered",
    primaryUse: "Football, Concerts",
    surfaceDimensions: "105m x 68m pitch",
    concourseNotes:
      "The monumental tower access creates memorable arrivals but also longer ramp transitions into the bowl.",
    accessibilityNotes:
      "Accessible routes exist, but older infrastructure makes precise gate planning more important.",
    generalTips: [
      "Middle lateral sectors remain the best buy in the building.",
      "Upper corners are dramatic but distant.",
      "Choose covered rows if rain is even a remote possibility.",
    ],
    heroNote: "Monumental old-school drama with steep vertical access and elite acoustics on derby nights.",
    sectionStyle: "Sector",
  },
  {
    id: "stade-de-france",
    name: "Stade de France",
    emoji: "🏉",
    continent: "Europe",
    country: "France",
    countryCode: "FR",
    region: "Ile-de-France",
    city: "Saint-Denis",
    neighborhood: "Plaine Saint-Denis",
    lat: 48.9245,
    lng: 2.3602,
    type: "oval",
    capacity: 81338,
    opened: 1998,
    roofType: "Partially Covered",
    primaryUse: "Football, Rugby, Concerts",
    surfaceDimensions: "105m x 68m pitch",
    concourseNotes:
      "Wide circular concourses handle crowd splits well, though some upper transitions are long.",
    accessibilityNotes:
      "Solid lift coverage and distributed accessible seating across multiple levels.",
    generalTips: [
      "Lower lateral sectors work for rugby and football alike.",
      "Upper ends are good value but the furthest from amenities.",
      "Train exits thin out fastest on the north side post-event.",
    ],
    heroNote: "A huge national bowl that balances scale with reliable circulation.",
    sectionStyle: "Block",
  },
  {
    id: "lusail-stadium",
    name: "Lusail Stadium",
    emoji: "⚽",
    continent: "Middle East",
    country: "Qatar",
    countryCode: "QA",
    region: "Al Daayen",
    city: "Lusail",
    neighborhood: "Lusail City",
    lat: 25.4209,
    lng: 51.49,
    type: "rectangle",
    capacity: 88966,
    opened: 2022,
    roofType: "Fixed",
    primaryUse: "Football, Concerts",
    surfaceDimensions: "105m x 68m pitch",
    concourseNotes:
      "High-volume modern concourses and shaded circulation routes keep movement comfortable even at scale.",
    accessibilityNotes:
      "Contemporary ADA-style provision with lifts, step-free entries, and distributed accessible bays.",
    generalTips: [
      "Middle-tier sideline sectors are premium for football.",
      "Climate control makes upper sections more forgiving than most open bowls.",
      "Metro arrival is the simplest event-day access pattern.",
    ],
    heroNote: "A climate-buffered mega-bowl designed for major tournament flow.",
    sectionStyle: "Section",
  },
  {
    id: "kingdom-arena",
    name: "Kingdom Arena",
    emoji: "🥊",
    continent: "Middle East",
    country: "Saudi Arabia",
    countryCode: "SA",
    region: "Riyadh Province",
    city: "Riyadh",
    neighborhood: "Boulevard City",
    lat: 24.7688,
    lng: 46.6051,
    type: "arena",
    capacity: 27000,
    opened: 2023,
    roofType: "Fixed",
    primaryUse: "Boxing, Esports, Concerts",
    surfaceDimensions: "Multipurpose arena floor",
    concourseNotes:
      "New-build concourses lean heavily into premium hospitality on the lower ring and club bridge.",
    accessibilityNotes:
      "Step-free throughout with modern accessible seating distribution.",
    generalTips: [
      "Lower center gives the cleanest ring and stage view.",
      "Club level is the easiest in-and-out route if you value comfort.",
      "Upper corners are solid value for large-scale events.",
    ],
    heroNote: "A premium-heavy event arena built for broadcast spectacle.",
    sectionStyle: "Section",
  },
  {
    id: "fnb-stadium",
    name: "FNB Stadium",
    emoji: "⚽",
    continent: "Africa",
    country: "South Africa",
    countryCode: "ZA",
    region: "Gauteng",
    city: "Johannesburg",
    neighborhood: "Nasrec",
    lat: -26.2347,
    lng: 27.9826,
    type: "oval",
    capacity: 94736,
    opened: 1989,
    roofType: "Open",
    primaryUse: "Football, Concerts",
    surfaceDimensions: "105m x 68m pitch",
    concourseNotes:
      "Massive outer concourses handle crowds well, but internal walks can still be long due to the bowl diameter.",
    accessibilityNotes:
      "Accessible sections are available on the lower and middle bands with lift support.",
    generalTips: [
      "Mid-height west and east sectors are the best all-round football purchase.",
      "Upper end seats win on value, not intimacy.",
      "Arrive early if you are using the main southern arrival spine.",
    ],
    heroNote: "A giant calabash-shaped bowl that thrives on big-match scale and crowd noise.",
    sectionStyle: "Block",
  },
  {
    id: "cairo-international-stadium",
    name: "Cairo International Stadium",
    emoji: "⚽",
    continent: "Africa",
    country: "Egypt",
    countryCode: "EG",
    region: "Cairo Governorate",
    city: "Cairo",
    neighborhood: "Nasr City",
    lat: 30.069,
    lng: 31.3134,
    type: "oval",
    capacity: 75000,
    opened: 1960,
    roofType: "Open",
    primaryUse: "Football, Athletics, Concerts",
    surfaceDimensions: "105m x 68m pitch",
    concourseNotes:
      "A broad ring stadium with older concourses and clear orientation around the major cardinal stands.",
    accessibilityNotes:
      "Accessibility is strongest on the lower levels and central entry points.",
    generalTips: [
      "Central lateral stands are the best football angle.",
      "Lower end sections sacrifice tactics for atmosphere.",
      "Shade patterns matter in daylight fixtures.",
    ],
    heroNote: "Historic scale, direct atmosphere, and classic national-stadium geometry.",
    sectionStyle: "Stand",
  },
  {
    id: "tokyo-dome",
    name: "Tokyo Dome",
    emoji: "⚾",
    continent: "Asia",
    country: "Japan",
    countryCode: "JP",
    region: "Tokyo",
    city: "Tokyo",
    neighborhood: "Bunkyo",
    lat: 35.7056,
    lng: 139.7519,
    type: "oval",
    capacity: 55000,
    opened: 1988,
    roofType: "Fixed",
    primaryUse: "Baseball, Concerts",
    surfaceDimensions: "122m x 100m dome field",
    concourseNotes:
      "Stacked concourses move quickly, with food clusters strongest on the lower ring.",
    accessibilityNotes:
      "Strong step-free paths and lift access across the main public levels.",
    generalTips: [
      "Lower infield sections are premium for baseball.",
      "Upper outfield stays energetic and value-led.",
      "Concert staging can shift the best side of the dome, so check the map.",
    ],
    heroNote: "An all-weather dome where the best angle changes with the event format.",
    sectionStyle: "Gate",
    featured: true,
  },
  {
    id: "national-stadium-singapore",
    name: "National Stadium",
    emoji: "🏟️",
    continent: "Asia",
    country: "Singapore",
    countryCode: "SG",
    region: "Central Region",
    city: "Singapore",
    neighborhood: "Kallang",
    lat: 1.3049,
    lng: 103.8746,
    type: "oval",
    capacity: 55000,
    opened: 2014,
    roofType: "Retractable",
    primaryUse: "Football, Rugby, Cricket, Concerts",
    surfaceDimensions: "105m x 68m configurable field",
    concourseNotes:
      "Broad indoor concourses and cooling-friendly circulation make long stays far easier than open tropical bowls.",
    accessibilityNotes:
      "Excellent step-free movement, lifts, and distributed accessible seats.",
    generalTips: [
      "Mid sideline sections are the most versatile across event types.",
      "Roof closure makes upper levels viable even in heavy rain.",
      "Kallang MRT arrival is the cleanest way in on sellout nights.",
    ],
    heroNote: "A climate-smart mega-bowl that plays multiple sports without breaking the guest flow.",
    sectionStyle: "Section",
  },
  {
    id: "tokyo-national-stadium",
    name: "Japan National Stadium",
    emoji: "🏃",
    continent: "Asia",
    country: "Japan",
    countryCode: "JP",
    region: "Tokyo",
    city: "Tokyo",
    neighborhood: "Shinjuku",
    lat: 35.6778,
    lng: 139.7147,
    type: "oval",
    capacity: 68089,
    opened: 2019,
    roofType: "Open",
    primaryUse: "Football, Athletics, Concerts",
    surfaceDimensions: "105m x 68m pitch",
    concourseNotes:
      "Timber-lined concourses and generous stairs spread the crowd well around the bowl.",
    accessibilityNotes:
      "Strong accessible routes and companion seating across multiple stands.",
    generalTips: [
      "Lower east and west remain the safest football buys.",
      "Upper rows are more weather exposed than they first appear.",
      "The outer promenade is useful if your gate queues up.",
    ],
    heroNote: "Refined, calm, and spacious. More serene than most national bowls.",
    sectionStyle: "Block",
  },
  {
    id: "optus-stadium",
    name: "Optus Stadium",
    emoji: "🏏",
    continent: "Oceania",
    country: "Australia",
    countryCode: "AU",
    region: "Western Australia",
    city: "Perth",
    neighborhood: "Burswood",
    lat: -31.95,
    lng: 115.89,
    type: "oval",
    capacity: 60000,
    opened: 2018,
    roofType: "Open",
    primaryUse: "AFL, Cricket, Concerts",
    surfaceDimensions: "165m x 130m oval",
    concourseNotes:
      "River-facing concourses, fast digital ticketing, and broad stadium station access keep movement smooth.",
    accessibilityNotes:
      "Step-free routes at every gate with lifts to all public levels and companion seating around the bowl.",
    generalTips: [
      "Gate D is the easiest arrival from the station.",
      "Rows 18-28 on the long sides are the most versatile buy.",
      "The river side catches the best breeze on hot evenings.",
    ],
    heroNote: "A clean contemporary oval built for AFL scale, cricket geometry, and sunset atmosphere.",
    sectionStyle: "Bay",
    featured: true,
  },
  {
    id: "melbourne-cricket-ground",
    name: "Melbourne Cricket Ground",
    emoji: "🏏",
    continent: "Oceania",
    country: "Australia",
    countryCode: "AU",
    region: "Victoria",
    city: "Melbourne",
    neighborhood: "Yarra Park",
    lat: -37.8199,
    lng: 144.9834,
    type: "oval",
    capacity: 100024,
    opened: 1853,
    roofType: "Open",
    primaryUse: "AFL, Cricket, Concerts",
    surfaceDimensions: "171m x 146m oval",
    concourseNotes:
      "Huge ring concourses spread traffic well, though top-tier transitions remain lengthy because of the scale.",
    accessibilityNotes:
      "Good accessible provision across several levels, with lifts concentrated near the major gates.",
    generalTips: [
      "Great Southern and Olympic stands give the strongest all-round angles.",
      "Deep upper tiers are for atmosphere and context rather than intimacy.",
      "Wind and rain can sweep through the top deck quickly.",
    ],
    heroNote: "Scale at its most iconic. Buy for angle and elevation, not just proximity.",
    sectionStyle: "Bay",
    featured: true,
  },
  {
    id: "sydney-cricket-ground",
    name: "Sydney Cricket Ground",
    emoji: "🏏",
    continent: "Oceania",
    country: "Australia",
    countryCode: "AU",
    region: "New South Wales",
    city: "Sydney",
    neighborhood: "Moore Park",
    lat: -33.8917,
    lng: 151.2247,
    type: "oval",
    capacity: 48000,
    opened: 1848,
    roofType: "Partially Covered",
    primaryUse: "Cricket, AFL, Rugby, Concerts",
    surfaceDimensions: "155m x 135m oval",
    concourseNotes:
      "Historic and modern stands mix together, so circulation comfort shifts by side of the ground.",
    accessibilityNotes:
      "Modernized stands provide the easiest lift-served access and companion seating.",
    generalTips: [
      "The Brewongle and Victor Trumper sides are safest for all-event viewing.",
      "Historic stands have character, but not always the easiest amenities flow.",
      "Covered rows are worth targeting in wet weather.",
    ],
    heroNote: "A historic oval where stand choice changes the experience dramatically.",
    sectionStyle: "Bay",
  },
  {
    id: "accor-stadium",
    name: "Accor Stadium",
    emoji: "🏉",
    continent: "Oceania",
    country: "Australia",
    countryCode: "AU",
    region: "New South Wales",
    city: "Sydney",
    neighborhood: "Sydney Olympic Park",
    lat: -33.8479,
    lng: 151.0632,
    type: "oval",
    capacity: 82000,
    opened: 1999,
    roofType: "Partially Covered",
    primaryUse: "Rugby League, Rugby Union, Football, Concerts",
    surfaceDimensions: "105m x 68m pitch",
    concourseNotes:
      "Huge circular concourses and Olympic Park approaches handle event peaks, though the building feels large from every level.",
    accessibilityNotes:
      "Strong accessible distribution with wide ramps and lift access across public levels.",
    generalTips: [
      "Middle and lower lateral bays are the smartest buy for rectangular sports.",
      "Upper ends can feel detached for football.",
      "Station-side approaches clear out quicker after full houses.",
    ],
    heroNote: "A convertible mega-bowl where sideline elevation matters more than raw closeness.",
    sectionStyle: "Bay",
  },
  {
    id: "adelaide-oval",
    name: "Adelaide Oval",
    emoji: "🏏",
    continent: "Oceania",
    country: "Australia",
    countryCode: "AU",
    region: "South Australia",
    city: "Adelaide",
    neighborhood: "North Adelaide",
    lat: -34.9159,
    lng: 138.5961,
    type: "oval",
    capacity: 53500,
    opened: 1871,
    roofType: "Partially Covered",
    primaryUse: "Cricket, AFL, Concerts",
    surfaceDimensions: "167m x 124m oval",
    concourseNotes:
      "A modern wraparound concourse sits behind a mix of heritage scoreboard views and newer premium stands.",
    accessibilityNotes:
      "Step-free routes, lift access, and distributed companion bays make it one of the easier large Australian grounds to manage.",
    generalTips: [
      "The Riverbank and western sides are the safest all-round buy.",
      "Rows with cover are worth targeting on hot or wet days.",
      "A little elevation improves cricket geometry dramatically here.",
    ],
    heroNote: "A polished heritage-modern oval where stand choice changes the balance between atmosphere and angle.",
    sectionStyle: "Bay",
    featured: true,
  },
  {
    id: "suncorp-stadium",
    name: "Suncorp Stadium",
    emoji: "🏉",
    continent: "Oceania",
    country: "Australia",
    countryCode: "AU",
    region: "Queensland",
    city: "Brisbane",
    neighborhood: "Milton",
    lat: -27.4648,
    lng: 153.0107,
    type: "rectangle",
    capacity: 52500,
    opened: 2003,
    roofType: "Partially Covered",
    primaryUse: "Rugby League, Rugby Union, Football, Concerts",
    surfaceDimensions: "105m x 68m pitch",
    concourseNotes:
      "One of Australia's cleanest rectangular stadium plans, with quick lateral movement and reliable amenity access around the bowl.",
    accessibilityNotes:
      "Accessible seating is well distributed and the ramps and lifts are straightforward by major-event standards.",
    generalTips: [
      "Sideline lower and middle sections are premium for rugby and football.",
      "Ends stay loud, especially for State of Origin, but lose tactical width.",
      "Covered rows matter less than in older grounds because the seating bowl is well protected.",
    ],
    heroNote: "Australia's benchmark rectangular bowl: steep, loud, and easy to read from almost everywhere.",
    sectionStyle: "Bay",
    featured: true,
  },
  {
    id: "allianz-stadium-sydney",
    name: "Allianz Stadium",
    emoji: "⚽",
    continent: "Oceania",
    country: "Australia",
    countryCode: "AU",
    region: "New South Wales",
    city: "Sydney",
    neighborhood: "Moore Park",
    lat: -33.8917,
    lng: 151.2253,
    type: "rectangle",
    capacity: 42500,
    opened: 2022,
    roofType: "Partially Covered",
    primaryUse: "Rugby League, Football, Rugby Union, Concerts",
    surfaceDimensions: "105m x 68m pitch",
    concourseNotes:
      "A 360-degree open concourse and steep bowl geometry keep movement fast and the sightlines consistently sharp.",
    accessibilityNotes:
      "New-build accessibility standards deliver strong step-free movement and companion seating across the venue.",
    generalTips: [
      "Middle sideline bays are the safest all-event purchase.",
      "The bowl is steep enough that upper rows still hold detail well.",
      "Use the southern edge of the precinct if you want the smoother post-event exit.",
    ],
    heroNote: "A sharp new Sydney rectangle built around steep rake, open concourse flow, and close-in sightlines.",
    sectionStyle: "Bay",
  },
  {
    id: "commbank-stadium",
    name: "CommBank Stadium",
    emoji: "🏉",
    continent: "Oceania",
    country: "Australia",
    countryCode: "AU",
    region: "New South Wales",
    city: "Sydney",
    neighborhood: "Parramatta",
    lat: -33.8076,
    lng: 151.0024,
    type: "rectangle",
    capacity: 30000,
    opened: 2019,
    roofType: "Partially Covered",
    primaryUse: "Rugby League, Football, Rugby Union, Concerts",
    surfaceDimensions: "105m x 68m pitch",
    concourseNotes:
      "Compact circulation and a steep football-first bowl keep the experience tight and easy to navigate.",
    accessibilityNotes:
      "Modern lifts, clear step-free routes, and distributed accessible seats make movement straightforward.",
    generalTips: [
      "Almost every sideline bay performs well because the stadium is compact.",
      "Supporter-heavy ends add noise quickly, especially for derby fixtures.",
      "A little elevation is still worth it if you want the cleanest tactical read.",
    ],
    heroNote: "A compact Western Sydney rectangle that feels intimate without becoming visually cramped.",
    sectionStyle: "Bay",
  },
  {
    id: "aami-park",
    name: "AAMI Park",
    emoji: "⚽",
    continent: "Oceania",
    country: "Australia",
    countryCode: "AU",
    region: "Victoria",
    city: "Melbourne",
    neighborhood: "Melbourne Sports Precinct",
    lat: -37.83,
    lng: 144.9834,
    type: "rectangle",
    capacity: 30050,
    opened: 2010,
    roofType: "Fixed",
    primaryUse: "Football, Rugby League, Rugby Union, Concerts",
    surfaceDimensions: "105m x 68m pitch",
    concourseNotes:
      "The bubble-roof design keeps circulation compact, with quick transitions from entry gates into the bowl.",
    accessibilityNotes:
      "Step-free entry and clear internal movement make the venue relatively easy to handle even on compressed event nights.",
    generalTips: [
      "Lower and middle sideline bays are the safest purchase in the building.",
      "The roof helps upper rows stay viable in bad weather.",
      "Ends are energetic, but they are not the strongest tactical angle for football.",
    ],
    heroNote: "Melbourne's football-first room: tight, roofed, and easy to read from the sides.",
    sectionStyle: "Bay",
  },
  {
    id: "the-gabba",
    name: "The Gabba",
    emoji: "🏏",
    continent: "Oceania",
    country: "Australia",
    countryCode: "AU",
    region: "Queensland",
    city: "Brisbane",
    neighborhood: "Woolloongabba",
    lat: -27.485,
    lng: 153.0381,
    type: "oval",
    capacity: 42000,
    opened: 1895,
    roofType: "Partially Covered",
    primaryUse: "Cricket, AFL, Concerts",
    surfaceDimensions: "170m x 149m oval",
    concourseNotes:
      "An older but still efficient inner-city oval where circulation quality varies more by stand than at newer grounds.",
    accessibilityNotes:
      "Accessible positions are available across the venue, though planning your gate around stand location still matters.",
    generalTips: [
      "The western and southern sides are the smartest all-round purchase.",
      "Upper rows can catch weather and wind more than they appear to on television.",
      "Pick some elevation for cricket if you want the full field shape.",
    ],
    heroNote: "A classic Brisbane oval where stand selection affects both comfort and match-reading quality.",
    sectionStyle: "Bay",
  },
  {
    id: "gio-stadium-canberra",
    name: "GIO Stadium Canberra",
    emoji: "🏉",
    continent: "Oceania",
    country: "Australia",
    countryCode: "AU",
    region: "Australian Capital Territory",
    city: "Canberra",
    neighborhood: "Bruce",
    lat: -35.2501,
    lng: 149.1011,
    type: "rectangle",
    capacity: 25000,
    opened: 1977,
    roofType: "Partially Covered",
    primaryUse: "Rugby League, Rugby Union, Football, Concerts",
    surfaceDimensions: "105m x 68m pitch",
    concourseNotes:
      "A bushland-surrounded bowl with relatively direct circulation and a simple stand structure that is easy to read once inside.",
    accessibilityNotes:
      "The stadium offers accessible seating and straightforward step-free paths, though gate choice still matters on large event nights.",
    generalTips: [
      "Middle lateral sections are the safest buy for rugby and football.",
      "Wind can move through the bowl more than first-timers expect.",
      "Ends bring plenty of energy when the Raiders crowd is up, but less tactical width.",
    ],
    heroNote: "Canberra's main rectangle stays readable and direct, with clean sidelines and a little extra weather risk.",
    sectionStyle: "Bay",
  },
  {
    id: "ninja-stadium",
    name: "Ninja Stadium",
    emoji: "🏏",
    continent: "Oceania",
    country: "Australia",
    countryCode: "AU",
    region: "Tasmania",
    city: "Hobart",
    neighborhood: "Bellerive",
    lat: -42.8766,
    lng: 147.3719,
    type: "oval",
    capacity: 19500,
    opened: 1914,
    roofType: "Open",
    primaryUse: "Cricket, AFL, Concerts",
    surfaceDimensions: "175m x 133.5m oval",
    concourseNotes:
      "A smaller waterfront ground where movement is simple, the views are strong, and the experience depends heavily on wind and sun.",
    accessibilityNotes:
      "Scale works in its favour, with clearer paths and shorter internal distances than most national venues.",
    generalTips: [
      "A little elevation goes a long way because the ground is compact.",
      "Afternoon breeze off the Derwent can change how exposed upper and hill positions feel.",
      "For cricket, central-side seating gives the best balance of geometry and atmosphere.",
    ],
    heroNote: "A compact Hobart waterfront oval where weather and elevation shape the experience as much as the event itself.",
    sectionStyle: "Bay",
  },
  {
    id: "tio-stadium",
    name: "TIO Stadium",
    emoji: "🏏",
    continent: "Oceania",
    country: "Australia",
    countryCode: "AU",
    region: "Northern Territory",
    city: "Darwin",
    neighborhood: "Marrara",
    lat: -12.4009,
    lng: 130.8825,
    type: "oval",
    capacity: 14000,
    opened: 1993,
    roofType: "Open",
    primaryUse: "AFL, NRL, Cricket, Concerts",
    surfaceDimensions: "Multi-use oval field",
    concourseNotes:
      "A simpler northern stadium footprint with one major grandstand and lighter internal complexity than the country's larger venues.",
    accessibilityNotes:
      "Recent public upgrades improved accessibility, though the open-air venue still depends on thoughtful gate and weather planning.",
    generalTips: [
      "Grandstand seats are the premium purchase in Darwin heat.",
      "The venue's scale keeps views readable, so you can prioritise shade and access over raw closeness.",
      "Wet-season conditions can change comfort quickly, especially away from the main stand.",
    ],
    heroNote: "Darwin's main elite stadium is smaller and simpler than the southern bowls, so shade and weather planning matter first.",
    sectionStyle: "Bay",
    sourceRefs: [
      "https://ntmajorevents.com.au/venues/tio-stadium/",
      "https://nt.gov.au/leisure/parks-reserves/find-a-park-or-reserve/marrara-sporting-complex",
    ],
  },
  {
    id: "marvel-stadium",
    name: "Marvel Stadium",
    emoji: "🏉",
    continent: "Oceania",
    country: "Australia",
    countryCode: "AU",
    region: "Victoria",
    city: "Melbourne",
    neighborhood: "Docklands",
    lat: -37.8165,
    lng: 144.9478,
    type: "oval",
    capacity: 53359,
    opened: 2000,
    roofType: "Retractable",
    primaryUse: "AFL, Big Bash, Concerts",
    surfaceDimensions: "160m x 129m oval",
    concourseNotes:
      "A Docklands-roof stadium with broad internal circulation, strong digital wayfinding, and fast access from Southern Cross.",
    accessibilityNotes:
      "Modern accessibility upgrades, amenity hubs, and lift-served movement make the building comparatively easy to navigate.",
    generalTips: [
      "Wing and pocket bays with some elevation are the safest AFL buy under the roof.",
      "The roof makes upper rows more viable than at open ovals.",
      "For concerts, a little height usually outperforms pure floor closeness in this room.",
    ],
    heroNote: "Melbourne's roofed oval rewards balanced elevation and delivers one of the country's most weather-proof big-bowl experiences.",
    sectionStyle: "Bay",
    sourceRefs: [
      "https://www.marvelstadium.com.au/history",
      "https://www.marvelstadium.com.au/about-the-stadium",
    ],
  },
  {
    id: "qudos-bank-arena",
    name: "Qudos Bank Arena",
    emoji: "🎵",
    continent: "Oceania",
    country: "Australia",
    countryCode: "AU",
    region: "New South Wales",
    city: "Sydney",
    neighborhood: "Sydney Olympic Park",
    lat: -33.8477,
    lng: 151.0631,
    type: "arena",
    capacity: 21000,
    opened: 1999,
    roofType: "Fixed",
    primaryUse: "Concerts, Basketball, Family Shows",
    surfaceDimensions: "47m x 77m arena floor",
    concourseNotes:
      "Large enclosed concourses and event-scale loading and rigging make it the country's most flexible major indoor room.",
    accessibilityNotes:
      "Built with major-event access in mind, with strong accessible circulation and seating options throughout the bowl.",
    generalTips: [
      "Lower and middle centerline sections are the safest concert purchase.",
      "The room scales well, so upper tiers can still work if the stage design is strong.",
      "Olympic Park transport planning matters more than the internal walk.",
    ],
    heroNote: "Australia's biggest indoor arena, built to scale up for tours without losing legibility from the middle bowl.",
    sectionStyle: "Section",
    sourceRefs: [
      "https://qudosbankarena.com.au/about-qudos-bank-arena",
      "https://qudosbankarena.com.au/About-Qudos-Bank-Arena/History",
      "https://qudosbankarena.com.au/business-events/main-arena",
    ],
  },
  {
    id: "rac-arena",
    name: "RAC Arena",
    emoji: "🎵",
    continent: "Oceania",
    country: "Australia",
    countryCode: "AU",
    region: "Western Australia",
    city: "Perth",
    neighborhood: "Perth CBD",
    lat: -31.9506,
    lng: 115.8518,
    type: "arena",
    capacity: 16500,
    opened: 2012,
    roofType: "Fixed",
    primaryUse: "Concerts, Basketball, Netball, Entertainment",
    surfaceDimensions: "Multipurpose arena floor",
    concourseNotes:
      "A compact CBD arena with efficient concourses, strong premium overlays, and straightforward entry patterns for large indoor events.",
    accessibilityNotes:
      "The arena's modern layout and accessible route planning make it easier to manage than many older inner-city venues.",
    generalTips: [
      "Mid-bowl sideline and center sections are the safest concert and basketball buy.",
      "Because the room is compact, upper rows remain more viable than they first look.",
      "Perth rail access is often simpler than driving on big tour nights.",
    ],
    heroNote: "Perth's main indoor room stays compact and readable, with very few truly bad seats once you get off the extreme corners.",
    sectionStyle: "Section",
    sourceRefs: [
      "https://www.racarena.com.au/wp-content/uploads/2023/06/RAC-Arena-Function-Pack-JUL-2022.pdf",
      "https://www.racarena.com.au/wp-content/uploads/2024/12/RECONCILIATION-ACTION-PLAN-INNOVAT-2024-2025.pdf",
    ],
  },
  {
    id: "rod-laver-arena",
    name: "Rod Laver Arena",
    emoji: "🎾",
    continent: "Oceania",
    country: "Australia",
    countryCode: "AU",
    region: "Victoria",
    city: "Melbourne",
    neighborhood: "Melbourne Park",
    lat: -37.8217,
    lng: 144.9789,
    type: "arena",
    capacity: 16600,
    opened: 1988,
    roofType: "Retractable",
    primaryUse: "Tennis, Concerts, Basketball",
    surfaceDimensions: "Tennis and multipurpose arena floor",
    concourseNotes:
      "Recent redevelopment work improved the main entrance, public concourses, bars, bathrooms, and back-of-house event flexibility.",
    accessibilityNotes:
      "Accessible turnstiles, ramps, lifts, and dedicated assistance channels make the venue one of the easiest large indoor rooms in Australia to manage.",
    generalTips: [
      "Lower and middle center sections are the safest buy for tennis and concerts alike.",
      "The retractable roof keeps the upper bowl more forgiving than older open show courts.",
      "Because the room flexes heavily by event mode, a little elevation is usually smarter than chasing the very front.",
    ],
    heroNote: "Melbourne's flagship indoor event room, versatile enough to shift from Grand Slam tennis to major touring concerts without losing clarity.",
    sectionStyle: "Section",
    sourceRefs: [
      "https://www.melbournepark.com.au/about/our-history/",
      "https://www.melbournepark.com.au/news/rod-laver-arena-putting-melbourne-on-the-world-stage/",
      "https://rodlaverarena.com.au/plan-your-visit/accessibility/",
    ],
  },
  {
    id: "eden-park",
    name: "Eden Park",
    emoji: "🏉",
    continent: "Oceania",
    country: "New Zealand",
    countryCode: "NZ",
    region: "Auckland",
    city: "Auckland",
    neighborhood: "Kingsland",
    lat: -36.8742,
    lng: 174.7445,
    type: "rectangle",
    capacity: 50000,
    opened: 1900,
    roofType: "Partially Covered",
    primaryUse: "Rugby, Cricket, Football, Concerts",
    surfaceDimensions: "105m x 68m pitch",
    concourseNotes:
      "Tighter neighborhood stadium circulation but straightforward once inside the lateral stands.",
    accessibilityNotes:
      "Accessible positions are strongest in the main stands with step-free entries and lift support.",
    generalTips: [
      "Lateral lower and middle seats deliver the classic Eden Park rugby view.",
      "Ends are loud and atmospheric, but not the best tactical angle.",
      "Weather on the upper rim changes fast.",
    ],
    heroNote: "A compact international ground with sharper intimacy than most national venues.",
    sectionStyle: "Bay",
  },
];

const levelProfiles = {
  Floor: { view: 4.05, comfort: 3.55, value: 2.95, access: 4.2, atmosphere: 4.85 },
  Lower: { view: 4.2, comfort: 3.95, value: 3.75, access: 4.1, atmosphere: 4.45 },
  Mid: { view: 4.4, comfort: 4.1, value: 4.15, access: 3.9, atmosphere: 4.0 },
  Premium: { view: 4.55, comfort: 4.75, value: 3.1, access: 4.6, atmosphere: 4.05 },
  Upper: { view: 3.85, comfort: 3.55, value: 4.3, access: 3.35, atmosphere: 3.9 },
  Suite: { view: 4.25, comfort: 5, value: 2.9, access: 4.8, atmosphere: 3.5 },
};

const zoneBiasByType = {
  rectangle: { North: 0.06, NE: 0.18, East: 0.28, SE: 0.18, South: 0.06, SW: 0.18, West: 0.28, NW: 0.18 },
  oval: { North: 0.16, NE: 0.1, East: 0.16, SE: 0.1, South: 0.16, SW: 0.1, West: 0.16, NW: 0.1 },
  horseshoe: { North: 0.02, NE: 0.14, East: 0.22, SE: 0.2, South: 0.18, SW: 0.2, West: 0.22, NW: 0.14 },
  arena: { North: 0.08, NE: 0.12, East: 0.16, SE: 0.18, South: 0.22, SW: 0.18, West: 0.16, NW: 0.12, Center: 0.26 },
  amphitheater: { North: 0.02, NE: 0.08, East: 0.12, SE: 0.18, South: 0.24, SW: 0.18, West: 0.12, NW: 0.08, Center: 0.26 },
};

function clamp(value, min = 1, max = 5) {
  return Math.max(min, Math.min(max, value));
}

function round(value) {
  return Math.round(value * 10) / 10;
}

function toSlug(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function createLayout(type) {
  if (type === "arena") {
    return [
      { level: "Floor", category: "VIP", names: ["Floor A", "Floor B", "Floor C"], angles: [220, 180, 140], zones: ["West", "Center", "East"], rows: 12, seats: 24 },
      { level: "Lower", category: "General", prefix: 100, zones: zoneWheel, rows: 20, seats: 22 },
      { level: "Premium", category: "Premium", prefix: 200, zones: cardinalZones, rows: 10, seats: 18 },
      { level: "Upper", category: "General", prefix: 300, zones: zoneWheel, rows: 18, seats: 24 },
    ];
  }

  if (type === "amphitheater") {
    return [
      { level: "Floor", category: "VIP", names: ["Pit A", "Pit B", "Pit C"], angles: [225, 180, 135], zones: ["West", "Center", "East"], rows: 10, seats: 20 },
      { level: "Lower", category: "General", prefix: 100, zones: horseshoeWheel, rows: 24, seats: 26 },
      { level: "Upper", category: "General", prefix: 200, zones: horseshoeWheel, rows: 26, seats: 28 },
      { level: "Premium", category: "Premium", names: ["Lawn West", "Lawn East"], angles: [235, 125], zones: ["West", "East"], rows: 18, seats: 40 },
    ];
  }

  if (type === "horseshoe") {
    return [
      { level: "Lower", category: "General", prefix: 100, zones: horseshoeWheel, rows: 22, seats: 28 },
      { level: "Mid", category: "General", prefix: 200, zones: horseshoeWheel, rows: 20, seats: 24 },
      { level: "Premium", category: "Premium", prefix: 300, zones: ["West", "South", "East"], rows: 12, seats: 18 },
      { level: "Upper", category: "General", prefix: 400, zones: horseshoeWheel, rows: 26, seats: 30 },
    ];
  }

  if (type === "rectangle") {
    return [
      { level: "Lower", category: "General", prefix: 100, zones: zoneWheel, rows: 22, seats: 26 },
      { level: "Mid", category: "General", prefix: 200, zones: zoneWheel, rows: 18, seats: 24 },
      { level: "Premium", category: "Premium", prefix: 300, zones: cardinalZones, rows: 12, seats: 18 },
      { level: "Upper", category: "General", prefix: 400, zones: zoneWheel, rows: 26, seats: 30 },
    ];
  }

  return [
    { level: "Lower", category: "General", prefix: 100, zones: zoneWheel, rows: 22, seats: 30 },
    { level: "Mid", category: "General", prefix: 200, zones: zoneWheel, rows: 20, seats: 26 },
    { level: "Premium", category: "Premium", prefix: 300, zones: cardinalZones, rows: 12, seats: 18 },
    { level: "Upper", category: "General", prefix: 400, zones: zoneWheel, rows: 28, seats: 32 },
  ];
}

function weatherExposure(venue, level) {
  if (venue.roofType === "Fixed" || venue.roofType === "Retractable") {
    return level === "Floor" ? "Partially Exposed" : "Covered";
  }

  if (venue.roofType === "Partially Covered") {
    if (level === "Upper") return "Partially Exposed";
    return "Covered";
  }

  if (level === "Upper") return "Fully Exposed";
  if (level === "Premium") return "Partially Exposed";
  return "Open Air";
}

function priceRangeFor(level, category) {
  if (level === "Premium" || category === "Premium") return "$$$";
  if (level === "Floor" || category === "VIP") return "$$$";
  if (level === "Mid") return "$$";
  if (level === "Suite") return "$$$";
  return "$";
}

function zoneDisplay(zone) {
  if (zone === "Center") return "Center";
  if (zone === "North") return "North";
  if (zone === "South") return "South";
  if (zone === "East") return "East";
  if (zone === "West") return "West";
  return zone;
}

function angleForZone(zone, index, count, halfBowl) {
  if (zone === "Center") return 180;
  const wheel = halfBowl ? horseshoeWheel : zoneWheel;
  const direct = wheel.indexOf(zone);

  if (direct !== -1) {
    const span = halfBowl ? 270 : 360;
    const offset = halfBowl ? 135 : 0;
    return offset + direct * (span / wheel.length);
  }

  return (index / count) * 360;
}

function buildPros(level, zone, venue) {
  const list = [];

  if (level === "Premium") list.push("Fastest bar and bathroom access");
  if (level === "Floor") list.push("Closest feel to the live moment");
  if (level === "Mid") list.push("Balanced height for reading the whole play");
  if (level === "Upper") list.push("Best value in the bowl");
  if (zone === "East" || zone === "West") list.push("Strong central sightline");
  if (zone === "South") list.push("Immersive crowd noise");
  if (venue.roofType !== "Open" && level !== "Floor") list.push("Weather risk stays low");
  if (venue.type === "amphitheater") list.push("Sound carries cleanly through the terrace");

  return list.slice(0, 3);
}

function buildCons(level, zone, venue) {
  const list = [];

  if (level === "Floor") list.push("Sightlines depend on crowd movement in front");
  if (level === "Upper") list.push("Longest climb when the bowl empties");
  if (zone === "North") list.push("End-on angle can flatten parts of the play");
  if (zone === "South") list.push("Crowd intensity can run hot for families");
  if (venue.roofType === "Open" && level !== "Premium") list.push("More exposed to weather shifts");
  if (venue.type === "oval" && level === "Lower") list.push("Can feel low for tactical shape in cricket");

  return list.slice(0, 3);
}

function buildSectionName(venue, config, index) {
  if (config.names) return config.names[index];
  return `${venue.sectionStyle || "Section"} ${config.prefix + index}`;
}

function buildSection(venue, config, zone, index, count) {
  const levelProfile = levelProfiles[config.level];
  const zoneBias = zoneBiasByType[venue.type]?.[zone] ?? 0.12;
  const levelBias =
    config.level === "Premium" || config.level === "Suite"
      ? 0.18
      : config.level === "Mid"
        ? 0.12
        : config.level === "Upper"
          ? -0.04
          : 0.08;
  const sizeBias = venue.capacity > 70000 ? 0.04 : 0;
  const overall =
    (levelProfile.view + levelProfile.comfort + levelProfile.value + levelProfile.access + levelProfile.atmosphere) / 5 +
    zoneBias / 2 +
    levelBias / 2 +
    sizeBias;

  const rowCount = config.rows + (index % 3) * 2;
  const seatsPerRow = config.seats + ((index + 1) % 2) * 2;
  const bestStart = Math.max(2, Math.round(rowCount * 0.35));
  const bestEnd = Math.max(bestStart + 4, Math.round(rowCount * 0.62));
  const anglePosition =
    config.angles?.[index] ?? angleForZone(zone, index, count, venue.type === "horseshoe" || venue.type === "amphitheater");

  return {
    id: `${venue.id}-${toSlug(buildSectionName(venue, config, index))}`,
    name: buildSectionName(venue, config, index),
    level: config.level,
    zone: zoneDisplay(zone),
    category: config.category,
    priceRange: priceRangeFor(config.level, config.category),
    rowCount,
    seatsPerRow,
    viewRating: round(clamp(levelProfile.view + zoneBias + sizeBias)),
    comfortRating: round(clamp(levelProfile.comfort + (config.level === "Premium" ? 0.2 : 0))),
    valueRating: round(clamp(levelProfile.value + (config.level === "Upper" ? 0.15 : 0) - (config.level === "Premium" ? 0.2 : 0))),
    accessRating: round(clamp(levelProfile.access - (config.level === "Upper" ? 0.25 : 0) + (config.level === "Premium" ? 0.1 : 0))),
    atmosphereRating: round(
      clamp(levelProfile.atmosphere + (zone === "South" ? 0.2 : 0.05) + (config.level === "Floor" ? 0.15 : 0)),
    ),
    overallRating: round(clamp(overall)),
    pros: buildPros(config.level, zone, venue),
    cons: buildCons(config.level, zone, venue),
    bestFor:
      config.level === "Premium"
        ? "Guests prioritising comfort and shorter queues"
        : config.level === "Upper"
          ? "Fans chasing value and a tactical read"
          : config.level === "Floor"
            ? "People wanting the biggest sensory hit"
            : "General fans who want balance",
    worstFor:
      config.level === "Floor"
        ? "Anyone needing a clean elevated view"
        : config.level === "Upper"
          ? "Guests who want the quickest exit"
          : "Anyone chasing the absolute lowest spend",
    insiderTip:
      config.level === "Upper"
        ? `Rows ${bestStart}-${bestEnd} are the sweet spot before the rake feels too distant.`
        : `Aim for rows ${bestStart}-${bestEnd} to keep the angle clean without sacrificing atmosphere.`,
    bestRows: `Rows ${bestStart}-${bestEnd}`,
    avoidRows: config.level === "Floor" ? "Front row if you need a full-stage picture" : "First 1-2 rows",
    nearestFacilities: `${zoneDisplay(zone)} concourse, gate ${zone.charAt(0)}, nearest bar within one section break`,
    weatherExposure: weatherExposure(venue, config.level),
    anglePosition,
  };
}

function buildSections(venue) {
  return createLayout(venue.type).flatMap((config) => {
    const zones = config.zones || [];
    return zones.map((zone, index) => buildSection(venue, config, zone, index, zones.length));
  });
}

function buildVenueProfile(venue) {
  return {
    ...venue,
    slug: toSlug(venue.name),
    sections: buildSections(venue),
  };
}

function buildCountryList(venuesForContinent) {
  const countries = [...new Set(venuesForContinent.map((venue) => venue.country))]
    .map((country) => {
      const venueSubset = venuesForContinent.filter((venue) => venue.country === country);
      const topCity =
        [...new Set(venueSubset.map((venue) => venue.city))]
          .sort((left, right) => venueSubset.filter((venue) => venue.city === right).length - venueSubset.filter((venue) => venue.city === left).length)[0] ||
        venueSubset[0]?.city ||
        "";

      return {
        country,
        countryCode: venueSubset[0]?.countryCode || "",
        venueCount: venueSubset.length,
        topCity,
      };
    })
    .sort((left, right) => right.venueCount - left.venueCount || left.country.localeCompare(right.country));

  return countries;
}

export const venues = rawVenues.map(buildVenueProfile);
export const featuredVenues = venues.filter((venue) => venue.featured);

export const geography = continentOrder
  .map((continent) => {
    const venuesForContinent = venues.filter((venue) => venue.continent === continent);
    if (!venuesForContinent.length) return null;

    return {
      continent,
      countries: buildCountryList(venuesForContinent),
      venueCount: venuesForContinent.length,
    };
  })
  .filter(Boolean);

function haversineDistanceKm(lat1, lon1, lat2, lon2) {
  const toRadians = (value) => (value * Math.PI) / 180;
  const radius = 6371;
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return radius * c;
}

export function getNearbyVenues(position, limit = 6) {
  return venues
    .map((venue) => ({
      ...venue,
      distanceKm: haversineDistanceKm(position.lat, position.lng, venue.lat, venue.lng),
    }))
    .sort((left, right) => left.distanceKm - right.distanceKm)
    .slice(0, limit);
}

export function formatDistance(distanceKm) {
  if (distanceKm < 1) return "<1 km";
  if (distanceKm < 10) return `${distanceKm.toFixed(1)} km`;
  return `${Math.round(distanceKm)} km`;
}

export function buildSectionDetail(section, venue) {
  const frontEnd = Math.max(4, Math.round(section.rowCount * 0.22));
  const middleEnd = Math.max(frontEnd + 4, Math.round(section.rowCount * 0.66));
  const frontRating = round(clamp(section.overallRating - (section.level === "Floor" ? 0.15 : 0.1)));
  const middleRating = round(clamp(section.overallRating + 0.2));
  const rearRating = round(clamp(section.overallRating - 0.15 + (section.level === "Upper" ? 0.1 : 0)));

  return {
    sectionName: section.name,
    venueName: venue.name,
    overview: `${section.name} sits in the ${section.zone.toLowerCase()} ${section.level.toLowerCase()} of ${venue.name}, making it strongest for ${section.bestFor.toLowerCase()}. The best rows are where the rake settles and the whole event opens up without losing the room.`,
    rowAnalysis: [
      {
        rows: `1-${frontEnd}`,
        rating: frontRating,
        experience:
          section.level === "Floor"
            ? "This band is visceral and loud, but standing fans and camera rigs can interrupt the cleanest lines."
            : "You are close to the live moment, but the steepest context of the full play can flatten slightly.",
        pros: ["Closest to the action", "Fastest route into the atmosphere"],
        cons: [section.level === "Floor" ? "More movement in front" : "Lower tactical angle"],
        idealFor: "Fans who want immediacy over context",
      },
      {
        rows: `${frontEnd + 1}-${middleEnd}`,
        rating: middleRating,
        experience:
          "This is the control zone of the section, where the rake, sightline, and crowd energy feel most balanced.",
        pros: ["Best all-round angle", "Most reliable value for money"],
        cons: ["Usually the first rows to sell out"],
        idealFor: "Anyone wanting the safest purchase in the section",
      },
      {
        rows: `${middleEnd + 1}-${section.rowCount}`,
        rating: rearRating,
        experience:
          section.level === "Upper"
            ? "The view broadens and queues shorten, though distance and wind become part of the equation."
            : "You gain breathing room and a cleaner overview, but lose some immediacy.",
        pros: ["More personal space", "Easier exit flow"],
        cons: [section.level === "Upper" ? "More weather and stair exposure" : "Less intimacy"],
        idealFor: "Guests who value overview and circulation",
      },
    ],
    seatPositions: {
      bestOverall: `${section.bestRows}, seats ${Math.max(4, Math.round(section.seatsPerRow * 0.35))}-${Math.max(
        8,
        Math.round(section.seatsPerRow * 0.65),
      )}`,
      bestValue:
        section.level === "Upper"
          ? `Rows ${Math.max(4, Math.round(section.rowCount * 0.25))}-${Math.max(8, Math.round(section.rowCount * 0.5))}, near center`
          : `Back half of ${section.bestRows}, one block in from the aisle`,
      avoidThese: section.avoidRows,
      aisleSeats: `Seats 1 and ${section.seatsPerRow}`,
    },
    eventSpecific: {
      concerts: `If the stage sits on the north end, ${section.zone.toLowerCase()} sections with some elevation usually deliver the cleanest audio blend.`,
      sport: `${section.zone} ${section.level.toLowerCase()} positions work best when you want to read spacing and off-ball movement, not just the headline moment.`,
      family: `Nearest facilities are ${section.nearestFacilities.toLowerCase()}, so this section is manageable if you want predictable breaks.`,
    },
  };
}
