import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import BottomMenu from '../Components/BottomMenu';
import GlobalHeader from "../Components/GlobalHeader";


export function GlacierSize() {
  return (  
    <div>
      <GlobalHeader/>
        {/*Komponent för bottenmeny*/}
      <BottomMenu/>
         
    </div>
  );
}

export default GlacierSize;