import { useState } from "react";

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

export default Box;
