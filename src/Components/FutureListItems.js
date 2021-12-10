import "../futureclimate.css";

/*Array för boxarna*/
const futureListArray = [
  {
    year: 2021,
    description:
      "Vi arbetar idag med att lära ut hur klimatet kommer förändras efter tid. Men trots detta blir inte förändringen tillräcklig.",
    image:
      "https://cdn.pixabay.com/photo/2020/01/04/19/17/earth-4741488_1280.jpg",
  },
  {
    year: 2025,
    description: "Havet stiger 1 meter. Torka blir allt vanligare.",
    image:
      "https://cdn.pixabay.com/photo/2019/12/10/07/18/ice-4685227__480.jpg",
  },
  {
    year: 2030,
    description: "Farligt väder ökar med 250%. Havet stiger 3 meter.",
    image:
      "https://cdn.pixabay.com/photo/2020/09/15/12/51/man-5573521__480.jpg",
  },

  {
    year: 2035,
    description: "Korallerna i havet dör. Golfströmmen vänder. ",
    image:
      "https://cdn.pixabay.com/photo/2016/11/22/19/33/sea-1850228_1280.jpg",
  },
  {
    year: 2040,
    description: "Havet stiger 6 meter. Krig bryter ut över driksvatten.",
    image:
      "https://cdn.pixabay.com/photo/2016/11/21/17/37/arid-1846708_1280.jpg",
  },
  {
    year: 2045,
    description: "Krig över resurser blir allt vanligare.",
    image:
      "https://cdn.pixabay.com/photo/2017/07/26/12/04/destruction-2541513_1280.jpg",
  },
  {
    year: 2050,
    description:
      "Temperaturen skenar. Naturen som vi idag känner till den är borta.",
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/20/38/climate-change-5224748_1280.jpg",
  },
];

function FutureListItems() {
  return futureListArray.map((futurelist) => (
    <section>
      <img className="timeline-image" src={futurelist.image} alt="" />
      <h2 className="timeline-text-top">{futurelist.year}</h2>
      <p className="timeline-text-center">{futurelist.description}</p>
    </section>
  ));
}

/*Funktion för att skriva ut timeline - GAMLA*/

/*function FutureListItems() {
  return (

	futureListArray.map(futurelist=>(
		<section id="timeline" className="timeline-container">
		<div className="timeline-block">
		<div class="timeline-img"></div>
		<div className="timeline-content">
        <img src={futurelist.image} alt="Hands holding earth"/>
			<h2>{futurelist.year}</h2>
        
			<p>{futurelist.description}</p>
        
			</div>
		</div>
		</section>
	))
      
  );
} */

/* Om vi vill få timeline perfekt till skärm sparar jag koden jag hade först :)
<div>
    <section id="timeline" className="timeline-container">
		<div className="timeline-block">
			<div class="timeline-img">
			</div>

			<div className="timeline-content">
            <img src="https://cdn.pixabay.com/photo/2016/02/25/20/37/hands-1222866_1280.jpg" alt="Hands holding earth"/>
				<h2>2021</h2>
        
				<p>Vi arbetar idag med att lära ut hur klimatet kommer förändras efter tid. Men trots detta blir inte förändringen tillräcklig. Såhär kommer vår framtid se ut utan förändring.. </p>
        
			</div>
		</div>

		<div className="timeline-block">
			<div className="timeline-img">
			</div> 

			<div className="timeline-content">
            <img src="https://cdn.pixabay.com/photo/2017/05/31/13/09/ice-2360348_1280.jpg" alt="Glacier melting"/>
				<h2>2025</h2>
				<p>Havet stiger 1 meter. Torka blir allt vanligare.</p>
			
			</div> 
		</div> 

		<div className="timeline-block">
			<div className="timeline-img">
			</div>

			<div className="timeline-content">
            <img src="https://cdn.pixabay.com/photo/2019/05/07/02/23/gas-4184871_1280.jpg" alt="Dangerous weather human with gasmask"/>
				<h2>2030</h2>
				<p>Farligt väder ökar med 250%. Havet stiger 3 meter.</p>
			</div>
		</div> 

		<div className="timeline-block">
			<div className="timeline-img">
			</div>

			<div className="timeline-content">
            <img src="https://cdn.pixabay.com/photo/2017/02/22/17/02/beach-2089936_1280.jpg" alt="Waves in storm"/>
				<h2>2035</h2>
				<p>Korallerna i havet dör. Golfströmmen vänder. </p>
				
			</div>
		</div> 

		<div className="timeline-block">
			<div className="timeline-img">
			</div> 

			<div className="timeline-content">
            <img src="https://cdn.pixabay.com/photo/2014/03/05/21/12/desert-279862_1280.jpg" alt="Dry land"/>
				<h2>2040</h2>
				<p>Havet stiger 6 meter. Krig bryter ut över driksvatten.</p>
				
			</div>
		</div> 

		<div className="timeline-block">
			<div className="timeline-img">
			</div> 

			<div className="timeline-content">
            <img src="https://cdn.pixabay.com/photo/2017/06/30/19/52/apocalypse-2459465_1280.jpg" alt="war in city"/>
				<h2>2045</h2>
				<p>Krig över resurser blir allt vanligare.</p>
				
			</div> 
		</div>

        <div className="timeline-block">
			<div className="timeline-img">
			</div> 

			<div className="timeline-content">
            <img src="https://cdn.pixabay.com/photo/2017/04/23/19/17/climate-change-2254711_1280.jpg" alt="Earth burning"/>
				<h2>2050</h2>
				<p>Temperaturen skenar. Naturen som vi idag känner till den är borta.</p>
				
			</div> 
		</div>
	</section>
    </div>*/

/*Exporterar*/
export default FutureListItems;
