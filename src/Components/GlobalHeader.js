import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

function GlobalHeader() {
  const history = useHistory();
  return (
    <Navbar className="BottomMenu" fixed="top">
      <Container>
        <Router>
          {/* Tillbakaknapp till tidigare view. */}
          <div className="TopNavItem">
            <FontAwesomeIcon
              onClick={() => history.goBack()}
              icon={faArrowCircleLeft}
            ></FontAwesomeIcon>
          </div>

          <div>
            <Switch>
              <Route path="/fossilfuels">Bränslen</Route>
              <Route path="/glaciersize">Glaciärer</Route>
              <Route path="/globalwarming">Global uppvärning</Route>
              <Route path="/sealevels">Havsnivåer</Route>
              <Route path="/highscore">Quiz</Route>
              <Route path="/quizlobby">Quiz</Route>
              <Route path="/quiz">Quiz</Route>
              <Route path="/result">Quiz</Route>
              <Route path="/info">Info</Route>
            </Switch>
          </div>
        </Router>
        <Link className="TopNavItem" to="/info">
          <FontAwesomeIcon icon={faInfoCircle} />
        </Link>
      </Container>
    </Navbar>
  );
}

export default GlobalHeader;
