import React from 'react';

export const Section = ({type, children}) => (
    <div className={`section section--${type}`}>
        <div className="container">
            {children}
        </div>
    </div>
);