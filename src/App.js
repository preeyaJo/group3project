import React from "react";
import ReactDOM from "react-dom";

import "./App.css";
import Start from "./Views/Start";
import FutureClimate from "./Views/FutureClimate";
import QuizLobby from "./Views/QuizLobby";
import Quiz from "./Views/Quiz";
import Result from "./Views/Result";
import HighScore from "./Views/HighScore";
import FossilFuels from "./Views/FossilFuels";
import GlobalWarming from "./Views/GlobalWarming";
import SeaLevels from "./Views/SeaLevels";
import GlacierSize from "./Views/GlacierSize";
import Info from "./Views/Info";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <Switch>
              <Route path="/" exact component={Start} />
              <Route path="/futureclimate" component={FutureClimate} />
              <Route path="/fossilfuels" component={FossilFuels} />
              <Route path="/globalwarming" component={GlobalWarming} />
              <Route path="/sealevels" component={SeaLevels} />
              <Route path="/glaciersize" component={GlacierSize} />
              <Route path="/quizlobby" component={QuizLobby} />
              <Route path="/quiz" component={Quiz} />
              <Route path="/result" component={Result} />
              <Route path="/highscore" component={HighScore} />
              <Route path="/info" component={Info} />
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
