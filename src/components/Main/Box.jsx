import { useState } from "react";
import PropTypes from "prop-types";

const Box = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  function handleToggle() {
    setIsOpen((open) => !open);
  }

  return (
    <div className="box">
      <div className="btn-toggle" onClick={handleToggle}>
        {isOpen ? "-" : "+"}
      </div>
      {isOpen && children}
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a React node and required
};

export default Box;
