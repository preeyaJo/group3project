import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";


import Button from 'react-bootstrap/Button';

export function Start() {
  return (
    <div>
      <h1>Lär för framtiden</h1>
      <FontAwesomeIcon icon={faGlobeEurope}></FontAwesomeIcon>
      <p>En app av Grupp 3</p>
      <p>test</p>
      <Link to="/futureclimate">
        <Button>Starta</Button>
      </Link>
      
    </div>
  );
}

export default Start;