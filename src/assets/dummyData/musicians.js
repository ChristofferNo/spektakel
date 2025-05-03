
import adriansBandImage from "../Images/placeHolderImage.jpeg";
import BogdanBreakdance from "../Images/VinterBogdan.jpeg";
import RubenOchTrubadurerna from "../Images/RubenTrub.jpeg";

const musicians = [
  {
    name: "Adrians Band",
    genres: ["Folk", "Acoustic"],
    rating: 4.9,
    price: "＄",
    image: adriansBandImage,
    location: "Lund",
    description: "Adrians Band spelar mjuk folk- och akustisk musik med inslag av svensk vistradition – perfekt för trädgårdsfester eller bröllop på landet.",
    reviews: [
      { user: "Lisa", comment: "Fantastisk stämning, supernöjda!", rating: 5 },
      { user: "Johan", comment: "Professionella och väldigt musikaliska.", rating: 4.8 }
    ]
  },
  {
    name: "Bogdan Breakdance",
    genres: ["Funk", "Jazz", "Coola"],
    rating: 4.8,
    price: "＄＄",
    image: BogdanBreakdance,
    location: "Uppsala",
    description: "Bogdan Breakdance levererar funky jazz med modern edge – ett självklart val för events som kräver energi och groove.",
    reviews: [
      { user: "Sara", comment: "De satte verkligen fart på dansgolvet!", rating: 5 },
      { user: "Emil", comment: "Hög energi och kul attityd – rekommenderas.", rating: 4.6 }
    ]
  },
  {
    name: "Ruben och Trubadurerna",
    genres: ["Classical", "Chamber"],
    rating: 4.8,
    price: "＄",
    image: RubenOchTrubadurerna,
    location: "Stockholm",
    description: "Ett klassiskt ensembleband med eleganta trubadurer – utmärkt för ceremoniella tillfällen eller exklusiva middagar.",
    reviews: [
      { user: "Anna", comment: "Magisk känsla på vårt bröllop.", rating: 4.9 }
    ]
  },
  {
    name: "DJ Studentmix",
    genres: ["Electronic", "Pop"],
    rating: 4.7,
    price: "＄＄＄",
    image: "https://via.placeholder.com/300x200",
    location: "Göteborg",
    description: "En populär DJ bland studenter som levererar både pophits och elektroniska beats hela natten.",
    reviews: [
      { user: "Kalle", comment: "Bra mix, alla dansade!", rating: 4.7 }
    ]
  },
  {
    name: "Stand-up Students",
    genres: ["Comedy", "Entertainment"],
    rating: 4.6,
    price: "＄",
    image: "https://via.placeholder.com/300x200",
    location: "Malmö",
    description: "Underhållande stand-up-akt från studentvärlden. Skrattgaranti på allt från firmafest till sittning!",
    reviews: [
      { user: "Moa", comment: "Roliga och spontana – kvällen blev minnesvärd.", rating: 4.6 }
    ]
  }
];

export default musicians;
