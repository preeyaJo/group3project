/*Importerar css*/
import "../Style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/*Importerar komponenter*/
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

/*Importerar från DOM*/
import { NavLink } from "react-router-dom";

/*Importerar ikoner från FontAwesome*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndustry } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureLow } from "@fortawesome/free-solid-svg-icons";
import { faWater } from "@fortawesome/free-solid-svg-icons";
import { faMountain } from "@fortawesome/free-solid-svg-icons";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";


function BottomMenu() {
  return (
    /*Navbar för bottenmeny*/
    <Navbar className="BottomMenu" fixed="bottom">
      <Container>
      <NavLink activeClassName="active" className="BottomNavItem bottommenu-house" to="/futureclimate">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
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
        <NavLink activeClassName="active-dice" className="BottomNavItem bottom-dice" to="/quizLobby">
          <FontAwesomeIcon icon={faDice} />
        </NavLink>
      </Container>
    </Navbar>
  );
}

/*Exporterar*/
export default BottomMenu;
