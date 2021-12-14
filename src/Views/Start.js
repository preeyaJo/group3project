/* Importerar state från react */
import React, { useState } from "react";

/* Importerar CSS/style */
import "../Style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Importerar React Router Dom */
import { Redirect } from "react-router-dom";

/* Importerar komponenter */
import Inlog from "../Components/Inlog";

import { UserScoreContext } from "../App";

/* Funktion för inlog */
export function Start() {
  /***** Script area *****/

  // hämtar tillgång till global variabel för att skicka användarnamn till Highscore.js //Christian
  const { scoreContext, setScoreContext } = React.useContext(UserScoreContext);

  /* Personuppgifter för inloggning. Går att lägga i en egen JSON om man vill bygga vidare */
  const adminUser = {
    name: "Anna",
    userID: "Anna2022",
    password: "anna123",
  };

  /* State till login */
  const [user, setUser] = useState({ userID: "" });
  const [error, setError] = useState("");

  /* Funktion för login */
  const Login = (details) => {
    /* Kollar om datan från input är korrekt med adminUser */
    if (
      details.userID === adminUser.userID &&
      details.password === adminUser.password
    ) {
      /* sätter details till state */
      setUser({
        userID: details.userID,
      });

      // Vid korrekt inloggning lagrar vi useID i context för att använda i Highscore.js //Christian
      setScoreContext({ score: scoreContext.score, namn: details.userID });

      /* Om inmatad data är inkorrekt, skriv ut error- meddelande */
    } else {
      setError(<p className="errorMassage">Felaktiga inloggningsuppgifter</p>);
    }
  };

  return (
    <div>
      {/* Ändra path/view vid korrekta inloggningsuppgifter */}
      {user.userID !== "" ? (
        <div>
          <Redirect to="/futureclimate"></Redirect>
        </div>
      ) : (
        <Inlog Login={Login} error={error} />
      )}
    </div>
  );
}

/***** Exportera komponent *****/
export default Start;
