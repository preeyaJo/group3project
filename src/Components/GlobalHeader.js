import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../Style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

function GlobalHeader() {
  const history = useHistory();

  return (
    <Navbar className="GlobalHeader" fixed="top">
      <Container>
        <Router>
          {/* Tillbakaknapp till tidigare view. */}
          <div className="TopNavItem GlobalHeaderText">
            <FontAwesomeIcon
              onClick={() => history.goBack()}
              icon={faArrowCircleLeft}
            ></FontAwesomeIcon>
          </div>

          <div>
            <Switch>
              <Route path="/fossilfuels">
                <h1 className="GlobalHeaderText">Bränslen</h1>
              </Route>
              <Route path="/glaciersize">
                <h1 className="GlobalHeaderText">Glaciärer</h1>
              </Route>
              <Route path="/globalwarming">
                <h1 className="GlobalHeaderText">Global uppvärning</h1>
              </Route>
              <Route path="/sealevels">
                <h1 className="GlobalHeaderText">Havsnivåer</h1>
              </Route>
              <Route path="/highscore">
                <h1 className="GlobalHeaderText">Quiz</h1>
              </Route>
              <Route path="/quizlobby">
                <h1 className="GlobalHeaderText">Quiz</h1>
              </Route>
              <Route path="/quiz">
                <h1 className="GlobalHeaderText">Quiz</h1>
              </Route>
              <Route path="/result">
                <h1 className="GlobalHeaderText">Quiz</h1>
              </Route>
              <Route path="/info">
                <h1 className="GlobalHeaderText">Info</h1>
              </Route>
            </Switch>
          </div>
        </Router>
        <NavLink className="TopNavItem GlobalHeaderText" to="/info">
          <FontAwesomeIcon icon={faInfoCircle} />
        </NavLink>
      </Container>
    </Navbar>
  );
}

export default GlobalHeader;
