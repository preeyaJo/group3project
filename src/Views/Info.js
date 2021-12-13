
import React from "react";



/* Import internal sources */
import "../Style/App.css";
import "../Info.css";
import GlobalHeader from "../Components/GlobalHeader";
import BottomMenu from "../Components/BottomMenu";

/* Import bootstrap style */
import "bootstrap/dist/css/bootstrap.min.css";

/* Import icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";




export function Information() {
  
  return (
    <div>
      <GlobalHeader />
      <div className="container extraSpacing">
      <div className="m-3 infoText">
      <h2>Information till lärare och vårdnashavare</h2>
      <p>Vi på Climate Change har på uppdrag av skolverket fått i uppgift att lära ungdomar i åk 7-9 i Sverige om klimatet och dess påverkan på vår jord på ett strukturerat sätt med hjälp av kommunala skolor runt om i landet. Vårt mål är att i tidig ålder få barn och ungdomar att förstå hotet med att utnyttja jordens resurser i en sådan hastighet att det blir livshotande för oss människor men även den biologiska mångfalden i naturen.</p>
      <p>Genom vår webbsida vill vi förmedla kunskap om den globala uppvärmingen och dess konsekvenser men även ge tips till barnen/ungdomarna om vad dem kan göra för att påverka den globalauppvärmingen i mindre utsträckning.</p>

      <div className="infoContact">
      <h3>Här ni några frågor, tveka inte att kontakta oss</h3>
      <div><FontAwesomeIcon icon={faPhone}/> <a href="tel:000-0000000">010-10 100 10</a></div>
      <address><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:climatechange@change.se">climatechange@change.se</a></address>
      </div>
      </div>
      
      </div>
      <BottomMenu />
    </div>
  );
}



export default Information;
