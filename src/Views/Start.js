import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";


import Button from 'react-bootstrap/Button';

import Inlog from "../Components/Inlog";

export function Start() {
  return (
    <div>
      <h1 className="startHeader">Lär för framtiden</h1>
      <FontAwesomeIcon icon={faGlobeEurope} className="startLogga"></FontAwesomeIcon>

      <Inlog />
      <div className="group3">
      <h2>En app av Grupp 3</h2>
      <div className="groupNames3">
      <p>Linda Nyberg Andersson <br></br>
         Christian Areschoug <br></br>
         Elin Ljungquist <br></br>
         Preeyanut Olin Joomkudrang <br></br>
         Ida Larsson <br></br>
      </p>
      </div>
      </div>
    </div>
  );
}

export default Start;