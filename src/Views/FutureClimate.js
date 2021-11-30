import React from "react";
import "../futureclimate.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faLongArrowAltDown} from "@fortawesome/free-solid-svg-icons";


import { Link } from 'react-router-dom';

import FutureListItems from "../Components/FutureListItems";

export function FutureClimate() {
  return (
    <div>
      <Navbar className="BottomMenu justify-content-center" fixed="top"> {/*Toppmeny*/}
            <h1 className="">Vår framtid <FontAwesomeIcon icon={faLongArrowAltDown}></FontAwesomeIcon></h1>
            </Navbar>
            <section className="content-futureclimate">
      <FutureListItems/>{/*Timeline*/}
            </section>
      <Navbar className="BottomMenu justify-content-center" fixed="bottom"> {/*Bottenmeny*/}
      <Link className="button-to-cctopics" to="/fossilfuels"> {/*Knapp til CCTopics*/}
        Så löser vi det  <FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon>
      </Link>
            </Navbar>
    </div>
  );
}

export default FutureClimate;