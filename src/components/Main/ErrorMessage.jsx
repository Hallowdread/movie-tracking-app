import PropTypes from "prop-types";

const ErrorMessage = ({ message }) => {
  return (
    <p className="error">
      <span>❌</span>
      {message}
    </p>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired, // Validate that message is a required string
};

export default ErrorMessage;
