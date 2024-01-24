import React from "react";
import PropTypes from "prop-types";
function Preview(props) {
  return (
    <>
    <h1>About Text</h1>
    <p></p>
    </>
  );
}

export default Preview;

Preview.propTypes = {
  title: PropTypes.string.isRequired,
};
Preview.defaultProps = {
  title: "Title",
};
