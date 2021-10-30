import React from 'react'
import PropTypes from 'prop-types';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  if (email.length) {
    return (
      <div>
        <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
        <h3>{(verifyEmail(email) ? <span className="valid">Email Válido</span> : <span className="invalid">Email Inválido</span>)}</h3>
      </div>
    );
  }
  return null;
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;
