import PropTypes from "prop-types";

const Main = ({ children }) => {
  return <main className="main">{children}</main>;
};

Main.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a React node and required
};

export default Main;
