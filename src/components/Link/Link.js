import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";

export const Link = ({href, type, children}) => (
    <NavLink exact to={href} className={`link link--${type}`}>
        {children}
    </NavLink>
);

Link.propTypes = {
    href: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};