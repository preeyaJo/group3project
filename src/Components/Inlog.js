/* Import State from React */
import React, { useState } from "react";

/* Import style */
import "../Style/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

/* Import icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";

/* Import Bootstrap */
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';


/* Start function for inlogForm */
export function Inlog({Login, error}) {
  const [details, setDetails] = useState({name: "", userID: "", password: ""});

  const submitHandler = e => {
    e.preventDefault();

    Login(details);
  }
  return (
    <div>
  
  <h1 className="startHeader">Lär för framtiden</h1>
      <FontAwesomeIcon
        icon={faGlobeEurope}
        className="startLogga"
      ></FontAwesomeIcon>

        {(error !== "") ? ( <div className="error">{error}</div> ) : ""}

        <div className="loginForm mb-3">
        <Stack gap={2} className="col-7 mx-auto">
        <Form onSubmit={submitHandler}>


            <Form.Group className="mb-2" controlId="formGroupEmail">
                <Form.Label>Id:</Form.Label>
                <Form.Control type="name" onChange={e => setDetails({...details, userID: e.target.value})} value={details.userID} placeholder="Exemel: Förnamn1234" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Lösenord:</Form.Label>
                <Form.Control type="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} placeholder="Ditt lösenord"/>
            </Form.Group>

            
            
            {/* Start button */}
            <div className="centerButton">
              <Button className="startButton mb-5" type="submit">Starta</Button>
            </div>

        </Form>
        </Stack>

        </div>

        <div className="group3">
        <h2 className="h2Start">En app av Grupp 3</h2>
        <div className="groupNames3">
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

export default Inlog;