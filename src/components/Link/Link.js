import React from 'react';
import PropTypes from 'prop-types';

export const PrimaryLink = (href, props) => (
    <a href={href} className="link link--primary">
        {props.children}
    </a>
);

PrimaryLink.propTypes= {
    href: PropTypes.string.isRequired,
};