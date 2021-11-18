import React from "react";
import "../App.css";

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";

export function Start() {
  return (
    <div>
      <h1>Lär för framtiden</h1>
      <FontAwesomeIcon icon={faGlobeEurope}></FontAwesomeIcon>
      <p>En app av Grupp 3</p>
      <Link to="/futureclimate">
        <button>Starta</button>
      </Link>
    </div>
  );
}

export default Start;