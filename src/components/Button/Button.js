import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({type, btnClass, children }) => (
    <button type={type} className={`link link--${btnClass}`}>
        {children}
    </button>
);

Button.propTypes= {
    type: PropTypes.string.isRequired,
};