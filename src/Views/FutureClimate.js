import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export function FutureClimate() {
  return (
    <div>
      <h1>Vår framtid</h1>
      <Link to="/cctopics">
        <Button>Så löser vi det</Button>
      </Link>
    </div>
  );
}

export default FutureClimate;