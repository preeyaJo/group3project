import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

export function CCTopics() {
  return (
    <div>
      <h1>Klimatförändringar</h1>
      <Link to="/quizlobby">
        <Button>Till quizet</Button>
      </Link>    
    </div>
  );
}

export default CCTopics;