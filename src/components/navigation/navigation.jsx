import { Link } from "react-router-dom";
import { NavigationContainer, LogoContainer } from "./navigation.styles";
import LogoSrc from "/Logo.png";

const Navigation = () => {
  return (
    <NavigationContainer>
      <LogoContainer>
        <Link to="/dashboard">
          <img src={LogoSrc} alt="Anabasis logo" />
        </Link>
      </LogoContainer>
      <nav></nav>
    </NavigationContainer>
  );
};

export default Navigation;
