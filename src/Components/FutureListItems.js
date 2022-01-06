/*Importerar CSS*/
import "../Style/futureclimate.css";

/*Array för boxarna*/
const futureListArray = [
  {
    year: 2021,
    alt: "Man with erath in his hands",
    description:
      "Vi arbetar idag med att lära ut hur klimatet kommer förändras efter tid. Men trots detta blir inte förändringen tillräcklig.",
      image:
      "https://cdn.pixabay.com/photo/2020/01/04/19/17/earth-4741488_1280.jpg",
  },
  {
    year: 2025,
    alt: "Ice on ocean",
    description: "Havet stiger 1 meter. Torka blir allt vanligare.",
    image:
      "https://cdn.pixabay.com/photo/2019/12/10/07/18/ice-4685227__480.jpg",
  },
  {
    year: 2030,
    alt: "Human with mask, ocean and industrial background",
    description: "Farligt väder ökar med 250%. Havet stiger 3 meter.",
    image:
      "https://cdn.pixabay.com/photo/2020/09/15/12/51/man-5573521__480.jpg",
  },

  {
    year: 2035,
    alt: "Ocean during storm",
    description: "Korallerna i havet dör. Golfströmmen vänder. ",
    image:
      "https://cdn.pixabay.com/photo/2016/11/22/19/33/sea-1850228_1280.jpg",
  },
  {
    year: 2040,
    alt: "Dried landscape",
    description: "Havet stiger 6 meter. Krig bryter ut över driksvatten.",
    image:
      "https://cdn.pixabay.com/photo/2016/11/21/17/37/arid-1846708_1280.jpg",
  },
  {
    year: 2045,
    alt: "Destroyed city",
    description: "Krig över resurser blir allt vanligare.",
    image:
      "https://cdn.pixabay.com/photo/2017/07/26/12/04/destruction-2541513_1280.jpg",
  },
  {
    year: 2050,
    alt: "Earth and ozone depletion",
    description:
      "Temperaturen skenar. Naturen som vi idag känner till den är borta.",
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/20/38/climate-change-5224748_1280.jpg",
  },
];

/*Funktion för att visa timeline*/
function FutureListItems() {
  return futureListArray.map((futurelist, index) => ( /*Skriver ut genom .map*/
    <section className="section-timeline" key={index}>

      <img className="timeline-image" src={futurelist.image} alt={futurelist.alt} /> {/*Bilder till timeline*/}
      <h2 className="timeline-text-top">{futurelist.year}</h2> {/*År till timeline*/}
      <p className="timeline-text-center">{futurelist.description}</p> {/*Text till timeline*/}

    </section>
  ));
}



/*Exporterar*/
export default FutureListItems;
