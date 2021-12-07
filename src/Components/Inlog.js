/* Import State from React */
import React, { useState } from "react";

/* Import style */
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

/* Import icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";

/* Import Bootstrap */
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';


/* Start function for inlogForm */
export function Inlog({Login, error}) {
  const [details, setDetails] = useState({name: "", email: "", password: ""});

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
                <Form.Control type="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} placeholder="Exemel: Efternamn123" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Lösenord:</Form.Label>
                <Form.Control type="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} placeholder="Ditt lösenord"/>
            </Form.Group>

            
            
            {/* Start button */}
              <input type="submit" value="Starta" />
           

        </Form>
        </Stack>

        </div>

      {/*  
      <Link to="/futureclimate">
        <Button className="startButton mb-5" type="submit" value="login">Starta</Button>
      </Link>*/}

<div className="group3">
        <h2>En app av Grupp 3</h2>
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