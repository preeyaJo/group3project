/* Import state from react */
import React, { useState } from "react";

/* Import style */
import "../Style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Import React Router Dom */
import { Redirect } from "react-router-dom";

/* Import components */
import Inlog from "../Components/Inlog";

import { UserScoreContext } from "../App";

/* Start function for inlog */
export function Start() {
  /***** Script area *****/

  // hämtar tillgång till global variabel för att skicka användarnamn till Highscore.js //Christian
  const { scoreContext, setScoreContext } = React.useContext(UserScoreContext);

  /* Set data to user */
  const adminUser = {
    name: "Anna",
    userID: "Anna2022",
    password: "anna123",
  };

  /* State to login */
  const [user, setUser] = useState({ userID: "" });
  const [error, setError] = useState("");

  /* Function for login in */
  const Login = (details) => {
    /* Checks if the user input data is correct to adminUser */
    if (
      details.userID === adminUser.userID &&
      details.password === adminUser.password
    ) {
      /* set details to state */
      setUser({
        userID: details.userID,
      });

      // Vid korrekt inloggning lagrar vi useID i context för att använda i Highscore.js //Christian
      setScoreContext({ score: scoreContext.score, namn: details.userID });

      /* If the user data is incorrect, try again */
    } else {
      setError(<p className="errorMassage">Felaktiga inloggningsuppgifter</p>);
    }
  };

  /***** Output area *****/

  return (
    <div>
      {/* Change path when inlog data is correct */}
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

/***** Send component content *****/
export default Start;
