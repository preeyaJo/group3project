import React from "react";
import "../App.css";

import { Link } from 'react-router-dom';

export function CCTopics() {
  return (
    <div>
      <h1>Klimatförändringar</h1>
      <Link to="/quizlobby">
        <button>Till quizet</button>
      </Link>    
    </div>
  );
}

export default CCTopics;