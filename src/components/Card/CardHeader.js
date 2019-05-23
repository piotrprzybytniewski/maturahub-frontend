import React from 'react';

export const CardHeader = ({title, children}) => (
    <div className="card__header">
        <h4 className="card__title">
            {title}
        </h4>
        {children}
    </div>
);