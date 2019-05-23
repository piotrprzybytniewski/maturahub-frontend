import React from 'react';
import PropTypes from 'prop-types';

export const CardImg = ({src, alt}) => (
    <img src={src} alt={alt} className="card__img"/>
);

CardImg.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};