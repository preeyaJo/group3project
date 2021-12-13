import React from "react";
import "../futureclimate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowCircleRight} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import FutureListItems from "../Components/FutureListItems";

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
        <Link className="button-to-cctopics" to="/fossilfuels">
          {/*Knapp til Ämnen*/}
          <div className="GlobalHeaderText"> Så löser vi det {" "}
          <FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon></div>
        </Link>
      </Navbar>
    </div>
  );
}

export default FutureClimate;
