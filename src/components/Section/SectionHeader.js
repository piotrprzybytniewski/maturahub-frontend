import React from 'react';

export const SectionHeader = ({type, children}) => (
    <h3
        className={`section__header section__header--${type}`}>
        {children}
    </h3>
);