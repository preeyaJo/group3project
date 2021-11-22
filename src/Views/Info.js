import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalHeader from '../Components/GlobalHeader';

export function Info() {
  return (
    <div>
      {/*Komponent för global header*/}
      <GlobalHeader/>

      <h1>Info om appen</h1>
      <h2>Bla bla bla</h2>
    </div>
  );
}

export default Info;