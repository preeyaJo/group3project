import "../Info.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const information = [
  {
    calls: "information",
    info1: "Vi på Climate Change har på uppdrag av skolverket fått i uppgift att lära ungdomar i åk 7-9 i Sverige om klimatet och dess påverkan på vår jord på ett strukturerat sätt med hjälp av kommunala skolor runt om i landet. Vårt mål är att i tidig ålder få barn och ungdomar att förstå hotet med att utnyttja jordens resurser i en sådan hastighet att det blir livshotande för oss människor men även den biologiska mångfalden i naturen.",
    info2: "Genom vår webbsida vill vi förmedla kunskap om den globala uppvärmingen och dess konsekvenser men även ge tips till barnen/ungdomarna om vad dem kan göra för att påverka den globalauppvärmingen i mindre utsträckning.",
    info3: "Här ni några frågor, tveka inte att kontakta oss",
  },
];

function informations(props) {
  const data = information.find((p) => p.calls=== props.calls)

  return (
      <div>
    <div className="information">
      {" "}
      <h1 className="info-head">Information till lärare och vårdnashavare</h1>
      <p>
        <p>{data.info1}</p>
        <p>{data.info2}</p>
      </p>
      <div className="contact Show-score QuizItem rounded text-center text-secondary d-flex flex-column justify-content-center align-items-center">
        <p>{data.info3}</p>
        <p>
          <FontAwesomeIcon icon={faPhone} /> 010-10 100 10
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> climatechange@change.se
        </p>
      </div>
      </div>
      <p>
      <Link to="/">
        <Button className="knapp m-2">Tillbaka till hem</Button>
      </Link>
    </p>
    </div>
  );
}

export default informations;
