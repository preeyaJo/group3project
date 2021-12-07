/* Import state from react */
import React, {useState} from "react";

/* Import style */
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Import React Router Dom */
import { Redirect } from "react-router-dom";

/* Import components */
import Inlog from "../Components/Inlog";



/* Start function for inlog */
export function Start() {

  /***** Script area *****/

  /* Set data to user */
  const adminUser = {
    name: "Anna",
    email: "anna@anna.com",
    password: "anna123"
  }

  /* State to login */
  const [user, setUser] = useState({email: ""});
  const [error, setError] = useState("");

  /* Function for login in */
  const Login = details => {

    /* Checks if the user input data is correct to adminUser */
    if (details.email === adminUser.email && details.password === adminUser.password){

      /* set details to state */
      setUser({
        email: details.email
      });
      
      
    /* If the user data is incorrect, try again */  
    } else {
      setError("Felaktiga inloggningsuppgifter");
      
    }
  }

  /***** Output area *****/

  return (
    <div>

      {/* Change path when inlog data is correct */}
      {(user.email !== "") ? (
        <div>
        <Redirect to="/futureclimate"></Redirect>
      </div>
      ) : (
        <Inlog Login={Login} error={error}/>
      )}
      
    </div>
  );
}

/***** Send component content *****/
export default Start;
