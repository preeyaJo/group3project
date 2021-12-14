/* Importerar State från React */
import React, { useState } from "react";

/* Importerar CSS/style */
import "../Style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Importerar ikoner */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";

/* Importerar Bootstrap */
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

/* Funktion för inlog, antingen logga in eller nekad inloggning */
export function Inlog({ Login, error }) {

  /* tom lista. Tomma listan matas på med hjälp av useState */
  const [details, setDetails] = useState({
    name: "",
    userID: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <div>
      {/* Rubrik */}
      <h1 className="startHeader">Lär för framtiden</h1>
      {/* Logga */}
      <FontAwesomeIcon
        icon={faGlobeEurope}
        className="startLogga"
      ></FontAwesomeIcon>
      {/* Error text, texten dyker upp vid felaktiga inloggningsuppgifter */}
      {error !== "" ? <div className="error">{error}</div> : ""}

      <div className="loginForm mb-3">
        <Stack gap={2} className="col-7 mx-auto">
          <Form onSubmit={submitHandler}>

            {/* ID input form */}
            <Form.Group className="mb-2" controlId="formGroupEmail">
              <Form.Label>Id:</Form.Label>
              {/* Placerar inskriven data i tomma listan./sparar data */}
              <Form.Control
                type="name"
                onChange={(e) =>
                  setDetails({ ...details, userID: e.target.value })
                }
                value={details.userID}
                placeholder="Exemel: Förnamn1234"
              />
            </Form.Group>

            {/* Lösenord input form */}
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Lösenord:</Form.Label>
              {/* Placerar inskriven data i tomma listan./sparar data */}
              <Form.Control
                type="password"
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
                placeholder="Ditt lösenord"
              />
            </Form.Group>

            {/* Logga in knapp */}
            <div className="centerButton">
              <Button className="startButton mb-5" type="submit">
                Starta
              </Button>
            </div>
          </Form>
        </Stack>
      </div>

      {/* Info om vår grupp */}
      <div className="group3">
        <h2 className="h2Start">En app av Grupp 3</h2>
        <div className="groupNames3">
          {/* Gruppmedlemmarna */}
          <p>
            Linda Nyberg Andersson <br></br>
            Christian Areschoug <br></br>
            Elin Ljungquist <br></br>
            Preeyanut Olin Joomkudrang <br></br>
            Ida Larsson <br></br>
          </p>
        </div>
      </div>
    </div>
  );
}
/* Exportera komponent */
export default Inlog;
