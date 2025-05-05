import adriansBandImage from "../Images/placeHolderImage.jpeg";
import BogdanBreakdance from "../Images/BogdanVision.jpeg";
import BogdanBreakdanceVinter from "../Images/VinterBogdan.jpeg";
import RubenOchTrubadurerna from "../Images/RubenTrub.jpeg";
import Melker from "../Images/Melker.jpeg";
import DJHammer from "../Images/DJ-Hammer-2.jpeg";
import MaxSax from "../Images/Max-Rak.jpeg";

const musicians = [
  {
    name: "Adrians Band",
    genres: ["Blues", "Rock"],
    rating: 4.9,
    price: "＄",
    image: adriansBandImage,
    location: "Lund",
    description:
      "Adrians Band spelar mjuk folk- och akustisk musik med inslag av svensk vistradition – perfekt för trädgårdsfester eller bröllop på landet.",
    reviews: [
      { user: "Lisa", comment: "Fantastisk stämning, supernöjda!", rating: 5 },
      {
        user: "Johan",
        comment: "Professionella och väldigt musikaliska.",
        rating: 4.8,
      },
    ],
  },
  {
    name: "Bogdan Breakdance",
    genres: ["Funk", "Jazz", "Coola", "Rock"],
    rating: 5.6,
    price: "＄＄",
    image: BogdanBreakdance,
    location: "Uppsala",
    description:
      "Bogdan Breakdance levererar funky jazz med modern edge – ett självklart val för events som kräver energi och groove.",
    reviews: [
      {
        user: "Sara",
        comment: "De satte verkligen fart på dansgolvet!",
        rating: 5,
      },
      {
        user: "Emil",
        comment: "Hög energi och kul attityd – rekommenderas.",
        rating: 4.6,
      },
    ],
  },
  {
    name: "Ruben och Trubadurerna",
    genres: ["Classical", "Chamber", "Folk"],
    rating: 4.8,
    price: "＄",
    image: RubenOchTrubadurerna,
    location: "Stockholm",
    description:
      "Ett klassiskt ensembleband med eleganta trubadurer – utmärkt för ceremoniella tillfällen eller exklusiva middagar.",
    reviews: [
      { user: "Anna", comment: "Magisk känsla på vårt bröllop.", rating: 4.9 },
    ],
  },
  {
    name: "Melker Thunholm",
    genres: ["Acoustic", "Guitarr", "Pop"],
    rating: 4.9,
    price: "＄＄＄",
    image: Melker,
    location: "Göteborg",
    description:
      "En populär sångare och gitarrist som förtrollar med sin charm och magiska blick. ",
    reviews: [
      { user: "Kalle", comment: "Bra mix, alla dansade!", rating: 4.7 },
    ],
  },

  {
    name: "Bogdans Pizzeria",
    genres: ["Comedy", "Entertainment", "House"],
    rating: 4.6,
    price: "＄",
    image: BogdanBreakdanceVinter,
    location: "Malmö",
    description:
      "Underhållande stand-up-akt från studentvärlden. Skrattgaranti på allt från firmafest till sittning!",
    reviews: [
      {
        user: "Moa",
        comment: "Roliga och spontana – kvällen blev minnesvärd.",
        rating: 4.6,
      },
    ],
  },

  {
    name: "DJ Hammer",
    genres: ["House", "DJ", "Club", "Epic"],
    rating: 4.5,
    price: "＄＄",
    image: DJHammer,
    location: "Uppsala",
    description:
      "Uppsalas främsta DJ som förgyller din kväll. Med erfarenhet som DJ för Ekonomi-programmets mottagning och fleratlet nationer och studentsläpp är vi säkra på att DJ Hammer levererar!",
    reviews: [
      {
        user: "Truls",
        comment:
          "Otrolig! Styrde dansgolvet som med en tv-kontroll– kvällen blev episk!",
        rating: 4.5,
      },
    ],
  },

  {
    name: "Max with the Sax",
    genres: ["Coola", "Saxofon", "Jazz", "Blues", "Funk"],
    rating: 4.7,
    price: "＄",
    image: MaxSax,
    location: "Uppsala",
    description:
      "Saxofonist som gör hela publiken kåt. Med fingrar spelande likt en gud och lungor alstrande vindar som blåser publiken till extas!",
    reviews: [
      {
        user: "Zoe",
        comment:
          "Helt magiskt! Vilken sexig man och ännu sexigare saxofon – jag är våt!",
        rating: 4.7,
      },
    ],
  },
];

export default musicians;
