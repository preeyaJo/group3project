import React from "react";
import "../App.css";

import { Link } from 'react-router-dom';

export function FutureClimate() {
  return (
    <div>
      <h1>Vår framtid</h1>
      <Link to="/cctopics">
        <button>Så löser vi det</button>
      </Link>
    </div>
  );
}

export default FutureClimate;