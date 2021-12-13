/*Importerar React & DOM*/
import React from "react";
import { Link } from "react-router-dom";

/*Importerar CSS */
import "../Style/futureclimate.css";
import Navbar from "react-bootstrap/Navbar";

/*Importerar komponenter */
import FutureListItems from "../Components/FutureListItems";

/*Importerar Ikoner från FontAwesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";



/*Funktion för att visa view och dess*/
export function FutureClimate() {
  return (
    <div>
      <Navbar className="GlobalHeader justify-content-center">
        {/*Toppmeny*/}
        <h1 >
          Vår framtid:
        </h1>
      </Navbar>
      <section className="content-futureclimate">
        <FutureListItems />
        {/*Timeline*/}
      </section>

       {/*Bottenmeny*/}
      <Navbar
        className="BottomMenu FutureBottom justify-content-center">
        <Link className="button-to-categories" to="/fossilfuels">
          {/*Knapp til ämnen*/}
          <div className="GlobalHeaderText"> Så löser vi det {" "}
          <FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon></div>
        </Link>
      </Navbar>
    </div>
  );
}

/*Exporterar*/
export default FutureClimate;
