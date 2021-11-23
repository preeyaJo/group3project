import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';

export function Inlog() {
  return (
    <div>
    
        <div className="loginForm mb-3">
        <Stack gap={2} className="col-7 mx-auto">
        <Form>
            <Form.Group className="mb-2" controlId="formGroupEmail">
                <Form.Label>Id:</Form.Label>
                <Form.Control type="email" placeholder="FörnamnEfternamn123" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Lösenord:</Form.Label>
                <Form.Control type="password" placeholder="Ditt lösenord"/>
            </Form.Group>
        </Form>
        </Stack>

        </div>

        
      <Link to="/futureclimate">
        <Button className="startButton mb-5" >Starta</Button>
      </Link>
      
    </div>
  );
}

export default Inlog;