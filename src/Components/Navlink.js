import PropTypes from "prop-types";

function Navlink(prop) {
  return (
    <li>
      <a href={prop.link} className={prop.mode}>
        {prop.title}
      </a>
    </li>
  );
}

export default Navlink;

/* Setting Prop types - used to debug in large apps*/

Navlink.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
