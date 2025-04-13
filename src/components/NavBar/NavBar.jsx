import PropTypes from "prop-types";

const NavBar = ({ children }) => {
  return <nav className="nav-bar">{children}</nav>;
};

NavBar.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a React node and required
};

export default NavBar;
