import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "../Link/Link";

export const CardBtn = ({href, type}) => (
        <Link href={href} type={`${type} card__btn`}>
            SPRAWDŹ
        </Link>
);

CardBtn.propTypes = {
    href: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};