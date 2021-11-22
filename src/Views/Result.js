import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalHeader from '../Components/GlobalHeader';
import BottomMenu from '../Components/BottomMenu';

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export function Result() {
  return (
    <div>
      {/*Komponent för global header*/}
      <GlobalHeader/>
      {/*Komponent för bottenmeny*/}
      <BottomMenu/>
      <h1>Ditt resultat:</h1>
      <h2>5/10</h2>
      <Link to="/quiz">
        <Button>Spela igen</Button>
      </Link>
      <Link to="/fossilfuels">
        <Button>Läs mer om klimat</Button>
      </Link>
    </div>
  );
}

export default Result;