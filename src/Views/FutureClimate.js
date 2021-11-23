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
      <Navbar className="BottomMenu" fixed="top"> {/*Toppmeny*/}
            <h1 className="text-center">Vår framtid <FontAwesomeIcon icon={faLongArrowAltDown}></FontAwesomeIcon></h1>
            </Navbar>
            
      <FutureListItems/>{/*Timeline*/}

      <Navbar className="BottomMenu" fixed="bottom"> {/*Bottenmeny*/}
      <Link className="button-to-cctopics" to="/fossilfuels"> {/*Knapp til CCTopics*/}
        <a>Så löser vi det  <FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon></a>
      </Link>
            </Navbar>
    </div>
  );
}

export default FutureClimate;