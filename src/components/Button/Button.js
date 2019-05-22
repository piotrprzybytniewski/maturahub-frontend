import React from 'react';
import PropTypes from 'prop-types';

export const Button = (type, props) => (
    <button type={type} className="btn">
        {props.children}
    </button>
);

Button.propTypes= {
    type: PropTypes.string.isRequired,
};