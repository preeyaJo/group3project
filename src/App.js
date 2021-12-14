import React, { useState } from "react";

import "./Style/App.css";
import "./Style/quiz.css";
import Start from "./Views/Start";
import FutureClimate from "./Views/FutureClimate";
import QuizLobby from "./Views/QuizLobby";
import Quiz from "./Views/Quiz";
import HighScore from "./Views/HighScore";
import FossilFuels from "./Views/FossilFuels";
import GlobalWarming from "./Views/GlobalWarming";
import SeaLevels from "./Views/SeaLevels";
import GlacierSize from "./Views/GlacierSize";
import Info from "./Views/Info";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// skapar scorecontext som en global variable
export const UserScoreContext = React.createContext(0);

function App() {
  // State för att dela en const mellan quiz och high-score
  // UserScoreContext.Provider nedan delar scoreContext med de routes som wrappas. Alla underliggane komponenter har tillgång.
  const [scoreContext, setScoreContext] = useState({
    score: 0,
    namn: "Unknown User",
  });

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <Switch>
              <UserScoreContext.Provider
                value={{ scoreContext, setScoreContext }}
              >
                <Route path="/" exact component={Start} />
                <Route path="/highscore" component={HighScore} />
                <Route path="/quiz" component={Quiz} />

                <Route path="/futureclimate" component={FutureClimate} />
                <Route path="/fossilfuels" component={FossilFuels} />
                <Route path="/globalwarming" component={GlobalWarming} />
                <Route path="/sealevels" component={SeaLevels} />
                <Route path="/glaciersize" component={GlacierSize} />
                <Route path="/quizlobby" component={QuizLobby} />
                <Route path="/info" component={Info} />
              </UserScoreContext.Provider>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
