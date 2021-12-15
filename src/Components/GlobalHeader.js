
/* Importerar react router dom */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";

/* Importerar CSS/style */
import "../Style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Importerar Bootstrap klasser */
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

/* Importerar ikoner */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

/* Komponenten global header */
function GlobalHeader() {
  /* useHistory hämtar platsen man tidigare var på */
  const history = useHistory();

  return (
    /* Navigationen är fixerad längst upp på sidan, även vid scroll */
    <Navbar className="GlobalHeader" fixed="top">
      <Container>
        <Router>
          {/* Tillbakaikon som leder till tidigare view (useHistory) vid klick. */}
          <div className="TopNavItem GlobalHeaderText">
            <FontAwesomeIcon
              onClick={() => history.goBack()}
              icon={faArrowCircleLeft}
            ></FontAwesomeIcon>
          </div>

          <div>
            {/* H1an/rubriken byts beroende på view/path med hjälp av en Switch i en Router */}
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

        {/* Infoikon/knapp som leder till mer info */}
        <NavLink className="TopNavItem GlobalHeaderText" to="/info">
          <FontAwesomeIcon icon={faInfoCircle} />
        </NavLink>
      </Container>
    </Navbar>
  );
}
/* Exporterar komponent */
export default GlobalHeader;
