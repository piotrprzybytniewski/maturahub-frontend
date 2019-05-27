import React from 'react';
import PropTypes from 'prop-types';

export const Content = ({additionalClass = '', children}) => (
    <div className={`content ${additionalClass}`}>
        {children}
    </div>
);

Content.propTypes= {
    additionalClass: PropTypes.string,
};