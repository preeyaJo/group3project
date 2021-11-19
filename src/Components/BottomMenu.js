import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndustry } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureLow } from "@fortawesome/free-solid-svg-icons";
import { faWater } from "@fortawesome/free-solid-svg-icons";
import { faMountain } from "@fortawesome/free-solid-svg-icons";
import { faDice } from "@fortawesome/free-solid-svg-icons";



function BottomMenu() {
  return (
      <Navbar className="BottomMenu" fixed="bottom">
    <Container>
      <Link className="BottomNavItem" to="/fossilfuels"><FontAwesomeIcon icon={faIndustry} /></Link>
      <Link className="BottomNavItem" to="/globalwarming"><FontAwesomeIcon icon={faTemperatureLow} /></Link>
      <Link className="BottomNavItem" to="/sealevels"><FontAwesomeIcon icon={faWater} /></Link>
      <Link className="BottomNavItem" to="/glaciersize"><FontAwesomeIcon icon={faMountain} /></Link>
      <Link className="BottomNavItem"  sto="/quiz"><FontAwesomeIcon icon={faDice} /></Link>
    </Container>
  </Navbar>

  );
}

export default BottomMenu;