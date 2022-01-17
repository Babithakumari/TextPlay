import Navlink from "./Navlink.js";
import Logo from "./Logo.js";
import Toggle from "./Toggle.js";
import About from "./About.js";

function Navbar(prop) {
  return (
    <nav className={`nav${prop.mode}`}>
      <Logo brand="TextPlay" />
      <ul className="navLinks">
        <Navlink title="Home" link="#" mode={prop.mode} />
        <Navlink title="About" link="#" mode={prop.mode} />
      </ul>
      <Toggle />
    </nav>
  );
}

export default Navbar;
