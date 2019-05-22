import React from 'react';

export const SectionText = ({type, children}) => (
    <p
        className={`section__text section__text--${type}`}>
        {children}
    </p>
);