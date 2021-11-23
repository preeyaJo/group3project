import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndustry } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureLow } from "@fortawesome/free-solid-svg-icons";
import { faWater } from "@fortawesome/free-solid-svg-icons";
import { faMountain } from "@fortawesome/free-solid-svg-icons";
import { faDice } from "@fortawesome/free-solid-svg-icons";


function BottomMenu() {
  return (
    <Navbar className="BottomMenu" fixed="bottom">
      <Container>
        <NavLink activeClassName="active" className="BottomNavItem" to="/fossilfuels">
          <FontAwesomeIcon icon={faIndustry} />
        </NavLink>
        <NavLink activeClassName="active" className="BottomNavItem" to="/globalwarming">
          <FontAwesomeIcon icon={faTemperatureLow} />
        </NavLink>
        <NavLink activeClassName="active" className="BottomNavItem" to="/sealevels">
          <FontAwesomeIcon icon={faWater} />
        </NavLink>
        <NavLink activeClassName="active" className="BottomNavItem" to="/glaciersize">
          <FontAwesomeIcon icon={faMountain} />
        </NavLink>
        <NavLink activeClassName="active" className="BottomNavItem" to="/quizLobby">
          <FontAwesomeIcon icon={faDice} />
        </NavLink>
      </Container>
    </Navbar>
  );
}

export default BottomMenu;
