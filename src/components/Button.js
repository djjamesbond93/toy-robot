import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick }) => (
  <button className="button" onClick={onClick}>{children}</button>
);

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func
};

export default Button;